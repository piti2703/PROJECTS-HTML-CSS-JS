const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.header__burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item');
const footerYear = document.querySelector('.footer-bottom__year');

const handleNav = () => {
    nav.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })
}




const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
