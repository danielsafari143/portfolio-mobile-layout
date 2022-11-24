export const projects = [
  {
    name: 'Topic',
    feature: 'CANOPY',
    background: 'Back End Dev',
    year: '2015',
    image: 'images/tonic-project-desktop.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://github.com/danielsafari143/portfolio-mobile-layout',
    linkSource: 'https://github.com/danielsafari143/portfolio-mobile-layout',
  },
  {
    name: 'Multi-Post Stories',
    feature: 'CANOPY',
    background: 'Back End Dev',
    year: '2015',
    image: 'images/multi-post-stories-project.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://github.com/danielsafari143/portfolio-mobile-layout',
    linkSource: 'https://github.com/danielsafari143/portfolio-mobile-layout',
  },
  {
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'images/facebook-360-project.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://github.com/danielsafari143/portfolio-mobile-layout',
    linkSource: 'https://github.com/danielsafari143/portfolio-mobile-layout',
  },
  {
    name: 'Uber',
    feature: 'Uber',
    background: 'Front End Developer',
    year: '2018',
    image: 'images/uber-navigation-project.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://github.com/danielsafari143/portfolio-mobile-layout',
    linkSource: 'https://github.com/danielsafari143/portfolio-mobile-layout',
  },
];

const startingPoint = document.querySelector('.hero');

export function createModal() {
  startingPoint.insertAdjacentHTML(
    'afterend',
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name fw-700 fz-32 lh-44 clr-n-800'></h2>
    <img  class='closeModal' src='images/close.svg' alt='close icon'></img>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature fw-600 fz-13 lh-16 clr-n-600"></p>
    <ul class=" flex">
    <li class=" project-background fw-600 fz-13 lh-16 clr-n-500"></li>
    <li class="project-year fw-600 fz-13 lh-16 clr-n-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description fw-400 fz-15 lh-24 clr-n-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool2 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool3 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`
  );
}
