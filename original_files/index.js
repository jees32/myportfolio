
$(document).ready(function() {
    $("nav .nav-link").hover(
        function() {
            $(this).addClass("anim-combo"); // Add class on mouse enter
        },
        function() {
            $(this).removeClass("anim-combo"); // Remove class on mouse leave
        }
    );
});