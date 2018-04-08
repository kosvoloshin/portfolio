const $ = require('jquery');

if($('.skills-list').length){
    $("document").ready(function($){
 
        var circles = $('.skills-circles');
       
        $(window).scroll(function () {
          if ($(this).scrollTop() > $(document).height()*0.3) {
            circles.addClass("active");
          } else {
            circles.removeClass("active");
          }
        });
    });
}