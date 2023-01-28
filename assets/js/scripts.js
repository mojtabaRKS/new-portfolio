$(document).ready(function () {
    let type_writer = new TypeIt('#introduction', {
        speed: 45,
        afterComplete: (instance) => {
            //-- Will fire after the entire instance has completed typing.
            //-- NOTE: If "loop" is enabled, this will never fire.
            $("#summary-description").slideDown(500, function () {
                $("#profile-wrapper").slideDown(1000);
            });
        },
    })
        .type("Hi there !")
        .pause(100)
        .break()
        .type("My Name Is Motab")
        .pause(100)
        .options({speed: 200})
        .delete(3)
        .options({speed: 50})
        .type("jtaba Rakhii")
        .pause(200)
        .options({speed: 300})
        .delete(1)
        .options({speed: 100})
        .type("si")
        .break()
        .options({speed: 45})
        .type("A Full-Stack wbe")
        .pause(100)
        .options({speed: 100})
        .delete(2)
        .options({speed: 100})
        .type("eb Developer")
        .pause(20)
        .type(":)");

    type_writer.go();


    let lastScrollTop = 0;
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // scroll down code
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {


                if ($("#summary-wrapper").visible(true) && $("#summary-title").text() === '') {
                    new TypeIt('#summary-title', {
                        speed: 50,
                        afterComplete() {
                            $("#summary-wrapper").slideDown('normal', function () {
                                $("#portfolio-wrapper").fadeIn(1000);
                            })

                        }
                    }).type('Summary of Skills:').go();
                }

                if ($("#technical-wrapper").visible(true) && $('#technical-title').text() === '') {
                    new TypeIt('#technical-title', {
                        speed: 50,
                        afterComplete() {
                            $("#technical-wrapper").slideDown('normal', function () {
                                $("#skills-wrapper").fadeIn(1000)
                            });
                        }
                    }).type('Technical Skills:').go();
                }

                if ($("#contact-form-wrapper").visible(true) && $('#want-to-email').text() === '') {
                    new TypeIt('#want-to-email', {
                        speed: 45,
                        afterComplete() {
                            $("#contact-form-wrapper").slideDown(1000 , function () {

                                new TypeIt('#contact-data', {speed: 45})
                                    .type("Email : mojtaba.rakhisi@gmail.com")
                                    .break()
                                    .type("Tel : (+98) 921 267 34 51")
                                    .break()
                                    .type("Location : Tehran / Iran")
                                    .go();

                            });
                        }
                    }).type('Get in touch : ').go();
                }

                new TypeIt('#copy-right', {
                    speed : 20
                }).type("Copyright 2019 . All Rights Reserved")
                    .go();

            }


        }
        lastScrollTop = st;
    });

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,

        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navClass: ['owl-next .btn', 'owl-prev .btn'],
        navContainerClass: 'js-carousel-nav owl-nav',
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true
            },
            480: {
                items: 1,
                autoHeight: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
});