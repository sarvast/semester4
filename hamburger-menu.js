// Hamburger Menu for Mobile Navigation
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.setAttribute('aria-label', 'Toggle navigation');

    // Insert hamburger before nav
    nav.parentElement.insertBefore(hamburger, nav);

    // Toggle menu
    hamburger.addEventListener('click', function () {
        navUl.classList.toggle('nav-open');
        this.classList.toggle('active');

        // Change icon
        const icon = this.querySelector('i');
        if (navUl.classList.contains('nav-open')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        const isMenuOpen = navUl.classList.contains('nav-open');

        // Close if menu is open and click is outside nav and not on hamburger
        if (isMenuOpen && !isClickInsideNav && !isClickOnHamburger) {
            navUl.classList.remove('nav-open');
            hamburger.classList.remove('active');
            hamburger.querySelector('i').className = 'fas fa-bars';
        }
    });

    // Close menu when clicking a link
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navUl.classList.remove('nav-open');
            hamburger.classList.remove('active');
            hamburger.querySelector('i').className = 'fas fa-bars';
        });
    });
});
