(function ($) {
    "use strict";

    jQuery('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991",
    });

/* ==========================================================================
  // header stickey activation
========================================================================== */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
      $(".header-sticky,.rightbar-sticky").removeClass("sticky");
    } else {
      $(".header-sticky,.rightbar-sticky").addClass("sticky");
    }
  });

  $('.info-bar').on('click', function(){
    $('.extra-info').addClass('info-open');
})
$('.clos-icone').on('click', function(){
    $('.extra-info').removeClass('info-open');
})
$('.info-bar2').on('click', function(){
    $('.extra-info2').addClass('info-open2');
})
$('.clos-icone2').on('click', function(){
    $('.extra-info2').removeClass('info-open2');
})
$('.info-bar3').on('click', function(){
    $('.extra-info3').addClass('info-open3');
})
$('.clos-icone3').on('click', function(){
    $('.extra-info3').removeClass('info-open3');
})
//nice select
$('select').niceSelect();
})(jQuery);	    