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

///Pop-ups////

const details = [
  {
    id: 1,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Project name gors here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: "images/Group 109.png",
    technologies: ['Html/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

const projects = document.getElementById('allProjects');
const images = details.map(function(detail){
  return detail['image'];
  });

const names = details.map(function(detail){
    return detail['name'];
    });
  
const technologies = details.map(function(detail){
      return detail['technologies'];
      });

const description = details.map(function(detail){
        return detail['description'];
        });

 var i = 0;   

function openModal() {
  

projects.style.display = "block";
projects.insertAdjacentHTML("beforeend", `<div id="modal">
            <div class="cancel"><img src="images/ic_cross.jpg" alt=""></div>   
            <h2 class="title-modal">${names[i]}</h2>
            <ul class="tech-flex">
                <li class="Html-css">${technologies[i][0]}</li>
                <li class="Ruby">${technologies[i][1]}</li>
                <li class="Javascript">${technologies[i][2]}</li>
            </ul>
            <div class="modal-image"><img src="${images[i]}" alt="project-image-desktop"></div>
            <div class="descript">${description[i]}</div>
            <button class="see-live">
                See Live <i class="fa-sharp fa-light fa-arrow-up-right-from-square"></i>
            </button>
            <button class="see-source">
            See Source<i class="fa-brands fa-github"></i>
            </button>
</div>`); 
if (i>detail.length) {
  i++;}

}


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const cancel = document.getElementById('cancel');




openModalButtons.forEach((button) =>button.addEventListener('click', openModal));


document.addEventListener("click", function(e){
  const target = e.target.closest(".cancel"); 

  if(target){
    projects.innerHTML = '';
  }
});

for (var i = 0, j = images.length; i < j; i++) {
  var img = document.createElement('img');
  img.src = images[i];
  container.appendChild(img);
}

 

