document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function() {
        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('loader').classList.remove('hidden');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 1000);
    });
});

document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('translate-x-full');
});

document.getElementById('close-mobile-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('translate-x-full');
});