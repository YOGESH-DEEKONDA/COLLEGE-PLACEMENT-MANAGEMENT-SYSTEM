let search = document.querySelector("#search");
let companies = document.querySelectorAll(".company-card");
let role = document.querySelector("#jobrole");
let locationFilter = document.querySelector("#location");
let packagefilter=document.querySelector("#package");
let eligibility = document.querySelector("#eligibility");
let applyfiter=document.querySelector(".apply-filter");
let clearall=document.querySelector("#clear-all");
let viewdetails=document.querySelectorAll(".view-btn");


search.addEventListener("input", function() {

    for(let i = 0; i < companies.length; i++) {

        if(
            (packagefilter.value == "" ||
             Number(companies[i].dataset.package) >= Number(packagefilter.value)) &&

            (eligibility.value == "" ||
             Number(companies[i].dataset.eligibility) <= Number(eligibility.value)) &&

            companies[i].textContent.toLowerCase().includes(search.value.toLowerCase()) &&
            companies[i].textContent.toLowerCase().includes(role.value.toLowerCase()) &&
            companies[i].textContent.toLowerCase().includes(locationFilter.value.toLowerCase())
        ) {
            companies[i].style.display = "";
        }
        else {
            companies[i].style.display = "none";
        }
    }

});

applyfiter.addEventListener("click",function() {

    for(let i = 0; i < companies.length; i++) {

        if(
            (packagefilter.value == "" ||
             Number(companies[i].dataset.package) >= Number(packagefilter.value)) &&

            (eligibility.value == "" ||
             Number(companies[i].dataset.eligibility) <= Number(eligibility.value)) &&

            companies[i].textContent.toLowerCase().includes(search.value.toLowerCase()) &&
            companies[i].textContent.toLowerCase().includes(role.value.toLowerCase()) &&
            companies[i].textContent.toLowerCase().includes(locationFilter.value.toLowerCase())
        ) {
            companies[i].style.display = "";
        }
        else {
            companies[i].style.display = "none";
        }
    }

});

clearall.addEventListener("click", function(event) {

    event.preventDefault();

    role.value = "";
    locationFilter.value = "";
    packagefilter.value = "";
    eligibility.value = "";

    for(let i = 0; i < companies.length; i++) {
        companies[i].style.display = "";
    }

});

for(let i = 0; i < viewdetails.length; i++) {

    viewdetails[i].addEventListener("click", function() {

        let company = viewdetails[i].parentElement.dataset.company;

        localStorage.setItem("selectedCompany", company);

        window.location.href = "../COMPANYDETAILSPAGE/company.html";

    });

}


role.addEventListener("change", filtercompanies);
locationFilter.addEventListener("change", filtercompanies);
//eligibility.addEventListener("change", filtercompanies);

function filtercompanies() {

    for(let i = 0; i < companies.length; i++) {

        if(
           companies[i].textContent.toLowerCase().includes(role.value.toLowerCase()) &&
            companies[i].textContent.toLowerCase().includes(locationFilter.value.toLowerCase()) 
            //companies[i].textContent.toLowerCase().includes(eligibility.value.toLowerCase()
           )   {
            companies[i].style.display = "";
        }
        else {
            companies[i].style.display = "none";
        }

    }

}
    