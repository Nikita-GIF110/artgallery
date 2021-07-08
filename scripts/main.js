const btnBurger = document.querySelector('.menu_btn');
const content = document.querySelector('.content');
const articleWrap = document.querySelector('.article_wrap');
const articleReserve = document.querySelector('.article_reserve');
const articleMap = document.querySelector('.article_map');
const article = document.querySelector('.article');
const news = document.querySelector('.news');

btnBurger.addEventListener('click', (event) => {
  btnBurger.classList.toggle('menu_btn-active');
  article.classList.toggle('article-active');
  content.classList.toggle('content-active');  
  articleReserve.classList.toggle('article_reserve-active');
  news.classList.toggle('news-active');
  event.preventDefault();
});


const btns = document.querySelectorAll("*[data-modal_btn]");
const close = document.querySelectorAll('.news_modal_window_close');
const modalOverlay = document.querySelectorAll('.news_modal');

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e) {
    let name = btns[i].getAttribute('data-modal_btn');
    let modal = document.querySelector("[data-modal_window = '"+name+"']");
    modal.classList.add('show');
    for(let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        modal.classList.remove('show');
      });
    }    
  });
}
