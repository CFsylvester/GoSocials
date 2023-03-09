// Index Page
const carouselBasic = document.getElementById('carousel-basic')
const carouselCore = document.getElementById('carousel-core')
const carouselEnterprise = document.getElementById('carousel-enterprise')
const basicCard= document.getElementById('basic-card');
const coreCard = document.getElementById('core-card');
const enterpriseCard = document.getElementById('enterprise-card')

// Why Go Social
const chartsBasic = document.getElementById('charts-basic')
const chartsCore = document.getElementById('charts-core')
const chartsEnterprise = document.getElementById('charts-enterprise')
const greenChart = document.getElementById('green-chart')


const carouselClick = function() {
    if(this.innerHTML.trim() === "Core"){
        coreCard.classList.remove('initial');
        coreCard.classList.remove('hide');

        carouselBasic.classList.remove("active");
        carouselEnterprise.classList.remove("active");
        carouselCore.classList.add("active");

        basicCard.classList.add('hide');
        enterpriseCard.classList.add('hide'); 
    }

    if(this.innerHTML.trim() === "Enterprise"){
        enterpriseCard.classList.remove('initial');
        enterpriseCard.classList.remove('hide');

        carouselBasic.classList.remove("active");
        carouselCore.classList.remove("active");
        carouselEnterprise.classList.add("active");

        basicCard.classList.add('hide');
        coreCard.classList.add('hide'); 
    }

    if(this.innerHTML.trim() === "Basic"){
        basicCard.classList.remove('hide');

        carouselCore.classList.remove("active");
        carouselEnterprise.classList.remove("active");
        carouselBasic.classList.add("active");

        coreCard.classList.add('hide');
        enterpriseCard.classList.add('hide'); 

    }

}

const chartsClick = function() {
    if(this.id.trim() === "charts-core"){
        greenChart.classList.remove("filled");
        greenChart.classList.add("empty"); 
        chartsBasic.classList.remove("active"); 
    }

    if(this.id.trim() === "charts-enterprise"){
        greenChart.classList.remove("filled");
        greenChart.classList.add("empty"); 
        chartsBasic.classList.remove("active"); 
    }

    if(this.id.trim() === "charts-basic"){
        greenChart.classList.remove("empty"); 
        greenChart.classList.add("filled");
        chartsBasic.classList.add("active"); 

        // basicCard.classList.remove('hide');

        // chartsCore.classList.remove("active");
        // chartsEnterprise.classList.remove("active");
        // chartsBasic.classList.add("active");

        // coreCard.classList.add('hide');
        // enterpriseCard.classList.add('hide'); 

    }

}
// basicCard.addEventListener("animationend", (ev) => {
//     if (ev.type === "animationend") {
//       basicCard.style.display = "none";
//     }
// }, false);

// coreCard.addEventListener("animationend", (ev) => {
//     if (ev.type === "animationend" && coreCard.style.opacity == '') {
//       coreCard.style.display = "none";
//     }
// }, false);

// enterpriseCard.addEventListener("animationend", (ev) => {
//     if (ev.type === "animationend") {
//       enterpriseCard.style.display = "none";
//     }
// }, false);

if (carouselBasic !== null) carouselBasic.onclick = carouselClick;
if (carouselCore !== null) carouselCore.onclick = carouselClick;
if (carouselEnterprise !== null) carouselEnterprise.onclick = carouselClick;

if (chartsBasic !== null) chartsBasic.onclick = chartsClick;
if (chartsCore !== null) chartsCore.onclick = chartsClick;
if (chartsEnterprise !== null) chartsEnterprise.onclick = chartsClick;