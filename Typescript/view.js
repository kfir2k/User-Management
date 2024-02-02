"use strict";
//view
console.log("View online");
const registerNewUserBtn = document.getElementById("registerNewUserBtn");
const loginForm = document.getElementById("login");
const modalRegister = document.getElementById("modalRegister");
const modalLogin = document.getElementById("modalLogin");
const forms = document.querySelectorAll("form");
const [usernameRegister, passwordRegister, emailRegister, firstNameRegister, lastNameRegister] = modalRegister.querySelectorAll("input");
const [usernameLogin, passwordLogin] = modalLogin.querySelectorAll("input");
modalRegister.querySelectorAll("input").forEach((input) => input === null || input === void 0 ? void 0 : input.addEventListener("focus", () => { deleteWarnings(true); }));
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
    return;
}
const deleteWarnings = function (showMsg) {
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
    console.log("Raw Inputs", usernameRegister.value, passwordRegister.value, emailRegister.value, firstNameRegister.value, lastNameRegister.value);
    let verifiedUsername = "";
    let verifiedPassword = "";
    let verifiedEmail = "";
    let verifiedFirstName = "";
    let verifiedLastName = "";
    if (validateUsername(usernameRegister.value)) {
        console.log("username valid");
        verifiedUsername = usernameRegister.value;
        usernameRegister.value = "";
    }
    else {
        warningMsg("Not a vaild username", usernameRegister);
        console.log("test");
    }
    if (validatePassword(passwordRegister.value)) {
        verifiedPassword = passwordRegister.value;
        passwordRegister.value = "";
    }
    else {
        warningMsg("Needed a stronger password", passwordRegister);
    }
    if (validateEmail(emailRegister.value)) {
        verifiedEmail = emailRegister.value;
        emailRegister.value = "";
    }
    else {
        console.log("Email isnt a Vaild Email.");
        warningMsg("Email isnt valied", emailRegister);
    }
    //emailRegister.value = "";
    //firstNameRegister.value = "";
    //lastNameRegister.value = "";
};
forms[0].addEventListener("submit", submitRegister);
