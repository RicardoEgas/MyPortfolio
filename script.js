const menu = document.querySelector('.Menu');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('.portfolio-links');

function toggleMenu() {
  menu.classList.toggle('active');
}

function close() {
  menu.classList.remove('active');
}

burger.addEventListener('click', toggleMenu);
links.forEach((n) => n.addEventListener('click', close));
