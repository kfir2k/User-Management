enum STATUS{
	ONLINE,
	OFFLINE,
	PENDING,
	
}




const usersArry: Array<User>= []






export class User{

	private username: string;
	private password: string;
	private email: string;
	private firstName: string;
	private lastName: string;
	private status: STATUS;





	constructor(username: string, password: string, email: string, firstName: string, lastName: string) {
		this.username = username
		this.password = password
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.status = STATUS.PENDING

		
	}


	pushUserToArry(){
		
		
	}


	







}

