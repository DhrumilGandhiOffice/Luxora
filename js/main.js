const handleHamburger = function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        
        // Toggle states
        hamburger.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('header') && mobileMenu.classList.contains('active')) {
            // Close menu
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Optional: Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

const handleScroll = function () {
    const header = document.querySelector('.header');

    function updateHeader() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 330) {  // Check if scrolled past 300px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);
    
    updateHeader(); // Initial check
};
document.addEventListener('DOMContentLoaded', () => {
    handleHamburger();
    handleScroll();
});