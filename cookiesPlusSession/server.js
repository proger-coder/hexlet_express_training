import express from 'express';
import cookieParser from 'cookie-parser';

const exp = new express();

let remained = 3;
exp.set('view engine','pug');
exp.use(cookieParser());

exp.get('/', (req, res) => {

    if(!req.cookies.uid){
        res.cookie('uid', 'conrcfajc');
    }

    remained -= 1;
    if(remained <0){
        res.status(403);
        res.render('index',{remained: `No Visits remained. Reset!`, resetButton: true});
    } else {
        res.status(200);
        res.render('index',{remained: `Visits remained: ${remained}`, resetButton: false});
    }
})

exp.post('/', (req, res) => {
    remained = 3;
    res.status(300);
    res.redirect('/');
})


exp.listen(3333,()=>{
    console.log('listening on port 3333');
})
