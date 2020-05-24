


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



function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    error_message.style.padding = "10px;"


    if(name.length<2){
        let text = "Please Enter a Valid Name";
        
        error_message.innerHTML = text;
        return false;
    }
    else if(!regex.test(email)){
        let text = "Please Enter a Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    else if(message.length === 0){
        let text = "Your message can't be empty!";
        error_message.innerHTML = text;
        return false;
    }
    else{
        let text = "Your message has successfully been sent!";
        error_message.innerHTML = text;
        error_message.style.backgroundColor = "green"

            $.ajax({
                url: "https://formspree.io/mqkyejez", 
                method: "POST",
                data: {name: `${name}`, email: `${email}`, message: `${message}`},
                dataType: "json"
            });

        document.getElementById("contact-form").reset();


        return true;
    }


}