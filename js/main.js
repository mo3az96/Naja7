$(document).ready(function () {

    if ($(window).width() <= 992) {
        AOS.init({
            once: true
        });
    } else {
        AOS.init();
    }

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

    }





    const menu = document.querySelector('.nav-sec-cont');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
        if (menu.className.indexOf('active') === -1) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    })

    if ($(window).width() < 992) {
        $('.nav-link,.mobile-cont').click(function () {
            $('.nav-sec-cont').removeClass("active")
            $('body,html').toggleClass("overfollow-fix")
        });
    }
    $('.nav-tgl').click(function () {
        $('body,html').toggleClass("overfollow-fix")
    });
});