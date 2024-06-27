document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0';
});

document.querySelectorAll('#sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, 
            behavior: 'smooth'
        });

        document.getElementById('sidebar').style.width = '0'; 
    });
});
