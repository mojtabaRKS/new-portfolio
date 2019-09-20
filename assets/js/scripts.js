$(document).ready(function(){


    let type_writer = new TypeIt('#introduction', {
        speed: 100 ,
        afterComplete: (instance) => {
            //-- Will fire after the entire instance has completed typing.
            //-- NOTE: If "loop" is enabled, this will never fire.
            setInterval(function () {
                $("#profile-wrapper").slideDown(500).addClass('border').complete(function () {
                    $("#summary-description").css({ "display" : "block" }).slideDown(500)
                });
            } , 1000);
        },
    })
        .type("Hello !")
        .pause(300)
        .break()
        .type("My Name Is Motabjaaa")
        .pause(300)
        .options({speed : 300})
        .delete(7)
        .options({speed : 100})
        .type("jtaba Rakhii")
        .pause(200)
        .options({speed : 300})
        .delete(1)
        .options({speed : 100})
        .type("si")
        .break()
        .options({speed : 100})
        .type("A Full-Stack wbe")
        .pause(100)
        .options({speed : 300})
        .delete(2)
        .options({speed : 100})
        .type("eb Delevopr")
        .pause(300)
        .options({speed : 300})
        .delete(7)
        .options({speed : 200})
        .type("eveloper  ")
        .pause(500)
        .type(":)");

    type_writer.go();



    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,

        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
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