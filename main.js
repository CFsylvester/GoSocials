$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 50) {
            console.log('hit')
           $('.navbar-b').addClass('navbar-reduce');
        } else {
           $('.navbar-b').removeClass('navbar-reduce');
        }
    });

   
});

$('.navbar-toggler').click(function() {
    var toggler = $('.navbar-toggler').attr("aria-expanded"); 
    console.log(toggler)
    if(toggler){
        $('.navbar-b').addClass('navbar-reduce');
       }else {
        $('.navbar-b').removeClass('navbar-reduce');
     }
});