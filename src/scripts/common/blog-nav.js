const $ = require('jquery');

if($('.nav').length){
    var main = function() { 
        
        $('.nav__btn').on('click', function(e) {
            $('.nav').toggleClass('active');
        });

        $('.nav__link').on('click', function(e) {
            $('.nav').removeClass('active');
        });

        $('.nav__link').on('click', function(e) {
            e.preventDefault();
            $('.nav__link').removeClass('active');
            $(this).addClass('active');
        });
      };
    
      $("document").ready(function($){
 
        var nav = $('.nav');
       
        $(window).scroll(function () {
          if ($(this).scrollTop() > 400) {
            nav.addClass("fix");
          } else {
            nav.removeClass("fix");
          }
        });
       
      });
    $(document).ready(main);
}