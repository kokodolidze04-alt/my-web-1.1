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

// ==========================================
// Modal Popup Logic
// ==========================================
const planDetails = {
    starter: {
        title: "🚀 Starter Package",
        description: "Perfect for freelancers, personal websites, and small businesses.",
        content: `
            <div class="modal-grid">
                <div class="modal-section">
                    <h3>✨ Feature Breakdown</h3>
                    <div class="feature-list">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Responsive Design</strong>
                                <p><strong>What it means:</strong> The website layout automatically adapts to look perfect on mobile phones, tablets, and desktop screens.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Clean Code</strong>
                                <p><strong>What it means:</strong> Hand-written, optimized HTML/CSS without heavy builders, ensuring high security and blazing-fast loading speeds.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Contact Form</strong>
                                <p><strong>What it means:</strong> A dedicated, secure messaging section that sends client inquiries directly to your personal email inbox.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Fast Delivery</strong>
                                <p><strong>What it means:</strong> A streamlined process ensuring your 1-3 page website is designed, coded, and launched in record time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>⚙️ The Process</h3>
                    <div class="process-steps">
                        <div class="step">
                            <span class="step-num">1</span>
                            <p><strong>Onboarding & Strategy:</strong> We gather your branding assets, texts, and define your main goals.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">2</span>
                            <p><strong>Wireframing:</strong> Creating a clear, conversion-focused layout structure for your pages.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">3</span>
                            <p><strong>Front-End Development:</strong> Writing clean, mobile-optimized HTML/CSS code from scratch.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">4</span>
                            <p><strong>QA & Testing:</strong> Checking form functionality, responsiveness, and cross-browser compatibility.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">5</span>
                            <p><strong>Launch & Handover:</strong> Final deployment to the live server and delivering your fast website.</p>
                        </div>
                    </div>
                </div>

                <div class="modal-cta-box">
                    <h4>Not sure if this is the right fit?</h4>
                    <p>Let's discuss your specific needs and find the perfect solution for your business.</p>
                    <a href="consult.html" class="modal-cta-btn">Get a Free Consultation</a>
                </div>
            </div>
        `
    },
    business: {
        title: "💼 Business Package",
        description: "Perfect for restaurants, growing companies, and agencies.",
        content: `
            <div class="modal-grid">
                <div class="modal-section">
                    <h3>✨ Feature Breakdown</h3>
                    <div class="feature-list">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Everything in Starter</strong>
                                <p><strong>What it means:</strong> Includes responsive design, clean code, contact forms, and fast delivery built-in.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Gallery</strong>
                                <p><strong>What it means:</strong> Beautifully structured image grids or interactive sliders to showcase your products, portfolio, or team.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Dark & Light Themes</strong>
                                <p><strong>What it means:</strong> A modern toggle feature allowing users to switch the site's color scheme to their preference.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Google Maps</strong>
                                <p><strong>What it means:</strong> Interactive location maps integrated directly into your site to help local clients find your physical address.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>SEO Optimization</strong>
                                <p><strong>What it means:</strong> Foundational meta-tags, image alt-texts, and structure so Google can easily index and rank your pages.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>⚙️ The Process</h3>
                    <div class="process-steps">
                        <div class="step">
                            <span class="step-num">1</span>
                            <p><strong>Discovery & Architecture:</strong> Mapping out the user journey and structure for up to 8 pages.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">2</span>
                            <p><strong>UI/UX Design:</strong> Designing interactive elements, light/dark themes, and structured galleries.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">3</span>
                            <p><strong>Development & Integration:</strong> Coding the site and embedding Google Maps & necessary APIs.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">4</span>
                            <p><strong>On-Page SEO Setup:</strong> Structuring meta-tags and optimizing all assets for search engines.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">5</span>
                            <p><strong>Staging & Revisions:</strong> You test the fully functional site on a private link before we finalize.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">6</span>
                            <p><strong>Deployment & Go-Live:</strong> Official launch and final indexing checks.</p>
                        </div>
                    </div>
                </div>

                <div class="modal-cta-box">
                    <h4>Need help deciding?</h4>
                    <p>Every business is unique. Let's schedule a quick chat to figure out exactly what your brand needs.</p>
                    <a href="consult.html" class="modal-cta-btn">Get a Free Consultation</a>
                </div>
            </div>
        `
    },
    premium: {
        title: "👑 Premium Package",
        description: "Perfect for large companies, e-commerce, and complex projects.",
        content: `
            <div class="modal-grid">
                <div class="modal-section">
                    <h3>✨ Feature Breakdown</h3>
                    <div class="feature-list">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>CMS Integration</strong>
                                <p><strong>What it means:</strong> A powerful back-end dashboard allowing you to add unlimited pages, manage blogs, and update content yourself.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Advanced SEO</strong>
                                <p><strong>What it means:</strong> Deep technical optimization and keyword structuring designed to push your site higher in search engine results.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Performance Optimization</strong>
                                <p><strong>What it means:</strong> Advanced image compression and code minification to guarantee top-tier speed scores (90+) on Google.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Documentation</strong>
                                <p><strong>What it means:</strong> You receive a comprehensive, easy-to-understand written guide on how to use and manage your new website.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <div class="feature-text">
                                <strong>Analytics & Priority Support</strong>
                                <p><strong>What it means:</strong> Integration of tracking tools (like Google Analytics) to monitor traffic, plus fast-tracked technical assistance from me.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>⚙️ The Process</h3>
                    <div class="process-steps">
                        <div class="step">
                            <span class="step-num">1</span>
                            <p><strong>Deep Discovery & Tech Stack:</strong> Defining your CMS architecture and complex database needs.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">2</span>
                            <p><strong>Custom UI/UX & Prototyping:</strong> Crafting a premium, unique design system tailored for your scale.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">3</span>
                            <p><strong>Full-Stack Development:</strong> Building the front-end interface and connecting the Headless CMS securely.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">4</span>
                            <p><strong>Advanced Integrations:</strong> Setting up Google Analytics, tracking pixels, and advanced on-page SEO.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">5</span>
                            <p><strong>Rigorous QA & Performance:</strong> Aggressive optimization to guarantee a 90+ score on Core Web Vitals.</p>
                        </div>
                        <div class="step">
                            <span class="step-num">6</span>
                            <p><strong>Training & Handover:</strong> Final launch, priority support setup, and providing custom documentation.</p>
                        </div>
                    </div>
                </div>

                <div class="modal-cta-box">
                    <h4>Ready to scale your business?</h4>
                    <p>Let's map out a custom digital strategy tailored precisely to your long-term goals.</p>
                    <a href="consult.html" class="modal-cta-btn">Get a Free Consultation</a>
                </div>
            </div>
        `
    }
};

const detailsButtons = document.querySelectorAll('.details-btn[data-plan]');
const modalOverlay = document.getElementById('details-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalBodyContent = document.getElementById('modal-body-content');

if (modalOverlay && detailsButtons.length > 0) {
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planType = button.getAttribute('data-plan');
            
            if (planType && planDetails[planType]) {
                const data = planDetails[planType];
                
                modalBodyContent.innerHTML = `
                    <h2>${data.title}</h2>
                    <p><strong>${data.description}</strong></p>
                    <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
                    ${data.content}
                    <a href="cont.html" class="primary-btn" style="display: inline-block; margin-top: 20px; text-decoration: none;">Book This Package</a>
                `;
                
                modalOverlay.classList.remove('hidden');
                
                if (window.lucide) {
                    lucide.createIcons();
                }
            }
        });
    });

    const closeModal = () => {
        modalOverlay.classList.add('hidden');
    };

    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

/* ==========================================================================
   Mailto: საკონტაქტო ფორმის გაგზავნა
   ========================================================================== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // აჩერებს გვერდის დარეფრეშებას

        // ვიღებთ მომხმარებლის მიერ შევსებულ მონაცემებს
        const name = document.getElementById('user_name').value;
        const email = document.getElementById('user_email').value;
        const message = document.getElementById('message').value;

        // აქ აუცილებლად ჩაწერე შენი რეალური მეილი!
        const myEmail = "შენი.მეილი@gmail.com"; 
        
        // ვაწყობთ მეილის სათაურს და შიგთავსს (ტექსტს)
        const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        // ვხსნით მომხმარებლის მეილის აპლიკაციას გამზადებული ტექსტით
        window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
        
        // ფორმის გასუფთავება გაგზავნის შემდეგ (სურვილისამებრ)
        contactForm.reset(); 
    });
}