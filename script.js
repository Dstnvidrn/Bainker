'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn =>  btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// document.querySelectorAll('.nav__link').forEach( function(ele) {
//     ele.addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log(this.getAttribute('href').slice(1));
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: "smooth"});


//     });
// })
// add event listener to a common parent element
// determine which event originated the event - to work with that element

document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }
})

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach( el => el.addEventListener('click', function(e) {console.log('TAB')}));
tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');

    if(!clicked) return;
    tabs.forEach( ele => ele.classList.remove('operations__tab--active'))
    tabsContent.forEach( content => content.classList.remove('operations__content--active'))
    clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

// Menu fade animation
function handleHover(e) {
    if (e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) {
                logo.style.opacity = el.style.opacity = this;
            }
        })
    }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// 

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', (e) => {

//     const s1coords = section1.getBoundingClientRect();
//     // Scrolling
//     // window.scrollTo({
//     //     left:s1coords.left,
//     //     top: s1coords.top + window.pageYOffset,
//     // behavior: "smooth"});
//     // console.log(s1coords);
//     // console.log(`client height: ${document.documentElement.clientHeight} \nclient Width: ${document.documentElement.clientWidth}`)
//     section1.scrollIntoView({behavior: "smooth"})
// })
// ////////////////////////////


// const header = document.querySelector('.header');
// function createRandomInt(min, max) {
//     return Math.trunc(Math.random() * (max - min + 1) + min);
// }

// // Returns NodeList
// const allSections = document.querySelectorAll('.section'); 


// // Returns HTMLCollection -- Live Collection (Updates when elements are added or deleted)
// const allButtons = document.getElementsByTagName('button');
 

// // Creating and Inserting Elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for functionality and analytics';
// message.innerHTML = 'We use cookies for functionality and analytics <button class="btn btn--close-cookie">Accept</button>'

// // header.append(message.cloneNode(true));
// header.append(message);


// // Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => message.parentElement.removeChild(message));
// message.style.backgroundColor = "#37383d";
// message.style.width = '120%';

// // console.log(getComputedStyle(message).color);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30+ 'px';



// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// const scrollToTop = document.createElement('div');

// scrollToTop.innerHTML = '<button id="btn-top" class="btn btn--close-cookie">Top</button>';

// scrollToTop.className='btn-top';
// scrollToTop.style.backgroundColor = 'transparent';
// scrollToTop.style.height = Number.parseFloat(getComputedStyle(scrollToTop).height,10) + 30 + 'px';
// const btnToTop = document.querySelector('#btn-top');

// btnToTop.addEventListener('click', () => {
//     // const headerCoords = header.getBoundingClientRect();
//     // window.scrollTo({left: headerCoords.left, top: headerCoords.top + window.pageYOffset, behavior: "smooth"});

//     header.scrollIntoView({behavior: 'smooth'})
// })
// const head = document.querySelector('#header-top');

// console.log(getComputedStyle(scrollToTop).height);

// const h1 = document.querySelector('h1');
// ;

// console.log(Array.from({length:100}, () => createRandomInt(0,6)));
// function randomColor(){
//     return `rgb(${createRandomInt(0,255)},${createRandomInt(0,255)},${createRandomInt(0,255)})`;
// } 

// document.querySelector('.nav__link').addEventListener('click', function(e){
//     this.style.backgroundColor = randomColor();
// })
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// })
// document.querySelector('.nav').addEventListener('click', function(e) {this.style.backgroundColor = randomColor()})
// document.querySelector('.header').addEventListener('click', function(e) {this.style.backgroundColor = randomColor()})

// function rotateColors() {
//     function changer() {
//         document.querySelector('.nav__link').style.backgroundColor = randomColor();
//         document.querySelector('.nav__links').style.backgroundColor = randomColor();
//         document.querySelector('.nav').style.backgroundColor = randomColor();
//         document.querySelector('.header').style.backgroundColor = randomColor();
//         time--;
//         if(time === 0) {
//             clearInterval(timer);
//         }
//     }
    
//     let time = 15
//     changer();
//     const timer = setInterval(changer, 500);
//     return timer;
// }

// rotateColors();