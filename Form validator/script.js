const form = document.querySelector("#form");
const username = document.querySelector("#username-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const password2 = document.querySelector("#password2-input");

form.addEventListener("submit",function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
});

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === "") {
            showError(input,`${capitalize(input.id)} is Required!`);
        } else {
            showSuccess(input);
        }
    });
}

//capitalize input
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//display error message
function showError(input,message) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control error";

    const small = formCtrl.querySelector(".small");
    small.innerText = message;
}

//display success message
function showSuccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control success";
}