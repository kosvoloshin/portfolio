const $ = require('jquery');

if($('.nav').length){
    var main = function() { 
        
        $('.nav__btn').click(function() { 
            $('.nav').animate({ 
                left: '0%'
            }, 400);
        });

        $('.nav__link').click(function() { 
            $('.nav').animate({ 
                left: '-80%' 
              }, 400); 
            $('body').animate({ 
                left: '0%' 
            }, 200); 
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