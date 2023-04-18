const menu = document.querySelector('.Menu');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('.portfolio-links');
const header = document.querySelector('header');

function toggleMenu() {
  menu.classList.toggle('active');
  header.classList.toggle('active');
}

function close() {
  menu.classList.remove('active');
  header.classList.remove('active');
}

burger.addEventListener('click', toggleMenu);
links.forEach((n) => n.addEventListener('click', close));
