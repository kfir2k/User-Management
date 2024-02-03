console.log("Services Online");


enum STATUS{
	ONLINE = "Online",
	OFFLINE = "Offline",
	PENDING = "Pending",
}

export class UsersArry{
	private _array: Array<User>
	constructor() {
		this._array = [];
	}
	addUser(user: User) {
		this._array.push(user)
	}
	removeUser(user: User) {
		const index = this._array.indexOf(user)
		if (index !== -1) {
            this._array.splice(index, 1);
        } else {
            console.log(`${user} not found in the array.`);
		}
	}
   renderUsers() {
	const tbody = document.querySelector("tbody") as HTMLElement;
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
	

	isDuplcated(user: User): boolean {
		if (!this._array.find((arryU) => arryU.username === user.username)) {
			return false
		}
		return true
	}



	get array() {
		return  this._array
	}
}







export class User {

	private _username: string;
	public get username(): string {
		return this._username;
	}
	public set username(value: string) {
		this._username = value;
	}
	private _password: string;
	public get password(): string {
		return this._password;
	}
	public set password(value: string) {
		this._password = value;
	}
	private _email: string;
	public get email(): string {
		return this._email;
	}
	public set email(value: string) {
		this._email = value;
	}
	private _firstName: string;
	public get firstName(): string {
		return this._firstName;
	}
	public set firstName(value: string) {
		this._firstName = value;
	}
	private _lastName: string;
	public get lastName(): string {
		return this._lastName;
	}
	public set lastName(value: string) {
		this._lastName = value;
	}
	private _status: STATUS;
	public get status(): STATUS {
		return this._status;
	}
	public set status(value: STATUS) {
		this._status = value;
	}


	constructor(username: string, password: string, email: string, firstName: string, lastName: string) {
		this._username = username
		this._password = password
		this._email = email
		this._firstName = firstName
		this._lastName = lastName
		this._status = STATUS.PENDING
	}



		
		
}


	








