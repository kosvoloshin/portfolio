const $ = require('jquery');

if($('.blog-nav').length){
$(function(){
  //$('a[href^="#"]').on('click', function(event) {
    $('.blog-nav__link').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
        
    $('html, body').animate({scrollTop: dn}, 700);
  });
});

if($('.blog-nav').length){
  $("document").ready(function($){
 
    var nav = $('.blog-nav');
   
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        nav.addClass("nav-f");
      } else {
        nav.removeClass("nav-f");
      }
    });
   
  });
  
  var menu_selector = ".blog-nav__list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
  function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " .blog-nav__link.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    // $("a[href^=#]").click(function(e){
      $(".blog-nav__link").click(function(e){
      e.preventDefault();
      $(document).off("scroll");
      $(menu_selector + " .blog-nav__link.active").removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);
      $("html, body").animate({
          scrollTop: target.offset().top
      }, 1000, function(){
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });
    });
  });
}
}

