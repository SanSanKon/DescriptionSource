//Burger menu
const burger = document.querySelector('.burger');
const mainNav = document.querySelector('.nav');
const nav = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('nav-ul li');
 
const navSlide = () => {
   
    burger.addEventListener('click', ()=> {
        //Burger Animation
        burger.classList.toggle('toggle');

         //Toggle Nav
        nav.classList.toggle('nav-active');
        // if (nav.classList.contains('nav-active')) {
        //     mainNav.style.background = '#0e3c5e';
        // } else {
        //     mainNav.style.background = '#636d76';
        // }

    //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();

    navLinks.forEach(link => link.addEventListener('click', ()=> {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    }));