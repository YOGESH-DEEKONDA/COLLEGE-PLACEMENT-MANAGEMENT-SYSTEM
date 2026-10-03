let login=document.querySelector("#login");
let signup=document.querySelector("#signup");
let getstarted=document.querySelector("#herobtn1");
let learnmore=document.querySelector("#herobtn2");
login.addEventListener("click",function() {
    console.log("login clicked");
    window.location.href="../LoginPage/login.html";
});
signup.addEventListener("click",function() {
    window.location.href="../SignupPage/signup.html";
});
getstarted.addEventListener("click",function() {
    window.location.href="../CompaniesPage/companies.html";
});
learnmore.addEventListener("click",function() {
   window.location.href="../AboutPage/about.html";
});













