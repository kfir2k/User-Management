//view


console.log("View online");
const registerNewUserBtn = document.getElementById("registerNewUserBtn");
const loginForm = document.getElementById("login") as HTMLCanvasElement;
const modalRegister = document.getElementById("modalRegister") as HTMLCanvasElement;
const modalLogin = document.getElementById("modalLogin") as HTMLCanvasElement;
const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input")
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input")


modalRegister.querySelectorAll("input").forEach((input) => input?.addEventListener("focus", () => { deleteWarnings(true) }))




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
	return
}

const deleteWarnings = function (showMsg: boolean) {
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

const validatePassword = function(password:string):boolean {
  return password.trim().length >= 5;
};

const validateEmail = function(email:string):boolean {
 if (typeof email !== 'string' || email.trim().length === 0) {
    return false;
  }
  if (email.indexOf('@') === -1) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const validateName = function(name:string):boolean {
  return name.trim().length >= 2;
};





const submitRegister = () =>{
	console.log("Raw Inputs",usernameRegister.value, passwordRegister.value, emailRegister.value, firstNameRegister.value, lastNameRegister.value);
	
	let verifiedUsername: String = ""
	let verifiedPassword: String = ""
	let verifiedEmail: String = ""
	let verifiedFirstName: String = ""
	let verifiedLastName: String = ""
	
	
	
	if (validateUsername(usernameRegister.value)) {
			console.log("username valid");
		verifiedUsername = usernameRegister.value
		usernameRegister.value = "";
	} else {
		warningMsg("Not a vaild username", usernameRegister);
		console.log("test");
	}


	if (validatePassword(passwordRegister.value)) {
		verifiedPassword = passwordRegister.value
		passwordRegister.value = "";
	} else {
		warningMsg("Needed a stronger password", passwordRegister);
	}

	if (validateEmail(emailRegister.value)) {
		verifiedEmail = emailRegister.value
		emailRegister.value = "";
	} else {
		console.log("Email isnt a Vaild Email.");
		warningMsg("Email isnt valied", emailRegister);
	}
	


	
	
	//emailRegister.value = "";
	//firstNameRegister.value = "";
	//lastNameRegister.value = "";



}

forms[0].addEventListener("submit", submitRegister)



