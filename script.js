'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', (e) => {

    const s1coords = section1.getBoundingClientRect();
    // Scrolling
    // window.scrollTo({
    //     left:s1coords.left,
    //     top: s1coords.top + window.pageYOffset,
    // behavior: "smooth"});
    // console.log(s1coords);
    // console.log(`client height: ${document.documentElement.clientHeight} \nclient Width: ${document.documentElement.clientWidth}`)
    section1.scrollIntoView({behavior: "smooth"})
})
////////////////////////////


const header = document.querySelector('.header');


// Returns NodeList
const allSections = document.querySelectorAll('.section'); 


// Returns HTMLCollection -- Live Collection (Updates when elements are added or deleted)
const allButtons = document.getElementsByTagName('button');
 

// Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for functionality and analytics';
message.innerHTML = 'We use cookies for functionality and analytics <button class="btn btn--close-cookie">Accept</button>'

// header.append(message.cloneNode(true));
header.append(message);


// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => message.parentElement.removeChild(message));
message.style.backgroundColor = "#37383d";
message.style.width = '120%';

console.log(getComputedStyle(message).color);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 90 + 'px';



// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

const scrollToTop = document.createElement('div');
scrollToTop.innerHTML = 'Scroll to top <button class="btn btn--close-cookie">Top</button>';
scrollToTop.style.width = '100%';
scrollToTop.className='cookie-message';
scrollToTop.style.backgroundColor = '#37383d';
scrollToTop.style.height = Number.parseFloat(getComputedStyle(scrollToTop).height,10) + 90 + 'px';


scrollToTop.addEventListener('click', () => {
    // const headerCoords = header.getBoundingClientRect();
    // window.scrollTo({left: headerCoords.left, top: headerCoords.top + window.pageYOffset, behavior: "smooth"});

    header.scrollIntoView({behavior: 'smooth'})
})
const head = document.querySelector('#header-top');
section1.append(scrollToTop);
console.log(getComputedStyle(scrollToTop).height);

const h1 = document.querySelector('h1');
h1.onmouseleave = () => alert("goodbye!");

const randomColor = `rgb${createRandomInt(0,255)},${createRandomInt(f0,255)}`;