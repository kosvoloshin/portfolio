const $ = require('jquery');

$(function(){

    $('.markers__link').on('click', function(event) {
        event.preventDefault();
        $('.markers__link').removeClass('active'); 
        $('.slider-item').removeClass('active');        
    });

    $('.controls').on('click', function(event) {
        $('.markers__link').removeClass('active');
        if($('#slide1').hasClass('active')) {
            $('#mar1').addClass('active'); }
        else {
            $('#mar1').removeClass('active');
        }

        if($('#slide2').hasClass('active')) {
            $('#mar2').addClass('active'); }
        else {
            $('#mar2').removeClass('active');
        }

        if($('#slide3').hasClass('active')) {
            $('#mar3').addClass('active'); }
        else {
            $('#mar3').removeClass('active');
        }

        if($('#slide4').hasClass('active')) {
            $('#mar4').addClass('active'); }
        else {
            $('#mar4').removeClass('active');
        }
    });

    $('#mar1').on('click', function(event) {
        event.preventDefault();
        console.log('1');
        $(this).toggleClass('active');
        $('#slide1').addClass('active');
    });

    $('#mar2').on('click', function(event) {
        event.preventDefault();
        console.log('2');
        $(this).toggleClass('active');
        $('#slide2').addClass('active');
    });

    $('#mar3').on('click', function(event) {
        event.preventDefault();
        console.log('3');
        $(this).toggleClass('active');
        $('#slide3').addClass('active');
    });

    $('#mar4').on('click', function(event) {
        event.preventDefault();
        console.log('4');
        $(this).toggleClass('active');
        $('#slide4').addClass('active');
    });
});
