jQuery(function($){
  $(".language > a").on('click', function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('language-open');
  });
 
  var tlMenu = new TimelineLite();
  var body = $("body");
  var menu = $(".menu");
  var headerSocial = $(".mobile-menu .socials");
  menu.on('click', function(event) {
    event.preventDefault();
    if (body.hasClass('menu-open')) {
        body.removeClass('menu-open');
        tlMenu.reverse(0);
       $(".menu > span").text("Меню");
     }else{
        body.addClass('menu-open');
         $(".menu > span").text("Закрыть");
        if (tlMenu.reversed()) {
         tlMenu.restart();
        }else {
          tlMenu
            .fromTo($(".mobile-menu"), 0.5, {autoAlpha: 0, right: -2000}, {autoAlpha: 1, right: 0}, 0.2)
            .fromTo($("#header .language"), 0.3, {autoAlpha: 1, x: 0}, {autoAlpha: 0, x: -20}, 0.2)
            .fromTo($(".mobile-menu-item .language"), 0.3, {autoAlpha: 0, x: -20}, {autoAlpha: 1, x: 0})
            .staggerFromTo($(".mobile-menu-item li"), 0.3, {autoAlpha: 0, y: -20}, {autoAlpha: 1, y: 0}, 0.2)
            .fromTo(headerSocial, 0.2, {autoAlpha: 0, x: -20}, {autoAlpha: 1, x: 0});
        }
     }
  });


    
    //content
    var logo = $(".language, .logo, .menu");
    var h2 = $(".banner-content h2 span");
    var showreel = $(".showreel")
    var tl = new TimelineLite();
    tl
      .from(logo, 1, {autoAlpha: 0, y: 20}, 0.2)
      .staggerFrom(h2, 1, {autoAlpha: 0, y: 30}, 0.2)
      .from($(".showreel-img"), 1, {autoAlpha: 0, transform: 'scale(0)', transform: 'rotate(90deg)'})
      .from($(".showreel-text"), 1, {autoAlpha: 0, y: -20})
      .fromTo($(".mouse"), 1, {autoAlpha: 0}, {autoAlpha: 1});
    //content

    //mouse
    var tlmouse = new TimelineMax({repeat: -1});
    tlmouse
      .fromTo($('.mouse'), 1, {y: 0}, {y: 10})
      .fromTo($('.mouse p'), 1.2, {height: 0}, {height: '38px'}, 0)
      .fromTo($('.mouse span'), 1.1, {autoAlpha: 1, y: 0}, {autoAlpha: 0, y: 10}, 0)
      .fromTo($('.mouse'), 0.5, {y: 10}, {y: 0}, 1)
      .fromTo($('.mouse p'), 0.5, {height: '38px'}, {height: 0}, 1.2 )


    $(".mouse").on('click', function(event) {
      var $mainContant = $('.banner-content'); 
      var menuTop = $mainContant.height();
      $("body, html").animate({scrollTop: menuTop + "px"}, 1000);
    });
    //mouse
});