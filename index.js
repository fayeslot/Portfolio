

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon'); // Adjust selector as needed
    const navbar = document.querySelector('.navbar'); // Adjust selector as needed
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        const top = window.scrollY;

        // Highlight the active navigation link
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150; // Adjust offset as needed
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        // Toggle sticky class on header
        header.classList.toggle('sticky', top > 90);

        // Close the menu if the user scrolls
        if (top > 100) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    };
});
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});

