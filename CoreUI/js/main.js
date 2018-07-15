$(document).ready(function () {

    $('.leftBtn').on('click', function () {
        $('#leftBar').toggleClass('active');
    });

    $('.rightBtn').on('click', function () {
        $('#rightBar').toggleClass('active');
    });

    $('.leftBtn').on('click', function () {
        $('.mainContent').toggleClass('left');
    });

    $('.rightBtn').on('click', function () {
        $('.mainContent').toggleClass('right');
    });

    $('.leftBtn').on('click', function () {
        $('.bottomFooter').toggleClass('left');
    });

    $('.rightBtn').on('click', function () {
        $('.bottomFooter').toggleClass('right');
    });

    $('.rotate').on('click', function () {
        $(this).toggleClass('down');
    });


});
 
