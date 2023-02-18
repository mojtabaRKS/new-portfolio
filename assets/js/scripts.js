$(document).ready(function () {
    let type_writer = new TypeIt('#introduction', {
        speed: 45,
        afterComplete: (instance) => {
            //-- Will fire after the entire instance has completed typing.
            //-- NOTE: If "loop" is enabled, this will never fire.
            $("#summary-description").slideDown(500, function () {
                $("#profile-wrapper").slideDown(1000);
                scrollDownToPage()
            });
        },
    })
        .type("Hi there !")
        .pause(100)
        .break()
        .type("I Am Motab")
        .pause(100)
        .options({speed: 200})
        .delete(3)
        .options({speed: 50})
        .type("ji")
        .pause(200)
        .type(' Rakhii')
        .options({speed: 300})
        .delete(1)
        .options({speed: 150})
        .type("si")
        .break()
        .options({speed: 45})
        .type("A Software ")
        .pause(200)
        .options({speed: 100})
        .type("Engineer")
        .pause(20)
        .type(":)");

    type_writer.go();


    let lastScrollTop = 0;
    $(window).on('scroll',function (event) {
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
                            scrollDownToPage()


                            new TypeIt('#want-to-email', {
                                speed: 45,
                                afterComplete() {
                                    scrollDownToPage()
                                    $("#contact-form-wrapper").slideDown(1000 , function () {
                                        scrollDownToPage()
        
                                        new TypeIt('#contact-data', {speed: 45 , afterComplete() {
                                            new TypeIt('#copy-right', {
                                                speed : 20,
                                                afterComplete() {
                                                    scrollDownToPage()
                                                }
                                            }).type("Copyright 2019 . All Rights Reserved")
                                                .go();
                                        }})
                                            .type("Email : mojtaba.rakhisi@gmail.com")
                                            .break()
                                            .type("Github : https://github.com/mojtabaRKS")
                                            .break()
                                            .type("Linkedin : https://www.linkedin.com/in/mojtaba-rakhisi/")
                                            .break()
                                            .type("Tel : (+98) 921 267 34 51")
                                            .break()
                                            .type("Location : Tehran / Iran")
                                            .go();
        
                                    });
                                }
                            }).type('Get in touch : ').go();
                        }
                    }).type("Skill Set: \n")
                        .break()
                        .type("Stacks: PHP (6 years) - GoLang (1 year)")
                        .break()
                        .type("Databases: MySQL - Redis - MongoDB - PostgreSQL")
                        .break()
                        .type("Frameworks and Tools: Laravel - Symfony - Yii - Gin - GORM - GraphQL - gRPC - REST")
                        .break()
                        .type("Utilities:  Git - Docker - RabbitMQ - MinIO - ELK Stack - Memcached - Swagger - Linux")
                        .break()
                        .type("Concepts: TDD - DDD - Design patterns - Software Architecture - Algorithms - Data Structures")
                        .break()
                        .type("Familiar with: Python -  Javascript - Neo4j - CI/CD - Shel")
                        .break()
                        .type("Languages: English (Professional Working Proficiency) - Persian (Native) - Arabic (Begginer)")
                    .go();
                }

            }


        }
        lastScrollTop = st;
    });
});

function scrollDownToPage() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}