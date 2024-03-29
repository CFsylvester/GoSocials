// Index Page
const carouselBasic = document.getElementById('carousel-basic')
const carouselCore = document.getElementById('carousel-core')
const carouselEnterprise = document.getElementById('carousel-enterprise')
const basicCard= document.getElementById('basic-card');
const basicGrid = document.getElementById('mobile-basic-grid'); 
const coreCard = document.getElementById('core-card');
const coreGrid = document.getElementById('mobile-core-grid'); 
const enterpriseCard = document.getElementById('enterprise-card')
const enterpriseGrid = document.getElementById('mobile-enterprise-grid'); 

// Why Go Social
const chartsBasic = document.getElementById('charts-basic')
const chartsCore = document.getElementById('charts-core')
const chartsEnterprise = document.getElementById('charts-enterprise')
const greenChart = document.getElementById('green-chart')
const darkBlueChart = document.getElementById('dark-blue-chart')
const lightBlueChart = document.getElementById('light-blue-chart')
const basicGrey = document.getElementById('basic-grey')
const coreGrey = document.getElementById('core-grey')
const enterpriseGrey = document.getElementById('enterprise-grey');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const hamburger = document.getElementById('hamburger')
let desktopCWClicks = 0; 

const toggler = document.querySelector('.navbar-toggler');
const navMobile = document.querySelector('.navbar-nav-mobile');
const navbar = document.querySelector('.navbar'); 

const togglerClick = function(e) {
    e.preventDefault();

    const attribute = toggler.getAttribute('aria-expanded');
    if (attribute === 'true'){
        navMobile.classList.add('show'); 
        navbar.classList.add('mobile-navbar'); 
        hamburger.setAttribute('checked', 'checked'); 
    } else {
        navMobile.classList.remove('show'); 
        navbar.classList.remove('mobile-navbar'); 
        $('#hamburger').removeAttr('checked'); 
    }
}

const carouselClick = function() {
    if(this.innerHTML.trim() === "Core"){
        coreCard.classList.remove('initial');
        coreCard.classList.remove('hide');
        coreGrid.classList.remove('hide'); 

        carouselBasic.classList.remove("active");
        basicGrid.classList.remove("active")

        carouselEnterprise.classList.remove("active");
        enterpriseGrid.classList.remove("active")

        carouselCore.classList.add("active");
        coreGrid.classList.add("active")

        basicCard.classList.add('hide');
        basicGrid.classList.add("hide");

        enterpriseCard.classList.add('hide'); 
        enterpriseGrid.classList.add("hide");
    }

    if(this.innerHTML.trim() === "Enterprise"){
        enterpriseCard.classList.remove('initial');
        enterpriseCard.classList.remove('hide');
        enterpriseGrid.classList.remove('hide');

        carouselBasic.classList.remove("active");
        basicGrid.classList.remove("active"); 

        carouselCore.classList.remove("active");
        coreGrid.classList.remove("active");

        carouselEnterprise.classList.add("active");
        enterpriseGrid.classList.add("active");

        basicCard.classList.add('hide');
        basicGrid.classList.add("hide");

        coreCard.classList.add('hide'); 
        coreGrid.classList.add("hide");
    }

    if(this.innerHTML.trim() === "Basic"){
        basicCard.classList.remove('hide');
        basicGrid.classList.remove('hide')

        carouselCore.classList.remove("active");
        coreGrid.classList.remove("active");

        carouselEnterprise.classList.remove("active");
        enterpriseGrid.classList.remove("active");

        carouselBasic.classList.add("active");
        basicGrid.classList.add("active")

        coreCard.classList.add('hide');
        coreGrid.classList.add("hide");

        enterpriseCard.classList.add('hide'); 
        enterpriseGrid.classList.add("hide");
    }

}

const chartsClick = function(e, g) {
    $('#chart div').each(function(){
        if($(this).data('percentage') !== $(e).data('percentage')) {
            $(this).removeClass('active').animate({
                'width' : '0%',
                'opacity': '0'
            }, 500)
            $(this).find('.price').animate({
                'opacity': '0'
            }, 500)
        }
    })

    $('#grey-bar div').each(function(){
        if($(this).data('percentage') !== $(g).data('percentage')) {
            $(this).removeClass('active').animate({
                'width' : '0%',
                'opacity': '0'
            }, 500)
            $(this).find('.price').animate({
                'opacity': '0'
            }, 500)
        }
    })
    
    var percent = $(e).data('percentage');
    $(e).delay(500).animate({
        'width' : percent + '%',
        'opacity': '1'
    }, 500)
    $(e).find('.price').animate({
        'opacity': '1',
        'width' : '100%'
    }, 500)

    var percentage = $(g).data('percentage');
    $(g).delay(500).animate({
        'width' : percentage + '%',
        'opacity': '1'
    }, 500)
    $(g).find('.price').animate({
        'opacity': '1',
        'width' : '100%'
    }, 500)
}

const removeActive = function() {
    $(chartsBasic).removeClass('active');
    $(chartsCore).removeClass('active');
    $(chartsEnterprise).removeClass('active');
}

// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.
const wrapperDesktop = document.querySelector('.cards-wrapper');
const desktopCarouselClick = function(e, direction) {
    e.preventDefault(); 
    
    if(direction === 'left' && desktopCWClicks === 0) {
        return;
    }

    if(direction === 'right' && desktopCWClicks === 4) {
        return;
    }

    if(direction === 'left'){
        desktopCWClicks--; 
    } else {
        desktopCWClicks++; 
    }
        
        // shift the wrapper
        //let displayArea = wrapper.parentElement.clientWidth;
        let pixels = (-275 * desktopCWClicks)
        wrapperDesktop.style.transform = 'translateX('+ pixels + 'px)';
//   //       remove the active class from the active dot
//         dots[activeDotNum].classList.remove('active');
//   //       add the active class to the clicked dot
//         dots[clickedDotNum].classList.add('active');
  //       now set the active dot number to the clicked dot;
        // activeDotNum = clickedDotNum;
      
      

}
const wrapper = document.querySelector('#cards-wrapper-mobile');

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      return;
    }
    else {
      // shift the wrapper
      //let displayArea = wrapper.parentElement.clientWidth;
      let pixels = (-240 * clickedDotNum)
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});

if (carouselBasic !== null) carouselBasic.onclick = carouselClick;
if (carouselCore !== null) carouselCore.onclick = carouselClick;
if (carouselEnterprise !== null) carouselEnterprise.onclick = carouselClick;

if (chartsBasic !== null) chartsBasic.onclick =  () => {removeActive(); chartsClick(greenChart, basicGrey); $(chartsBasic).addClass('active'); }
if (chartsCore !== null) chartsCore.onclick =  () =>{removeActive(); chartsClick(darkBlueChart, coreGrey); $(chartsCore).addClass('active');} 
if (chartsEnterprise !== null) chartsEnterprise.onclick =  () => {removeActive(); chartsClick(lightBlueChart, enterpriseGrey); $(chartsEnterprise).addClass('active');}

if (leftArrow !== null) leftArrow.onclick = (e) => {desktopCarouselClick(e, 'left')}
if (rightArrow !== null) rightArrow.onclick = (e) => {desktopCarouselClick(e, 'right')}

if (toggler !== null) toggler.onclick = (e) => {togglerClick(e)}; 