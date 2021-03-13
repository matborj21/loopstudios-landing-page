const toggler = document.getElementById('toggler');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');



toggler.addEventListener('click', () => {
    hamburger.classList.toggle('animate');
    navbar.classList.toggle('show');   
});
