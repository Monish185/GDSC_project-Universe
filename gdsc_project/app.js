document.addEventListener("DOMContentLoaded", function () {
    
    const links = document.querySelectorAll('.nav-links a, .footer-nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
  
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    window.addEventListener('click', (event) => {
      if (!event.target.matches('.menu-toggle') && !event.target.closest('.nav-links2')) {
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
        }
      }
    });
  });
  
