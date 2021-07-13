"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var btnBurger = document.querySelector('.menu_btn');
  var content = document.querySelector('.content');
  var articleReserve = document.querySelector('.article_reserve');
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
  var modalBtns = document.querySelectorAll("#js-open-modal");
  var modalOverlay = document.querySelectorAll("#js-overlay-modal");
  var modalClose = document.querySelectorAll("#js-modal-close");

  var _loop = function _loop(i) {
    modalBtns[i].addEventListener('click', function (e) {
      var parth = modalBtns[i].getAttribute('data-parth');
      var modal = document.querySelector("[data-target=\"".concat(parth, "\"]"));
      modal.classList.add('show');
      e.preventDefault();

      for (var _i3 = 0; _i3 < modalClose.length; _i3++) {
        modalClose[_i3].addEventListener('click', function () {
          modal.classList.remove('show');
        });
      }
    });
  };

  for (var i = 0; i < modalBtns.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    modalOverlay[_i].addEventListener('click', function (e) {
      if (e.target == modalOverlay[_i]) {
        modalOverlay[_i].classList.remove('show');
      }
    });
  };

  for (var _i = 0; _i < modalOverlay.length; _i++) {
    _loop2(_i);
  }

  var links = document.querySelectorAll('.menu_navigation_list_link a[href*="#"]');

  if (links.length > 0) {
    for (var _i2 = 0; _i2 < links.length; _i2++) {
      links[_i2].addEventListener('click', function (e) {
        e.preventDefault();
        var blockId = e.target.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        btnBurger.classList.remove('menu_btn-active');
        article.classList.remove('article-active');
        content.classList.remove('content-active');
        articleReserve.classList.remove('article_reserve-active');
        news.classList.remove('news-active');
      });
    }
  }

  var mask = document.querySelector('.mask');
  window.addEventListener('load', function () {
    mask.classList.add('hide');
    setTimeout(function () {
      mask.remove();
    }, 600);
  });
});