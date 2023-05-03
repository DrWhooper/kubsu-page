document.querySelector('.menu-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.menu-btn').classList.toggle('menu-btn_active');
  document.querySelector('.menu-nav').classList.toggle('menu-nav_active');
});