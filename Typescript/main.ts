import { User } from "./services.js";


const registerNewUserBtn = document.getElementById("registerNewUserBtn");
const loginForm = document.getElementById("login") as HTMLCanvasElement;
const modalRegister = document.getElementById("modalRegister")as HTMLCanvasElement;
const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form"); 

const usernameRegister = document.getElementById("usernameRegister");
const passwordRegister = document.getElementById("passwordRegister");
const emailRegister = document.getElementById("emailRegister");
const firstNameRegister = document.getElementById("firstNameRegister");
const lastNameRegister = document.getElementById("lastNameRegister");









console.log("Forms",forms);


forms.forEach((element) => {
	element?.addEventListener("submit",(event)=> {
event.preventDefault();
})
})











registerNewUserBtn?.addEventListener("click", () => {
	renderModal(modalRegister, true);
	renderModal(loginForm, false);

}
)

function renderModal(htmlElement: HTMLCanvasElement , isShow:boolean) {

	if (isShow) {
		htmlElement.style.display = "block"
		
	} else {
		htmlElement.style.display = "none"
}

	
	
}


//let kfir = new User("kfir2k", "12345", "kfir.kotler@gmail.com", "Kfir", "Kotler")
//console.log(kfir);



forms[0].addEventListener("submit", userCreateionController)
function userCreateionController() {
	console.log("Controller");
	console.log("Value????",usernameRegister.value);
	
	//let usernameValue:string = usernameRegister

	//get values from dom



	//add new user
	//push user to arry
	//render user in a dynmic tayble

} 





