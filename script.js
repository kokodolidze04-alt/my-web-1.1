document.addEventListener("DOMContentLoaded", () => {

    // Lucide Icons
    lucide.createIcons();

    // CTA Button
    const ctaButton = document.getElementById("cta-btn");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("მალე დავამატებთ სერვისების განყოფილებას!");
        });
    }

    // Navbar
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(255,255,255,0.18)";
            navbar.style.backdropFilter = "blur(20px)";
            navbar.style.webkitBackdropFilter = "blur(20px)";

        } else {

            navbar.style.background = "rgba(255,255,255,0.158)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.webkitBackdropFilter = "blur(10px)";

        }

    });

});