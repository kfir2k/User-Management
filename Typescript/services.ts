console.log("Services Online");


enum STATUS{
	ONLINE = "ONLINE",
	OFFLINE = "OFFLINE",
	PENDING = "PENDING",
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
	

	isDuplcated(user: User): boolean {
		if (!this._array.find((arryU) => arryU.username === user.username)) {
			return false
		}
		return true
	}


	deleteUser(user:User) {
		console.log("this:",this);
		console.log("User:", user);
		let indexToDelete = this._array.findIndex(obj => obj === user);
		this._array.splice(indexToDelete, 1)
		this.renderUsers()
		
	}

	logoutUser(user: User) {
		
		let indexOfClickedRow:number = this._array.findIndex(obj => obj === user);
		this._array[indexOfClickedRow].status = STATUS.OFFLINE
		this.renderUsers()
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


	








