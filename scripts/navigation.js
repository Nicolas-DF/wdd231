const navbutton = document.querySelector('#hamburg');
const navlinks = document.querySelector('#nav-bar');


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

