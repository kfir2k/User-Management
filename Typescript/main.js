import { userCreateionController } from "./controller.js";
const registerNewUserBtn = document.getElementById("registerNewUserBtn");
const loginForm = document.getElementById("login");
const modalRegister = document.getElementById("modalRegister");
const modalLogin = document.getElementById("modalLogin");
const forms = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input");
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input");
console.log("Forms", forms);
forms.forEach((element) => {
    element === null || element === void 0 ? void 0 : element.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
registerNewUserBtn === null || registerNewUserBtn === void 0 ? void 0 : registerNewUserBtn.addEventListener("click", () => {
    renderModal(modalRegister, true);
    renderModal(loginForm, false);
});
function renderModal(htmlElement, isShow) {
    if (isShow) {
        htmlElement.style.display = "block";
    }
    else {
        htmlElement.style.display = "none";
    }
}
//let kfir = new User("kfir2k", "12345", "kfir.kotler@gmail.com", "Kfir", "Kotler")
//console.log(kfir);
forms[0].addEventListener("submit", userCreateionController);
