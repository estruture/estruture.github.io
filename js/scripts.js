/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });


  $(function(){
	
    $(".form-control").hover(function(){
                $(this).toggleClass("newhover");
            });
        
    /* -------------------------- Click Function to FadTo/Get/and Set Values --------------------------- */
        $(".annbtn").click(function(){
            $(".contact-form").fadeTo("slow", 0.5);
            
            $("#thanks").text("Thanks" + " " + $(".fname").val()+ " " + "we will contact you on"+ " " + $(".aemail").val());
            $(".annmes").val("I've added this by jQuery");		
        }); //end click
        
    }); //end jQuery code
    
    