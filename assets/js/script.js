$(document).ready(function() {
    $('#collapseProducts .nav > .nav-item > .nav-link').hover(function() {
        $(this).tab('show');
    });

    $('#mainMenu').mouseenter(function() {
        $('#collapseProducts').collapse('show');
    });

    $('#mainMenu').mouseleave(function() {
        $('#mainMenu .collapse').collapse('hide');
    });
});