const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
