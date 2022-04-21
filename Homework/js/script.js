$(document).ready(function() {

    $('.modal_btn').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });
});