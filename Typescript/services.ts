console.log("Services Online");


enum STATUS{
	ONLINE,
	OFFLINE,
	PENDING,
}

const usersArry: Array<User>= []







export class User{

	private _username: string;
	private _password: string;
	private _email: string;
	private _firstName: string;
	private _lastName: string;
	private _status: STATUS;


	constructor(username: string, password: string, email: string, firstName: string, lastName: string) {
		this._username = username
		this._password = password
		this._email = email
		this._firstName = firstName
		this._lastName = lastName
		this._status = STATUS.PENDING

		
	}



		
		
	}


	








