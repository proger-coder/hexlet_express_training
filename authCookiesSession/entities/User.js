// @ts-check
// BEGIN (write your solution here)
export default class User {
    constructor(nickname, encryptedPass) {
        this.nickname = nickname;
        this.encryptedPass = encryptedPass;
        this.guest = false;
    }

    isGuest() {
        return this.guest;
    }
}
// END