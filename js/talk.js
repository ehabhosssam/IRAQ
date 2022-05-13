// $(function() {
//     $(document).scroll(function() {
//         var $nav = $(".navigation");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

(function($) { // Begin jQuery
    $(function() { // DOM ready
        // Toggle open and close nav styles on click
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