//トップお客様の声スライド
$('.voices-wrap__con__list').slick({
  autoplaySpeed: 3000,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  pauseOnFocus: false,
  centerMode: true,
  pauseOnHover: true,
  centerPadding: "30%",
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "23%",
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerPadding: "15%",
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        centerPadding: "0%",
      },
    },
  ],
});

//会社情報写真スライド
$('.pics-wrap__list').slick({
  autoplaySpeed: 1500,
  speed: 1200,
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  arrows: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//ヘッダースクロール
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 200);
});

//アコーディオンメニュー
$('.faq-wrap__con__list__block__ttl').on('click', function() {
  $('.faq-wrap__con__list__block__answer').slideUp(500);
  var findElm = $(this).next(".faq-wrap__con__list__block__answer");    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});

/*ハンバーガーメニュー*/
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
}); 



//voiceカテゴリー選択//
function showVoiceCategory(category) {
  var items = document.getElementsByClassName('voices-archive-wrap__con__list__item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'v-cate00' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

var voiceCategories = document.getElementsByClassName('v-cate');

for (var i = 0; i < voiceCategories.length; i++) {
  voiceCategories[i].addEventListener('click', function() {
    var category = this.classList[1];
    showVoiceCategory(category);

    for (var j = 0; j < voiceCategories.length; j++) {
      voiceCategories[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

//Newsカテゴリー選択//
function showNewsCategory(category) {
  var items = document.getElementsByClassName('news-archive-wrap__con__list__item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'n-cate00' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

var newsCategories = document.getElementsByClassName('n-cate');

for (var i = 0; i < newsCategories.length; i++) {
  newsCategories[i].addEventListener('click', function() {
    var category = this.classList[1];
    showNewsCategory(category);

    for (var j = 0; j < newsCategories.length; j++) {
      newsCategories[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}


///Worksカテゴリー選択//
function showTopicsCategory(category) {
  var items = document.getElementsByClassName('topics-archive-wrap__con__list__item');
  for (var i = 0; i < items.length; i++) {
    if (category === 't-cate00' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

var topicsCategories = document.getElementsByClassName('t-cate');

for (var i = 0; i < topicsCategories.length; i++) {
  topicsCategories[i].addEventListener('click', function() {
    var category = this.classList[1];
    showTopicsCategory(category);

    for (var j = 0; j < topicsCategories.length; j++) {
      topicsCategories[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

document.getElementsByClassName('t-cate00')[0].addEventListener('click', function() {
  showTopicsCategory('t-cate00');

  for (var j = 0; j < topicsCategories.length; j++) {
    topicsCategories[j].classList.remove('active');
  }
  this.classList.add('active');
});

