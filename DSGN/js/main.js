const navMobile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const navBtn = document.querySelector('.header__burger-btn');
const navBtn2 = document.querySelector('.header__burger-btn--white');
const allNavMobileItems = document.querySelectorAll('.nav-mobile__item');
const allNavDesktopItems = document.querySelectorAll('.nav-desktop__item');
const footerYear = document.querySelector('.footer__author-year');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active')

    allNavMobileItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
        })
    })
}
const handleNav2 = () => {
    navDesktop.classList.toggle('nav-desktop--active')

    allNavDesktopItems.forEach(item => {
        item.addEventListener('click', () => {
            navDesktop.classList.remove('nav-desktop--active')
        })
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();

navBtn.addEventListener('click', handleNav);
navBtn2.addEventListener('click', handleNav2);
