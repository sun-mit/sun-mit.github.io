$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Forntend-Developer", "Backend-Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Forntend-Developer", "Backend-Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



async function postData(url = '', data = {}) {
  // Default options are marked with *
  console.log(data.from)
  const response = await fetch(url, {
      
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    //   'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: {from:data.from, to:data.to,subject:data.subject,message:data.message} // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



  document.getElementById("button_id").addEventListener("click", function () {

    const name = document.getElementById('name_field').value;
    const email = document.getElementById('email_field').value;
    const subject = document.getElementById('sub_field').value;
    const message = document.getElementById('message_field').value;
    const allmessage = `Name who Mailed You : ${name}
    Email: ${email}
    Message: ${message}
    `
    // console.log(name, email, subject, message);

        $.ajax({
            url: "https://sendmailapis.herokuapp.com/mail",
            type: "POST",
            data: {
              from: email,
              to: 'amitroysunjoy@gmail.com',
              subject: subject,
              text: allmessage,
            //   csrfmiddlewaretoken: getCookie("csrftoken"),
            },
        
            success: function (result) {
              alert('Mail Successfully Send!');
            },
            error: function (result) {
              console.log("Network Error");
            },
            // complete: function(result){
            //   clear_loader_progress(interval);
            // }
          });
  });