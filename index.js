


$('#buttonABOUT').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#ABOUT").offset().top},'slow');
    console.log("done")
})

$('#buttonHOME').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#HOME").offset().top},'slow');
    console.log("done")
})

$('#buttonPORTFOLIO').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#PORTFOLIO").offset().top},'slow');
    console.log("done")
})

$('#buttonCONTACT').on('click',function goToByScroll(){
    $('html,body').animate({scrollTop: $("#CONTACT").offset().top},'slow');
    console.log("done")
})
