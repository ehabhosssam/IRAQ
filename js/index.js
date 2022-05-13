$(function() {
    $(document).scroll(function() {
        var $nav = $(".navigation");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


(function($) {
    $(function() {
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });

        document.querySelector('#nav-toggle').addEventListener('click', function() {
            this.classList.toggle('active');

        });
    });
})(jQuery);


function navConverter() {
    var navBlur = document.querySelector(".blur");
    var bodyOverFlow = document.querySelector('body');
    navBlur.classList.toggle("blur-class");
    bodyOverFlow.classList.toggle("body-overflow");
}


/////////////// end nav //////////////  
var t1 = gsap.timeline()

t1.from(".navigation", { opacity: 0, duration: 1, y: -100 })
    .from(".img-bg", { duration: 0.7, ease: "power3InOut", x: 600, stagger: 0.2, opacity: 0 })
    .from(".about-header", { y: -50, stagger: 0.6, opacity: 0 }, "0.5")
    .from(".about-p", { y: -50, stagger: 0.6, opacity: 0 }, "0.7")
    .from(".get-involved-btn", { x: -200, stagger: 0.6, opacity: 0 }, "0.7")
    .from(".iraq-word-2", { y: 100, opacity: 0, duration: 0.6 }, "0.8")
    .from(".iraq-word", { y: 100, opacity: 0, duration: 0.6 }, "0.8")


gsap.registerPlugin(ScrollTrigger);
let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-why-first",
        start: "-600",
        end: '-360',
        // markers: true,
        scrub: 2,
    }
});
let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-why-second",
        start: "-500",
        end: '-260',
        // markers: true,
        scrub: 2,
    }
});
let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-why-third",
        start: "-400",
        end: '-170',
        // markers: true,
        scrub: 2,
    }
});
t2.from('.our-why-first', {
    ease: "slow(0.1, 0.1)",
    // ease: "slow(0.001, 0.001)",

    x: 1000,
    opacity: 0,
    duration: 2.5
});
t3.from('.our-why-second', {
    ease: "slow(0.1, 0.1)",
    // ease: "slow(0.001, 0.001)",
    x: 1000,
    opacity: 0,
    duration: 2.5
});
t4.from('.our-why-third', {
    ease: "slow(0.1, 0.1)",
    // ease: "slow(0.001, 0.001)",

    x: 1000,
    opacity: 0,
    duration: 2.5
});