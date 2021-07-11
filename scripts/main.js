
document.addEventListener('DOMContentLoaded', function() {

  const btnBurger = document.querySelector('.menu_btn');
  const content = document.querySelector('.content');
  const articleReserve = document.querySelector('.article_reserve');
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

  const modalBtns = document.querySelectorAll("#js-open-modal");
  const modalOverlay = document.querySelectorAll("#js-overlay-modal");
  const modalClose = document.querySelectorAll("#js-modal-close");

  for(let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function(e) {
      let parth = modalBtns[i].getAttribute('data-parth');
      let modal = document.querySelector(`[data-target="${parth}"]`);
      modal.classList.add('show');
      e.preventDefault();
      for(let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function() {
          modal.classList.remove('show');
        })
      }
    }); 
  }

  for(let i = 0; i < modalOverlay.length; i++) {
    modalOverlay[i].addEventListener('click', function(e) {
      if(e.target == modalOverlay[i]) {
        modalOverlay[i].classList.remove('show');        
      }
    })
  }
  
});






