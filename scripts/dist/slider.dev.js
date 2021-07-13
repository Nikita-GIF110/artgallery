"use strict";

var position = 0;
var slideToShow = 1;
var slideToScroll = 1;
var container = document.querySelector('.slider-container');
var track = document.querySelector('.slider-track');
var items = document.querySelectorAll('.slider-item');
var btnPrev = document.querySelector('.prev');
var btnNext = document.querySelector('.next');
var itemsCount = items.length;
var itemsWidth = container.clientWidth / slideToShow;
var movePosition = slideToScroll * itemsWidth;
items.forEach(function (item) {
  item.style.minWidth = "".concat(itemsWidth, "px");
});
btnNext.addEventListener('click', function () {
  var itemLeft = itemsCount - (Math.abs(position) + slideToShow * itemsWidth) / itemsWidth;
  position -= itemLeft >= slideToScroll ? movePosition : itemLeft * itemsWidth;
  setPosition();
  checkBtn();
});
btnPrev.addEventListener('click', function () {
  var itemLeft = Math.abs(position) / itemsWidth;
  position += itemLeft >= slideToScroll ? movePosition : itemLeft * itemsWidth;
  setPosition();
  checkBtn();
});

var setPosition = function setPosition() {
  track.style.transform = "translateX(".concat(position, "px)");
};

var checkBtn = function checkBtn() {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slideToShow) * itemsWidth;
};

checkBtn();