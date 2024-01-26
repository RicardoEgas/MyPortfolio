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
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/budget-app-screenshot.png',
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/BballGeeks-screenshot.png',
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/music-festival-website.png',
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/Rick&Morty-screenshot.png',
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'images/space-travelers-screenshot.png',
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

const projects = document.getElementById('allProjects');

const images = details.map((detail) => detail.image);
const names = details.map((detail) => detail.name);
const technologies = details.map((detail) => detail.technologies);
const description = details.map((detail) => detail.description);

const openModalButtons = document.querySelectorAll('[data-modal-target]');

openModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const parentContainer = e.target.closest('.big-laptop, .laptop1, .laptop2, .laptop3, .laptop4, .laptop5, .grid3');

    if (parentContainer) {
      const image = parentContainer.querySelector('img');
      const imageSrc = image.getAttribute('src'); 
      const detail = details.find((detail) => detail.image === imageSrc);

      if (detail) {
        projects.style.display = 'block';
        projects.innerHTML = `
          <div id="modal">
            <div class="cancel"><img src="images/ic_cross.jpg" alt=""></div>   
            <h2 class="title-modal">${detail.name}</h2>
            <ul class="tech-flex">
              <li class="Html-css">${detail.technologies[0]}</li>
              <li class="Ruby">${detail.technologies[1]}</li>
              <li class="Javascript">${detail.technologies[2]}</li>
            </ul>
            <div class="modal-image"><img src="${detail.image}" alt="project-image-desktop"></div>
            <div class="descript">${detail.description}</div>
            <button class="see-live">See Live <i class="fa-sharp fa-light fa-arrow-up-right-from-square"></i></button>
            <button class="see-source">See Source<i class="fa-brands fa-github"></i></button>
          </div>`;
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
