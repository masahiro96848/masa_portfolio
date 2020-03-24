$(function () {

  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });

  // spメニュー
  $('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
  $('.menu-list .menu-link').on('click', function() {
    $('.js-toggle-sp-menu.active').removeClass('active');
    $('.js-toggle-sp-menu-target.active').removeClass('active');
  });

  // hero文字をfadeIn
  $(function(){
    $(window).ready(function() {
      $('.js-fadeIn').each(function(){
        
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if(scroll > targetElement - windowHeight) {
          $(this).css('opacity', 1);
          $(this).css('transform', 'translateY(0)');
        }
      });
    });

    $(function () {
      $(window).scroll(function () {
        $('.js-fadeIn').each(function () {
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
          }
        });
      });
    });
  });


});