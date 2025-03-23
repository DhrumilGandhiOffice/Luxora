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
}

const handleScroll = function () {
    const header = document.querySelector('.header');

    function updateHeader() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > 300) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);

    updateHeader();
};

function scrollAnimation() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleHamburger();
    handleScroll();
    scrollAnimation();
});