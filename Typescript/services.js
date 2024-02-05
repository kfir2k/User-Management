console.log("Services Online");
var STATUS;
(function (STATUS) {
    STATUS["ONLINE"] = "ONLINE";
    STATUS["OFFLINE"] = "OFFLINE";
    STATUS["PENDING"] = "PENDING";
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
            //const editButton = document.createElement("button");
            //editButton.textContent = "Edit";
            //editButton.addEventListener("click", () => this.editData(user));
            const logoutButton = document.createElement("button");
            logoutButton.textContent = "Logout";
            logoutButton.addEventListener("click", () => this.logoutUser(user));
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => this.deleteUser(user));
            tableRow.appendChild(usernameCell);
            tableRow.appendChild(emailCell);
            tableRow.appendChild(firstNameCell);
            tableRow.appendChild(lastNameCell);
            tableRow.appendChild(statusCell);
            //tableRow.appendChild(editButton);
            tableRow.appendChild(logoutButton);
            tableRow.appendChild(deleteButton);
            tbody.appendChild(tableRow);
        }
    }
    isDuplcated(user) {
        if (!this._array.find((arryU) => arryU.username === user.username)) {
            return false;
        }
        return true;
    }
    isUserAttributesCorrectForLogin(attribute, inputFromUser) {
        console.log("attribute", attribute);
        console.log("inputFromUser", inputFromUser);
        if (this._array.find((obj) => obj[attribute] === inputFromUser)) {
            return true;
        }
        return false;
    }
    deleteUser(user) {
        console.log("this:", this);
        console.log("User:", user);
        let indexToDelete = this._array.findIndex(obj => obj === user);
        this._array.splice(indexToDelete, 1);
        this.renderUsers();
    }
    logoutUser(user) {
        let indexOfClickedRow = this._array.findIndex(obj => obj === user);
        this._array[indexOfClickedRow].status = STATUS.OFFLINE;
        this.renderUsers();
    }
    loginUser(username) {
        let indexOfClickedRow = this._array.findIndex(obj => obj.username === username);
        this._array[indexOfClickedRow].status = STATUS.ONLINE;
        this.renderUsers();
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
