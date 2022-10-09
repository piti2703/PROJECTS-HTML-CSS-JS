const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.header__burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item');

const handleNav = () => {
    nav.classList.toggle('nav-mobile--active')
    navBtn.classList.toggle('header__burger-btn--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
            navBtn.classList.remove('header__burger-btn--active')
        })
    })
}





navBtn.addEventListener('click', handleNav);
