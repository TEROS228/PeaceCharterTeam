// header-loader.js
document.addEventListener('DOMContentLoaded', function() {
  // Загружаем хедер
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      // Вставляем хедер в начало body
      document.body.insertAdjacentHTML('afterbegin', data);
      
      // Обновляем активную ссылку на текущей странице
      const currentPage = window.location.pathname.split('/').pop();
      const links = document.querySelectorAll('.nav a');
      
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
          link.classList.add('active');
        }
      });
      
      // Добавляем отступ для body чтобы контент не перекрывался хедером
      document.body.style.paddingTop = '70px';
      
      // Для мобильных устройств
      if (window.innerWidth <= 768) {
        document.body.style.paddingTop = '60px';
      }
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
});