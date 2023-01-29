//const Express = require('express');
import Express from 'express';
const app = new Express();

let counter = 0;

function _204(res){
    res.status(204);
    res.end('204 no content');
}

function midware_1(req, res, next){
    console.log('mid 1');
    next();
}

function midware_2(req, res, next){
    console.log('mid 2');
    next();
}

function midware_3(req, res, next){
    console.log('mid 3');
    next(3); // будет ЭРРОР!
}

app.get('/midware', midware_1, midware_2, midware_3, (req,res) => {
    res.send({result:'some'});
})

//-----------------------------------
app.get('/', (req,res) => {
    res.send({value:counter})
})

app.get('/:some', (req,res) => {
    if(req.params.some){
        console.log(req.params.some);
    _204(res);
    }
})

app.post('/:action', (req,res) => {
    switch(req.params.action){
        case "increment": {
            counter += 1;
            _204(res);
        }
        break;
        case "decrement": {
            counter -= 1;
            _204(res);
        }
        break;

        default: _204(res);
        break;
    }
})

app.put('/:action', (req,res) => {
    if(req.params.action === 'set'){
        counter = req.query.value;
        _204(res);
    }
})

app.delete('/reset', (req,res) => {
    counter = 0;
    _204(res);
})

app.listen(3333)