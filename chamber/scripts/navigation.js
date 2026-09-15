
const navbutton = document.querySelector('#hamburger');
const navlinks = document.querySelector('#nav-bar');


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('open');
    navlinks.classList.toggle('open');
});