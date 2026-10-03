let back=document.querySelector(".back");
let btn=document.querySelector(".apply-btn");
let tabs=document.querySelectorAll(".tab");
let sections=document.querySelectorAll(".tab-content");
let selectedCompany = localStorage.getItem("selectedCompany");
let companyName = document.querySelector("#company-name");
let companyRole = document.querySelector("#company-role");
let companyLocation = document.querySelector("#company-location");
let companyWebsite = document.querySelector("#company-website");
let companyLogo=document.querySelector("#company-logo");
let companylogo=document.querySelector(".company-logo");
let overviewTitle = document.querySelector("#overview-title");
let overviewDescription = document.querySelector("#overview-description");

let founded = document.querySelector("#founded");
let employees = document.querySelector("#employees");
let headquarters = document.querySelector("#headquarters");

let jobopeningsContent = document.querySelector("#jobopenings-content");

let degree = document.querySelector("#degree");
let branch = document.querySelector("#branch");
let minimumCgpa = document.querySelector("#minimum-cgpa");
let backlogs = document.querySelector("#backlogs");
let graduation = document.querySelector("#graduation");

let aboutDescription = document.querySelector("#about-description");
let aboutDescription2 = document.querySelector("#about-description2");
let industry = document.querySelector("#industry");
let companyType = document.querySelector("#company-type");
let aboutHeadquarters = document.querySelector("#about-headquarters");

if(selectedCompany === "microsoft") {

    overviewTitle.textContent = "About Microsoft";

overviewDescription.textContent =
"Microsoft is a global technology company that develops software, cloud services, devices and other technology products.";

founded.textContent = "1975";
employees.textContent = "220,000+";
headquarters.textContent = "Redmond, USA";


jobopeningsContent.innerHTML = `
    <div class="opportunity-card">
        <h4>Software Engineer</h4>
        <p>₹10 - 18 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>Software Intern</h4>
        <p>₹50K - ₹1L / Month</p>
    </div>

    <div class="opportunity-card">
        <h4>Data Analyst</h4>
        <p>₹8 - 14 LPA</p>
    </div>
`;


degree.textContent = "B.Tech / B.E.";
branch.textContent = "CSE / IT / ECE";
minimumCgpa.textContent = "7.0";
backlogs.textContent = "No active backlogs";
graduation.textContent = "2026 - 2029";


aboutDescription.textContent =
"Microsoft develops technology products and services used by individuals, businesses and organizations around the world.";

aboutDescription2.textContent =
"The company works across areas including cloud computing, software, artificial intelligence, productivity tools and other technology services.";

industry.textContent = "Technology";
companyType.textContent = "Public";
aboutHeadquarters.textContent = "Redmond, USA";

    companyName.textContent = "Microsoft";
    companyRole.textContent = "Software Engineer • ₹10 - 18 LPA";
    companyLocation.textContent = "📍 Hyderabad, Telangana";
    companyWebsite.textContent = "🌐 www.microsoft.com";
    companylogo.style.border="1px solid #e3e8ef";
    companyLogo.innerHTML = `
        <div style="
            width: 35px;
            height: 35px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3px;
        ">
            <span style="background: #f25022;"></span>
            <span style="background: #7fba00;"></span>
            <span style="background: #00a4ef;"></span>
            <span style="background: #ffb900;"></span>
        </div>
    `;
}

if(selectedCompany === "tcs") {

    overviewTitle.textContent = "About TCS";

overviewDescription.textContent =
"Tata Consultancy Services is an IT services and consulting company that provides technology solutions to organizations around the world.";

founded.textContent = "1968";
employees.textContent = "600,000+";
headquarters.textContent = "Mumbai, India";


jobopeningsContent.innerHTML = `
    <div class="opportunity-card">
        <h4>Software Developer</h4>
        <p>₹4 - 8 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>Software Engineer</h4>
        <p>₹5 - 10 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>System Engineer</h4>
        <p>₹4 - 7 LPA</p>
    </div>
`;


degree.textContent = "B.Tech / B.E.";
branch.textContent = "CSE / IT / ECE";
minimumCgpa.textContent = "6.0";
backlogs.textContent = "No active backlogs";
graduation.textContent = "2026 - 2029";


aboutDescription.textContent =
"TCS provides IT services, consulting and business solutions to organizations across different industries.";

aboutDescription2.textContent =
"The company works in areas such as cloud computing, software development, artificial intelligence, data and digital transformation.";

industry.textContent = "IT Services";
companyType.textContent = "Public";
aboutHeadquarters.textContent = "Mumbai, India";

    companyName.textContent = "TCS";
    companyRole.textContent = "Software Developer • ₹4 - 8 LPA";
    companyLocation.textContent = "📍 Hyderabad, Telangana";
    companyWebsite.textContent = "🌐 www.tcs.com";

    companyLogo.innerHTML = `
        <div style="
            width: 54px;
            height: 54px;
            background: #17306b;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 15px;
            font-weight: bold;
        ">
            TCS
        </div>
    `;
}

if(selectedCompany === "infosys") {

    overviewTitle.textContent = "About Infosys";

overviewDescription.textContent =
"Infosys is a global technology services and consulting company that provides digital, cloud and business solutions to organizations around the world.";

founded.textContent = "1981";
employees.textContent = "300,000+";
headquarters.textContent = "Bengaluru, India";


jobopeningsContent.innerHTML = `
    <div class="opportunity-card">
        <h4>Software Developer</h4>
        <p>₹4 - 7 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>Systems Engineer</h4>
        <p>₹4 - 6 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>Technology Analyst</h4>
        <p>₹6 - 10 LPA</p>
    </div>
`;


degree.textContent = "B.Tech / B.E.";
branch.textContent = "CSE / IT / ECE";
minimumCgpa.textContent = "6.0";
backlogs.textContent = "No active backlogs";
graduation.textContent = "2026 - 2029";


aboutDescription.textContent =
"Infosys provides technology services, consulting and digital solutions to businesses across different industries.";

aboutDescription2.textContent =
"The company works in areas such as cloud computing, artificial intelligence, software development, data analytics and digital transformation.";

industry.textContent = "IT Services";
companyType.textContent = "Public";
aboutHeadquarters.textContent = "Bengaluru, India";

    companyName.textContent = "Infosys";
    companyRole.textContent = "Software Developer • ₹4 - 7 LPA";
    companyLocation.textContent = "📍 Hyderabad, Telangana";
    companyWebsite.textContent = "🌐 www.infosys.com";

    companyLogo.innerHTML = `
        <div style="
            width: 54px;
            height: 54px;
            background: #087fbe;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
            font-weight: bold;
        ">
            INFY
        </div>
    `;
}

if(selectedCompany === "amazon") {

    overviewTitle.textContent = "About Amazon";

overviewDescription.textContent =
"Amazon is a global technology and e-commerce company that operates across online retail, cloud computing, digital services and other technology businesses.";

founded.textContent = "1994";
employees.textContent = "1,500,000+";
headquarters.textContent = "Seattle, USA";


jobopeningsContent.innerHTML = `
    <div class="opportunity-card">
        <h4>Software Development Engineer</h4>
        <p>₹8 - 15 LPA</p>
    </div>

    <div class="opportunity-card">
        <h4>Software Development Intern</h4>
        <p>₹50K - ₹1L / Month</p>
    </div>

    <div class="opportunity-card">
        <h4>Data Engineer</h4>
        <p>₹8 - 16 LPA</p>
    </div>
`;


degree.textContent = "B.Tech / B.E.";
branch.textContent = "CSE / IT / ECE";
minimumCgpa.textContent = "7.0";
backlogs.textContent = "No active backlogs";
graduation.textContent = "2026 - 2029";


aboutDescription.textContent =
"Amazon operates businesses across e-commerce, cloud computing, digital services and technology.";

aboutDescription2.textContent =
"The company works in areas including online retail, Amazon Web Services, artificial intelligence, software development and digital products.";

industry.textContent = "Technology / E-Commerce";
companyType.textContent = "Public";
aboutHeadquarters.textContent = "Seattle, USA";

    companyName.textContent = "Amazon";
    companyRole.textContent = "Software Development Engineer • ₹8 - 15 LPA";
    companyLocation.textContent = "📍 Hyderabad, Telangana";
    companyWebsite.textContent = "🌐 www.amazon.com";

    companyLogo.innerHTML = `
        <div style="
            width: 54px;
            height: 54px;
            background: #111111;
            border-radius:6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 36px;
            font-weight: bold;
            font-family: Arial, sans-serif;
        ">
            a
        </div>
    `;
}

back.addEventListener("click",function() {
    window.location.href="../CompaniesPage/companies.html";
});

let applied=false;
btn.addEventListener("click",function() {
   if(applied) {
    alert("Already Applied!");
   }else {
    alert("Application submitted successfully!");
      applied=true;
    }
});


for(let i=0;i<tabs.length;i++) {
    tabs[i].addEventListener("click",function() {

        for(let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove("active");
        }

        tabs[i].classList.add("active");

        for(let j=0;j<sections.length;j++) {
            if(tabs[i].dataset.tab == sections[j].id) {
                sections[j].style.display="block";
            } else {
                sections[j].style.display="none";
            }
        }
    });
}

tabs[0].classList.add("active");
