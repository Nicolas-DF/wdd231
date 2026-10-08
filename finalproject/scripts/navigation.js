const navButton = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    navBar.classList.toggle('open');
});