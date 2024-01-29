var STATUS;
(function (STATUS) {
    STATUS[STATUS["ONLINE"] = 0] = "ONLINE";
    STATUS[STATUS["OFFLINE"] = 1] = "OFFLINE";
    STATUS[STATUS["PENDING"] = 2] = "PENDING";
})(STATUS || (STATUS = {}));
const usersArry = [];
export class User {
    constructor(username, password, email, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = STATUS.PENDING;
    }
    pushUserToArry() {
    }
}
