const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.toggle');
const list = document.querySelectorAll('.list');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}

list.forEach((item) => {
  item.addEventListener('mouseover', activeLink);
});
