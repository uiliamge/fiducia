var appMaster = {

    preLoader: function () {
        imageSources = []
        $('img').each(function () {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if ($(imageSources).load()) {
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function () {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    reviewsCarousel: function () {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function () {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function () {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function () {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function () {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function () {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    },

    animateScript: function () {
        $('.scrollpoint.sp-effect1').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInLeft'); }, { offset: '100%' });
        $('.scrollpoint.sp-effect2').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInRight'); }, { offset: '100%' });
        $('.scrollpoint.sp-effect3').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInDown'); }, { offset: '100%' });
        $('.scrollpoint.sp-effect4').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeIn'); }, { offset: '100%' });
        $('.scrollpoint.sp-effect5').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInUp'); }, { offset: '100%' });
    },

    revSlider: function () {

        var docHeight = $(window).height();


        var mainSlider = $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            touchenabled: false,
            fullWidth: "on",
            hideTimerBar: "on",
            fullScreen: "on",
            onHoverStop: "off",
            fullScreenOffsetContainer: ""
        });

    },

    scrollMenu: function () {
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');
                $('#logoBrand').removeClass('white');

            } else {
                $('nav').removeClass('scrolled');
                $('#logoBrand').addClass('white');
            }
        });
    },
    placeHold: function () {
        // run Placeholdem on all elements with placeholders
        //Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // AppMaster


$(document).ready(function () {

    appMaster.smoothScroll();

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.animateScript();

    appMaster.revSlider();

    appMaster.scrollMenu();

    appMaster.placeHold();

    $(".lnkMenu").click(function() {
        $(".navbar-collapse").removeClass("in");
    });
});


function validacaoEmail(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {

        $("#btnSubmit").removeClass("disabled");
        document.getElementById("msgemail").innerHTML = "";

    } else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>Preencha o E-mail corretamente</font>";
        $("#btnSubmit").addClass("disabled");
    }
}
