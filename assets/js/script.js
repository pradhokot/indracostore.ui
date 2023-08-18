$(document).ready(function() {
    $('#collapseProduk .nav > .nav-item > .nav-link').hover(function() {
        $(this).tab('show');
    });

    $('#mainMenu').mouseenter(function() {
        $('#collapseProduk').collapse('show');
    });

    $('#mainMenu').mouseleave(function() {
        $('#mainMenu .collapse').collapse('hide');
    });
});