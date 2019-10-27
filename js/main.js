$(document).ready(function () {
    AOS.init();

    $(window).scroll(function () {

        if ($(this).scrollTop() > 37) {
            $('.nav-sec').css("padding", "7px 0");
            $('.nav-sec').css("background-color", "#fff");
            $('.nav-sec-cont').css("justify-content", "space-between");
            $('.nav-sec').addClass("box");
            $('.nav-tgl').addClass("box");

        } else {
            $('.nav-sec').css("padding", "37px 0 0");
            $('.nav-sec').css("background", "transparent");
            $('.nav-sec-cont').css("justify-content", "flex-start");
            $('.nav-sec').removeClass("box");
            $('.nav-tgl').removeClass("box");

        }

    });



    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var offset = 100;
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - offset
        }, 1000, 'swing');
    });

    if ($(window).width() <= 1199) {
        $("img").addClass("img-fluid");

    }
    if ($(window).width() < 992) {
        $('div,a,ul,button,p,h1,h2,h3,h4,img').removeAttr('data-aos');
        $('div,a,ul,button,p,h1,h2,h3,h4,img').removeAttr('data-aos-duration');
        $('div,a,ul,button,p,h1,h2,h3,h4,img').removeAttr('data-aos-delay');
    }
});