document.querySelectorAll('#sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle?.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

const closeBannerBtn = document.getElementById('close-banner');
closeBannerBtn?.addEventListener('click', function () {
    const banner = document.getElementById('notification-banner');
    banner?.style.setProperty('display', 'none');
    
    document.body.classList.add('transition');
    setTimeout(() => document.body.classList.remove('transition'), 500);
});

const scrollToTopBtn = document.getElementById('scroll-to-top');
let isThrottled = false;

window.addEventListener('scroll', () => {
    if (!isThrottled) {
        isThrottled = true;
        setTimeout(() => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
            isThrottled = false;
        }, 200); 
    }
});

scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const sections = document.querySelectorAll('.section-content');
if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
};

document.querySelectorAll('.ripple-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const maxDimension = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.width = ripple.style.height = `${maxDimension}px`;
        ripple.style.left = `${e.clientX - this.offsetLeft - maxDimension / 2}px`;
        ripple.style.top = `${e.clientY - this.offsetTop - maxDimension / 2}px`;
        
        setTimeout(() => ripple.remove(), 600);
    });
});
