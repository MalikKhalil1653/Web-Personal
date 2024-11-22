// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact form
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[placeholder="name"]').value.trim();
    const email = document.querySelector('input[placeholder="email"]').value.trim();
    const number = document.querySelector('input[placeholder="number"]').value.trim();
    const message = document.querySelector('textarea[placeholder="message"]').value.trim();

    if (!name || !email || !number || !message) {
        e.preventDefault();
        alert('Harap isi semua kolom pada formulir!');
    } else {
        alert('Pesan berhasil dikirim!');
    }
});

// Change header style on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add active class to the current navigation item
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
