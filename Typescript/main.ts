
import { userCreateionController } from "./controller.js";


const registerNewUserBtn = document.getElementById("registerNewUserBtn");
const loginForm = document.getElementById("login") as HTMLCanvasElement;
const modalRegister = document.getElementById("modalRegister") as HTMLCanvasElement;
const modalLogin = document.getElementById("modalLogin") as HTMLCanvasElement;
const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input")
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input")









console.log("Forms", forms);


forms.forEach((element) => {
	element?.addEventListener("submit", (event) => {
		event.preventDefault();
	})
})











registerNewUserBtn?.addEventListener("click", () => {
	renderModal(modalRegister, true);
	renderModal(loginForm, false);

}
)

function renderModal(htmlElement: HTMLCanvasElement, isShow: boolean) {

	if (isShow) {
		htmlElement.style.display = "block"

	} else {
		htmlElement.style.display = "none"
	}



}


//let kfir = new User("kfir2k", "12345", "kfir.kotler@gmail.com", "Kfir", "Kotler")
//console.log(kfir);



forms[0].addEventListener("submit", userCreateionController)





