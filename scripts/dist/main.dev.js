"use strict";

var btnBurger = document.querySelector('.menu_btn');
var content = document.querySelector('.content');
var articleWrap = document.querySelector('.article_wrap');
var articleReserve = document.querySelector('.article_reserve');
var articleMap = document.querySelector('.article_map');
var article = document.querySelector('.article');
var news = document.querySelector('.news');
btnBurger.addEventListener('click', function (event) {
  btnBurger.classList.toggle('menu_btn-active');
  article.classList.toggle('article-active');
  content.classList.toggle('content-active');
  articleReserve.classList.toggle('article_reserve-active');
  news.classList.toggle('news-active');
  event.preventDefault();
});
var btns = document.querySelectorAll("*[data-modal_btn]");
var close = document.querySelectorAll('.news_modal_window_close');
var modalOverlay = document.querySelectorAll('.news_modal');

var _loop = function _loop(i) {
  btns[i].addEventListener('click', function (e) {
    var name = btns[i].getAttribute('data-modal_btn');
    var modal = document.querySelector("[data-modal_window = '" + name + "']");
    modal.classList.add('show');

    for (var _i = 0; _i < close.length; _i++) {
      close[_i].addEventListener('click', function () {
        modal.classList.remove('show');
      });
    }
  });
};

for (var i = 0; i < btns.length; i++) {
  _loop(i);
}