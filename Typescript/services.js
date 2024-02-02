console.log("Services Online");
var STATUS;
(function (STATUS) {
    STATUS[STATUS["ONLINE"] = 0] = "ONLINE";
    STATUS[STATUS["OFFLINE"] = 1] = "OFFLINE";
    STATUS[STATUS["PENDING"] = 2] = "PENDING";
})(STATUS || (STATUS = {}));
const usersArry = [];
export class User {
    constructor(username, password, email, firstName, lastName) {
        this._username = username;
        this._password = password;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._status = STATUS.PENDING;
    }
}
