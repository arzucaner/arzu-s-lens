document.querySelectorAll('#sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 20, 
            behavior: 'smooth'
        });
    });
});


document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('close-banner').addEventListener('click', function () {
    document.getElementById('notification-banner').style.display = 'none';
  
     document.body.classList.add('transition');
     setTimeout(function() {
         document.body.classList.remove('transition');
     }, 500); 
 });

const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeSwitch.textContent = 'Switch to Light Mode';
    } else {
        themeSwitch.textContent = 'Switch to Dark Mode';
    }
});

const sections = document.querySelectorAll('.section-content');

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
