let role = document.querySelector("#role");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginbtn = document.querySelector(".login-btn");
let forgot = document.querySelector(".forgot");

loginbtn.addEventListener("click", function() {

    if (role.value == "") {

        alert("Please select your role");
        return;

    }

    if (email.value == "") {

        alert("Please enter your email or roll number");
        return;

    }

    if (password.value == "") {

        alert("Please enter your password");
        return;

    }

    if (password.value.length < 6) {

        alert("Password must contain at least 6 characters");
        return;

    }

    role.value="";
    email.value="";
    password.value="";
    alert("Login successfull!");

});

forgot.addEventListener("click",function(event) {
    event.preventDefault();
    alert("Password reset feature coming soon");
});