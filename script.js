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

/// Pop-ups////

const details = [
  {
    id: 1,
    name: 'Budget App',
    description: 'Budget app is a mobile web application where you can manage your budget: store a list of transactions associated with a category, allowing users see the total ammount of money accumulated on those transactions.',
    image: 'images/budget-app-screenshot.png',
    technologies: ['Tailwind CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: 'https://budget-app-tgmk.onrender.com/',
    source: 'https://github.com/RicardoEgas/budget-app',
  },
  {
    id: 2,
    name: 'BballGeeks Mobile App',
    description: 'BballGeeks is a comprehensive mobile application designed for basketball enthusiasts and NBA fans. This app provides users with access to a wealth of NBA statistics spanning over 10 seasons. Whether you are a casual fan or a dedicated basketball analyst, BballGeeks offers a wide range of features and data to satisfy your basketball cravings.',
    image: 'images/BballGeeks-screenshot.png',
    technologies: ['REACT', 'CSS', 'API'],
    liveVersion: 'https://ricardoegas.github.io/BballGeeks',
    source: 'https://github.com/RicardoEgas/BballGeeks',
  },
  {
    id: 3,
    name: 'Event Listener Music Festival',
    description: 'The Event Listener Music Festival Website project aims to create an engaging and informative online platform for music enthusiasts and festival-goers. The website will serve as the central hub for all information related to the Event Listener music festival, including lineup details, venue information, and more.',
    image: 'images/music-festival-website.png',
    technologies: ['Html/CSS', 'Javascript'],
    liveVersion: 'https://ricardoegas.github.io/Project-Festival',
    source: 'https://github.com/RicardoEgas/Project-Festival',
  },
  {
    id: 4,
    name: 'Rick&Morty API characters',
    description: 'Engaged in a collaborative project integrating an external API to retrieve comprehensive information, including pictures, names, types, IDs, statuses, and genders of characters from the Rick and Morty series.',
    image: 'images/Rick&Morty-screenshot.png',
    technologies: ['Html/CSS', 'API', 'Javascript'],
    liveVersion: 'https://ochiengsteven.github.io/Module2-Capstone/dist/',
    source: 'https://github.com/ochiengsteven/Module2-Capstone',
  },
  {
    id: 5,
    name: 'Space Travelers',
    description: 'Space Travelers is a demo web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. It uses real live data from the SpaceX API.',
    image: 'images/space-travelers-screenshot.png',
    technologies: ['REACT', 'Redux', 'API'],
    liveVersion: '#',
    source: 'https://github.com/RicardoEgas/Space-Travelers',
  },
];

const projects = document.getElementById('allProjects');
const openModalButtons = document.querySelectorAll('[data-modal-target]');

function getDetailForImage(image) {
  const imageSrc = image.getAttribute('src');
  return details.find((detail) => detail.image === imageSrc);
}

function displayModal(detail) {
  projects.style.display = 'block';
  projects.innerHTML = `
    <div id="modal">
      <div class="cancel"><img src="images/ic_cross.jpg" alt=""></div>   
      <h2 class="title-modal">${detail.name}</h2>
      <ul class="tech-flex">
        ${detail.technologies[0] ? `<li class="Html-css">${detail.technologies[0]}</li>` : ''}
        ${detail.technologies[1] ? `<li class="Ruby">${detail.technologies[1]}</li>` : ''}
        ${detail.technologies[2] ? `<li class="Javascript">${detail.technologies[2]}</li>` : ''}
      </ul>
      <div class="modal-image"><img src="${detail.image}" alt="project-image-desktop"></div>
      <div class="descript">${detail.description}</div>
      <a href="${detail.liveVersion}"><button class="see-live">See Live <i class="fa-sharp fa-light fa-arrow-up-right-from-square"></i></button></a>
      <a href="${detail.source}"><button class="see-source">See Source<i class="fa-brands fa-github"></i></button></a>
    </div>`;
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const parentContainer = e.target.closest('.big-laptop, .laptop1, .laptop2, .laptop3, .laptop4, .laptop5, .grid3');

    if (parentContainer) {
      const image = parentContainer.querySelector('img');
      const detail = getDetailForImage(image);

      if (detail) {
        displayModal(detail);
      }
    }
  });
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.cancel');

  if (target) {
    projects.innerHTML = '';
  }
});

const specificImages = document.querySelectorAll('.grid1, .grid4, .grid7');

specificImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const parentContainer = e.target.closest('.work-desktop');
    if (parentContainer) {
      const detail = getDetailForImage(image);
      if (detail) {
        displayModal(detail);
      }
    }
  });
});
