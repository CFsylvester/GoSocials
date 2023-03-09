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
const darkBlueChart = document.getElementById('dark-blue-chart')

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

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

const chartsClick = async function() {
    if(this.id.trim() === "charts-core"){
        greenChart.classList.add("empty"); 
        greenChart.classList.remove("filled")
        chartsEnterprise.classList.remove("active"); 
        chartsBasic.classList.remove("active"); 
        
        
        await sleep(500);
        chartsCore.classList.add("active"); 
        darkBlueChart.classList.add("filled")
        darkBlueChart.classList.remove("empty"); 
        darkBlueChart.classList.remove("start")


    }

    if(this.id.trim() === "charts-enterprise"){
        greenChart.classList.add("empty"); 
        darkBlueChart.classList.add("empty"); 
        greenChart.classList.remove("filled");
        darkBlueChart.classList.remove("start")
        darkBlueChart.classList.remove("filled")
        chartsBasic.classList.remove("active"); 
        chartsCore.classList.remove("active"); 
       

        await sleep(500);
        chartsEnterprise.classList.add("active"); 
        

    }

    if(this.id.trim() === "charts-basic"){
        darkBlueChart.classList.add("empty")
        darkBlueChart.classList.remove("filled")
        darkBlueChart.classList.remove("start")


        await sleep(500);
        greenChart.classList.add("filled");
        chartsBasic.classList.remove("active"); 
        chartsCore.classList.remove("active"); 
        chartsBasic.classList.add("active"); 
        greenChart.classList.remove("empty"); 

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