let position = 0;
const slideToShow = 1;
const slideToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const itemsCount = items.length;
const itemsWidth = container.clientWidth / slideToShow;
const movePosition = slideToScroll * itemsWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemsWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemLeft = itemsCount - (Math.abs(position) + slideToShow * itemsWidth) / itemsWidth;
  position -= itemLeft >= slideToScroll ? movePosition : itemLeft * itemsWidth;

  setPosition();
  checkBtn();
});

btnPrev.addEventListener('click', () => {
  const itemLeft = Math.abs(position) / itemsWidth;
  position += itemLeft >= slideToScroll ? movePosition : itemLeft * itemsWidth;
  
  setPosition();
  checkBtn();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtn = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slideToShow) * itemsWidth;
}
checkBtn();