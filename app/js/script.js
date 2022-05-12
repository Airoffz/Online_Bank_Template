
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', ()=> {
    // header.classList.toggle('open');
    if (header.classList.contains('open')) {  // close Hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        fadeElems.forEach((e)=>{
            e.classList.remove('fade-in');
        });

    }
    else {  // open Hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        fadeElems.forEach((e)=>{
            e.classList.add('fade-in');
        });

    }
});