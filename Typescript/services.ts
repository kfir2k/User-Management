


enum STATUS {
	ONLINE = "Online",
	OFFLINE = "Offline",
	PENDING = "Pending",
}

export class UsersArry {
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

			const actionCell = document.createElement("td");
			actionCell.classList.add("action-flex")

			const editButton = document.createElement("div");
			editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>';
			editButton.addEventListener("click", () => this.openEditDataModal(user));

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

			actionCell.appendChild(editButton);
			actionCell.appendChild(logoutButton);
			actionCell.appendChild(deleteButton);

			tbody.appendChild(tableRow);
		}


	}


	isDuplcated(user: User): boolean {
		if (!this._array.find((arryU) => arryU.username === user.username)) {
			return false
		}
		return true
	}



	isUserAttributesCorrectForLogin(attribute: keyof User, inputFromUser: string): boolean {

		if (this._array.find((obj) => obj[attribute] === inputFromUser)) {
			return true
		}
		return false
	}


	openEditDataModal(user: User) {

		let indexOfClickedRow: number = this._array.findIndex(obj => obj === user);
		let selectedUser = this._array[indexOfClickedRow]

		const editModal = document.getElementById("editModal") as HTMLDivElement
		editModal.style.display = "block"
		const [editedFirstName, editedLastName] = editModal.querySelectorAll("input")
		editedFirstName.value = selectedUser.firstName
		editedLastName.value = selectedUser.lastName
		editModal.addEventListener("submit", () => {
			selectedUser.firstName = editedFirstName.value
			selectedUser.lastName = editedLastName.value

			editModal.style.display = "none"
			this.renderUsers()
		})


		const closeEditModalBtn = document.querySelector(".closeEditModalBtn")
		closeEditModalBtn?.addEventListener("click", () => {
			editModal.style.display = "none";
		})

		window.addEventListener("click", (event) => {
			if (event.target === editModal) {
				editModal.style.display = "none";
			}
		})




		this.renderUsers()
	}


	deleteUser(user: User) {
		let indexToDelete = this._array.findIndex(obj => obj === user);
		this._array.splice(indexToDelete, 1)
		this.renderUsers()

	}

	logoutUser(user: User) {

		let indexOfClickedRow: number = this._array.findIndex(obj => obj === user);
		this._array[indexOfClickedRow].status = STATUS.OFFLINE
		this.renderUsers()
	}

	loginUser(username: string) {
		let indexOfClickedRow: number = this._array.findIndex(obj => obj.username === username);
		this._array[indexOfClickedRow].status = STATUS.ONLINE
		this.renderUsers()
	}



	get array() {
		return this._array
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











