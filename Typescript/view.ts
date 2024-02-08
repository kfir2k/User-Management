//view
import { Controller } from "./controller.js";

const modalRegister = document.getElementById("modalRegister") as HTMLCanvasElement;
const modalLogin = document.getElementById("modalLogin") as HTMLCanvasElement;
const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input")
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input")



//delete warnings on focus in inputs of modal Register
modalRegister.querySelectorAll("input").forEach((input) => input?.addEventListener("focus", () => {
	const warningMsg = document.querySelectorAll(".warning-msg")
	if (warningMsg.length > 0)
		deleteWarnings()
}))



modalLogin.querySelectorAll("input").forEach((input) => input?.addEventListener("focus", () => {
	const warningMsg = document.querySelectorAll(".warning-msg")
	if (warningMsg.length > 0)
		deleteWarnings()
}))






forms.forEach((element) => {
	element?.addEventListener("submit", (event) => {
		event.preventDefault();
	})
})












function renderModal(htmlElement: HTMLCanvasElement, isShow: boolean, flex?: string) {

	if (flex) {
		htmlElement.style.display = "flex"
		return
	}
	if (isShow) {
		htmlElement.style.display = "block"

	} else {
		htmlElement.style.display = "none"
	}
	return
}

const deleteWarnings = function () {
	const warningMsg = document.querySelectorAll(".warning-msg")
	
	warningMsg.forEach((element) => { element.remove() });
	return
}

const warningMsg = function (contentOfMsg: string, elementOfChildToShowItUnder: HTMLElement) {
	const warningMsg = document.createElement("div") as HTMLDivElement
	warningMsg.textContent = contentOfMsg;
	warningMsg.classList.add("warning-msg")
	const parentElement = elementOfChildToShowItUnder.parentNode;
	parentElement?.insertBefore(warningMsg, elementOfChildToShowItUnder.nextSibling);
}





const validateUsername = function (username: string): boolean {
	return username.trim().length >= 3;
};

const validatePassword = function (password: string): boolean {
	return password.trim().length >= 5;
};

const validateEmail = function (email: string): boolean {
	if (typeof email !== 'string' || email.trim().length === 0) {
		return false;
	}
	if (email.indexOf('@') === -1) {
		return false;
	}
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);

};


const validateName = function (name: string): boolean {
	return name.trim().length >= 2;
};





const submitRegister = () => {
	
	let verifiedUsername: String = ""
	let verifiedPassword: String = ""
	let verifiedEmail: String = ""
	let verifiedFirstName: String = ""
	let verifiedLastName: String = ""

	deleteWarnings();

	if (validateUsername(usernameRegister.value)) {
		verifiedUsername = usernameRegister.value
	} else {
		warningMsg("Not a vaild username", usernameRegister);
	}

	if (validatePassword(passwordRegister.value)) {
		verifiedPassword = passwordRegister.value

	} else {
		warningMsg("Needed a stronger password", passwordRegister);
	}

	if (validateEmail(emailRegister.value)) {
		verifiedEmail = emailRegister.value

	} else {
		warningMsg("Email isnt valied", emailRegister);
	}
	if (validateName(firstNameRegister.value)) {
		verifiedFirstName = firstNameRegister.value
	} else {
		warningMsg("First Name isnt valied", firstNameRegister);
	}
	if (validateName(lastNameRegister.value)) {
		verifiedLastName = lastNameRegister.value

	} else {
		warningMsg("Last Name isnt valied", lastNameRegister);
	}


	if (verifiedUsername.length > 0 && verifiedPassword.length > 0 && verifiedEmail.length > 0 && verifiedFirstName.length > 0 && verifiedLastName.length > 0) {
		let arryOfVerifiedUserDetails: string[] = [verifiedUsername.toString(), verifiedPassword.toString(), verifiedEmail.toString(), verifiedFirstName.toString(), verifiedLastName.toString()];
		if (Controller.checkDuplcates(arryOfVerifiedUserDetails)) {
			return warningMsg("User with this name already exists", usernameRegister);
		}
		renderModal(modalLogin, true);
		Controller.getUserFromSubmit(arryOfVerifiedUserDetails)
		usernameRegister.value = "";
		passwordRegister.value = "";
		emailRegister.value = "";
		firstNameRegister.value = "";
		lastNameRegister.value = "";





	}

}


const submitLogin = () => {
	deleteWarnings()
	const isUserLoggedIn: boolean = Controller.checkLogin(usernameLogin.value, passwordLogin.value)
	

	if (isUserLoggedIn) {

		usernameLogin.value = ""
		passwordLogin.value = ""
	}
	if (!isUserLoggedIn) {
		warningMsg("Wrong Credentials*", usernameLogin);
	}





}



forms[0].addEventListener("submit", submitRegister)
forms[1].addEventListener("submit", submitLogin)


