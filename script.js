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

    // Navbar Scroll Effect
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

    // ==========================================
    // Pricing Accordion Logic (მობილურისთვის)
    // ==========================================
    const toggleHeaders = document.querySelectorAll(".toggle-header");

    toggleHeaders.forEach(header => {
        header.addEventListener("click", () => {
            
            // ამოწმებს, რომ ეს ფუნქცია მხოლოდ მობილურის ეკრანზე ჩაირთოს
            if (window.innerWidth <= 768) {
                const card = header.closest(".pricing-card");
                
                // ვხურავთ ყველა სხვა გაშლილ ბარათს, რომ ერთდროულად მხოლოდ ერთი იყოს ღია
                document.querySelectorAll(".pricing-card").forEach(c => {
                    if (c !== card) {
                        c.classList.remove("active");
                    }
                });

                // ვხსნით ან ვკეტავთ იმ ბარათს, რომელსაც დავაკლიკეთ
                card.classList.toggle("active");
            }
        });
    });

});

// ==========================================
// Matrix Background Code Rain
// ==========================================
const canvas = document.getElementById('matrix-canvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    // ტილოს ზომების გასწორება ეკრანის ზომაზე
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // სიმბოლოები, რომლებიც იწვიმებს (შეგიძლია შეცვალო)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/?;:{}[]!@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // თითოეული სვეტისთვის ვქმნით წვეთს
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    // ანიმაციის მთავარი ფუნქცია
    function drawMatrix() {
        // ეს ქმნის "კუდის" ეფექტს - ოდნავ გამჭვირვალე შავი ფონი ედება წინა კადრს
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ტექსტის ფერი. თუ მწვანე გინდა, დაწერე '#0F0'
        ctx.fillStyle = '#00f0ff'; 
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            // ვირჩევთ შემთხვევით სიმბოლოს
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            
            // ვხატავთ სიმბოლოს
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // თუ წვეთი ეკრანს გასცდა, ვაბრუნებთ ზემოთ (შემთხვევითი ინტერვალით)
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            // წვეთი ჩამოდის 1 ნაბიჯით ქვევით
            drops[i]++;
        }
    }

    // ვრთავთ ანიმაციას (33 მილიწამში ერთხელ განახლდება)
    setInterval(drawMatrix, 33);

    // ვინახავთ საწყის სიგანეს
    let currentWidth = window.innerWidth;

    // ეკრანის ზომის შეცვლისას (მაგ. ტელეფონის ამოტრიალებისას) ზომების თავიდან კალკულაცია
    window.addEventListener('resize', () => {
        // ვამოწმებთ, რეალურად შეიცვალა თუ არა სიგანე
        if (window.innerWidth !== currentWidth) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            currentWidth = window.innerWidth;
            
            // რადგან სიგანე შეიცვალა, სვეტების რაოდენობაც უნდა განვაახლოთ
            const newColumns = canvas.width / fontSize;
            drops.length = 0; // ვასუფთავებთ ძველ მასივს
            for (let x = 0; x < newColumns; x++) {
                drops[x] = 1;
            }
        }
    });
}