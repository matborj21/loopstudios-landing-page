const toggler = document.getElementById('toggler');
const hamburger = document.getElementById('hamburger');

toggler.addEventListener('click', () => {
    hamburger.classList.toggle('animate');
});