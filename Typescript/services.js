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
            const actionCell = document.createElement("td");
            actionCell.classList.add("action-flex");
            // const editButton = document.createElement("div");
            // editButton.textContent = "Edit";
            // editButton.addEventListener("click", () => this.editData(user));
            const logoutButton = document.createElement("div");
            logoutButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>';
            logoutButton.addEventListener("click", () => this.logoutUser(user));
            const deleteButton = document.createElement("div");
            deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
            deleteButton.addEventListener("click", () => this.deleteUser(user));
            tableRow.appendChild(usernameCell);
            tableRow.appendChild(emailCell);
            tableRow.appendChild(firstNameCell);
            tableRow.appendChild(lastNameCell);
            tableRow.appendChild(statusCell);
            tableRow.appendChild(actionCell);
            //tableRow.appendChild(editButton);
            actionCell.appendChild(logoutButton);
            actionCell.appendChild(deleteButton);
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
        if (this._array.find((obj) => obj[attribute] === inputFromUser)) {
            return true;
        }
        return false;
    }
    deleteUser(user) {
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
