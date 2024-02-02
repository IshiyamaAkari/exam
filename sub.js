//フェードアップアニメーション//
function FadeUpAnime() { //関数名を変える
  $('.fadeUpTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}
$(window).scroll(function (){
    FadeUpAnime();
});

/*スムーススクロール*/
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var windowWidth = $(window).width();
  var headerHeight = 80;
  if (windowWidth <= 768) {
    headerHeight = 0;
  }
  var pos = $(elmHash).offset().top - headerHeight;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {
    start:'manual',
    type: 'scenario-sync',
    duration: 10,
    forceRender: false,
    animTimingFunction:Vivus.EASE,
},
function(){
  $("#mask").attr("class", "done");
}
);

$(window).on('load',function(){
    $("#splash").delay(2000).fadeOut('slow');
  $("#splash_logo").delay(2000).fadeOut('slow');
        stroke.play();
});