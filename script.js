document.getElementById('cta-btn').addEventListener('click', () => {
    alert('მალე დავამატებთ სერვისების განყოფილებას!');
});window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)'; // სქროლვისას უფრო მუქდება
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});