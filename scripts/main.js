
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
  
  const links = document.querySelectorAll('.menu_navigation_list_link a[href*="#"]');
  
  if(links.length > 0) {
    for(let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        const blockId = e.target.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        btnBurger.classList.remove('menu_btn-active');
        article.classList.remove('article-active');
        content.classList.remove('content-active');  
        articleReserve.classList.remove('article_reserve-active');
        news.classList.remove('news-active');
      })
    }
  }

  let mask = document.querySelector('.mask');
  
  window.addEventListener('load', () => {
    mask.classList.add('hide')
    setTimeout(() =>{
      mask.remove();
    }, 600)
  });
});






