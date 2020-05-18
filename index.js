


$('#buttonAbout').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#about").offset().top},'slow');
})
$('#buttonAboutMe').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#about").offset().top},'slow');
})

$('#buttonHome').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#HOME").offset().top},'slow');
})

$('#buttonPortfolio').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#portfolio").offset().top},'slow');
})

$('#buttonContact').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#contact").offset().top},'slow');
})
