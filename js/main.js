$(document).ready(function () {
    AOS.init();
    $(window).scroll(function () {

        if ($(this).scrollTop() > 37) {
            $('.nav-sec').css("padding", "7px 0");
            $('.nav-sec').css("background-color", "#fff");

        } else {
            $('.nav-sec').css("padding", "37px 0 0");
            $('.nav-sec').css("background", "transparent");

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


});