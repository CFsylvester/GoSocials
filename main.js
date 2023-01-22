
const carouselBasic = document.getElementById('carousel-basic')
const carouselCore = document.getElementById('carousel-core')
const carouselEnterprise = document.getElementById('carousel-enterprise')


const basicCard= document.getElementById('basic-card');
const coreCard = document.getElementById('core-card');
const enterpriseCard = document.getElementById('enterprise-card')

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

carouselBasic.onclick = carouselClick;
carouselCore.onclick = carouselClick;
carouselEnterprise.onclick = carouselClick;

carouselCore.onload = hideMobileCards;
carouselEnterprise.onload = hideMobileCards;