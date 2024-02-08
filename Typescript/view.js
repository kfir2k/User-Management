//view
import { Controller } from "./controller.js";
const modalRegister = document.getElementById("modalRegister");
const modalLogin = document.getElementById("modalLogin");
const forms = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input");
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input");
//delete warnings on focus in inputs of modal Register
modalRegister.querySelectorAll("input").forEach((input) => input === null || input === void 0 ? void 0 : input.addEventListener("focus", () => {
    const warningMsg = document.querySelectorAll(".warning-msg");
    if (warningMsg.length > 0)
        deleteWarnings();
}));
modalLogin.querySelectorAll("input").forEach((input) => input === null || input === void 0 ? void 0 : input.addEventListener("focus", () => {
    const warningMsg = document.querySelectorAll(".warning-msg");
    if (warningMsg.length > 0)
        deleteWarnings();
}));
forms.forEach((element) => {
    element === null || element === void 0 ? void 0 : element.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
function renderModal(htmlElement, isShow, flex) {
    if (flex) {
        htmlElement.style.display = "flex";
        return;
    }
    if (isShow) {
        htmlElement.style.display = "block";
    }
    else {
        htmlElement.style.display = "none";
    }
    return;
}
const deleteWarnings = function () {
    const warningMsg = document.querySelectorAll(".warning-msg");
    warningMsg.forEach((element) => { element.remove(); });
    return;
};
const warningMsg = function (contentOfMsg, elementOfChildToShowItUnder) {
    const warningMsg = document.createElement("div");
    warningMsg.textContent = contentOfMsg;
    warningMsg.classList.add("warning-msg");
    const parentElement = elementOfChildToShowItUnder.parentNode;
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.insertBefore(warningMsg, elementOfChildToShowItUnder.nextSibling);
};
const validateUsername = function (username) {
    return username.trim().length >= 3;
};
const validatePassword = function (password) {
    return password.trim().length >= 5;
};
const validateEmail = function (email) {
    if (typeof email !== 'string' || email.trim().length === 0) {
        return false;
    }
    if (email.indexOf('@') === -1) {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validateName = function (name) {
    return name.trim().length >= 2;
};
const submitRegister = () => {
    let verifiedUsername = "";
    let verifiedPassword = "";
    let verifiedEmail = "";
    let verifiedFirstName = "";
    let verifiedLastName = "";
    deleteWarnings();
    if (validateUsername(usernameRegister.value)) {
        verifiedUsername = usernameRegister.value;
    }
    else {
        warningMsg("Not a vaild username", usernameRegister);
    }
    if (validatePassword(passwordRegister.value)) {
        verifiedPassword = passwordRegister.value;
    }
    else {
        warningMsg("Needed a stronger password", passwordRegister);
    }
    if (validateEmail(emailRegister.value)) {
        verifiedEmail = emailRegister.value;
    }
    else {
        warningMsg("Email isnt valied", emailRegister);
    }
    if (validateName(firstNameRegister.value)) {
        verifiedFirstName = firstNameRegister.value;
    }
    else {
        warningMsg("First Name isnt valied", firstNameRegister);
    }
    if (validateName(lastNameRegister.value)) {
        verifiedLastName = lastNameRegister.value;
    }
    else {
        warningMsg("Last Name isnt valied", lastNameRegister);
    }
    if (verifiedUsername.length > 0 && verifiedPassword.length > 0 && verifiedEmail.length > 0 && verifiedFirstName.length > 0 && verifiedLastName.length > 0) {
        let arryOfVerifiedUserDetails = [verifiedUsername.toString(), verifiedPassword.toString(), verifiedEmail.toString(), verifiedFirstName.toString(), verifiedLastName.toString()];
        if (Controller.checkDuplcates(arryOfVerifiedUserDetails)) {
            return warningMsg("User with this name already exists", usernameRegister);
        }
        renderModal(modalLogin, true);
        Controller.getUserFromSubmit(arryOfVerifiedUserDetails);
        usernameRegister.value = "";
        passwordRegister.value = "";
        emailRegister.value = "";
        firstNameRegister.value = "";
        lastNameRegister.value = "";
    }
};
const submitLogin = () => {
    deleteWarnings();
    const isUserLoggedIn = Controller.checkLogin(usernameLogin.value, passwordLogin.value);
    if (isUserLoggedIn) {
        usernameLogin.value = "";
        passwordLogin.value = "";
    }
    if (!isUserLoggedIn) {
        warningMsg("Wrong Credentials*", usernameLogin);
    }
};
forms[0].addEventListener("submit", submitRegister);
forms[1].addEventListener("submit", submitLogin);
