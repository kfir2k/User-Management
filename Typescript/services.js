console.log("Services Online");
var STATUS;
(function (STATUS) {
    STATUS["ONLINE"] = "Online";
    STATUS["OFFLINE"] = "Offline";
    STATUS["PENDING"] = "Pending";
})(STATUS || (STATUS = {}));
export class UsersArry {
    constructor() {
        this._array = [];
    }
    addUser(user) {
        this._array.push(user);
    }
    removeUser(user) {
        const index = this._array.indexOf(user);
        if (index !== -1) {
            this._array.splice(index, 1);
        }
        else {
            console.log(`${user} not found in the array.`);
        }
    }
    renderUsers() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        for (let user of this._array) {
            const tableRow = document.createElement("tr");
            const usernameCell = document.createElement("td");
            usernameCell.textContent = user.username;
            const emailCell = document.createElement("td");
            emailCell.textContent = user.email;
            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = user.firstName;
            const lastNameCell = document.createElement("td");
            lastNameCell.textContent = user.lastName;
            const statusCell = document.createElement("td");
            statusCell.textContent = user.status;
            tableRow.appendChild(usernameCell);
            tableRow.appendChild(emailCell);
            tableRow.appendChild(firstNameCell);
            tableRow.appendChild(lastNameCell);
            tableRow.appendChild(statusCell);
            tbody.appendChild(tableRow);
        }
    }
    isDuplcated(user) {
        if (!this._array.find((arryU) => arryU.username === user.username)) {
            return false;
        }
        return true;
    }
    get array() {
        return this._array;
    }
}
export class User {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    constructor(username, password, email, firstName, lastName) {
        this._username = username;
        this._password = password;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._status = STATUS.PENDING;
    }
}
