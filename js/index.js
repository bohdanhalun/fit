const burger = document.querySelector('.toggle-nav');
const menu = document.querySelector('.menu')

burger.addEventListener('click', function() {
  menu.classList.toggle("open");
})