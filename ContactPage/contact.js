let login=document.querySelector("#login");
let signup=document.querySelector("#signup");
let fullname=document.querySelector("#name");
let email=document.querySelector("#email");
let subject=document.querySelector("#subject");
let message=document.querySelector("#message");
let btn=document.querySelector(".send-btn");


login.addEventListener("click",function() {
    window.location.href="../LOGINPAGE/login.html";
}); 


signup.addEventListener("click",function() {
    window.location.href="../SIGNUPPAGE/signup.html";
});

btn.addEventListener("click",function() {
   
    if(fullname.value=="") {
      alert("Please enter your name");
      return;
    }

    if(email.value=="") {
     alert("Please enter your email");
     return;   
    }
   
    if(subject.value=="") {
     alert("Please enter the subject");
     return;
    }

    if(message.value=="") {
     alert("Please enter the Message");
     return;
    }

   alert("Message is sent");
    fullname.value="";
    email.value="";
    subject.value="";
    message.value="";

});



