let fullname = document.querySelector("#name");
let role = document.querySelector("#role");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmpassword = document.querySelector("#confirm-password");
let terms = document.querySelector("#terms");
let createaccount = document.querySelector(".signup-btn");

createaccount.addEventListener("click", function() {

    if (fullname.value === "") {
        alert("Enter your name");
        return;
    }

    if (role.value === "") {
        alert("Select your role");
        return;
    }

    if (email.value === "") {
        alert("Enter your email");
        return;
    }

    if (password.value === "") {
        alert("Please enter your password");
        return;
    }

    if (password.value.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    if (confirmpassword.value === "") {
        alert("Please confirm your password");
        return;
    }

    if (confirmpassword.value !== password.value) {
        alert("Passwords do not match");
        return;
    }

    if (!terms.checked) {
        alert("Please accept the terms and conditions");
        return;
    }

    fullname.value = "";
    role.value = "";
    email.value = "";
    password.value = "";
    confirmpassword.value = "";
    terms.checked = false;

    alert("Account created successfully!");
});