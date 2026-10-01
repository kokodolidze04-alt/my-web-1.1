// ==========================================
// LANGUAGE STATE
// ==========================================

let currentLang =
    localStorage.getItem("kokos-lang") || "en";

if (currentLang !== "en" && currentLang !== "ka") {
    currentLang = "en";
}


// ==========================================
// DOM READY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Lucide Icons-ის ინიციალიზაცია
    if (window.lucide) {
        lucide.createIcons();
    }


    // CTA Button
    const ctaButton =
        document.getElementById("cta-btn");

    if (ctaButton) {

        ctaButton.addEventListener(
            "click",
            () => {

                alert(
                    "მალე დავამატებთ სერვისების განყოფილებას!"
                );

            }
        );

    }


    // Navbar Scroll Effect
    const navbar =
        document.querySelector(".navbar");

    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;

            if (window.scrollY > 50) {

                navbar.style.background =
                    "rgba(255, 255, 255, 0)";

                navbar.style.backdropFilter =
                    "blur(20px)";

                navbar.style.webkitBackdropFilter =
                    "blur(20px)";

            } else {

                navbar.style.background =
                    "rgba(255, 255, 255, 0)";

                navbar.style.backdropFilter =
                    "blur(10px)";

                navbar.style.webkitBackdropFilter =
                    "blur(10px)";

            }

        }
    );


    // Pricing Accordion Logic
    // მობილურისთვის
    const toggleHeaders =
        document.querySelectorAll(
            ".toggle-header"
        );

    toggleHeaders.forEach(
        header => {

            header.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth <= 768
                    ) {

                        const card =
                            header.closest(
                                ".pricing-card"
                            );

                        document
                            .querySelectorAll(
                                ".pricing-card"
                            )
                            .forEach(
                                c => {

                                    if (c !== card) {

                                        c.classList.remove(
                                            "active"
                                        );

                                    }

                                }
                            );

                        if (card) {

                            card.classList.toggle(
                                "active"
                            );

                        }

                    }

                }
            );

        }
    );


    // ==========================================
    // LANGUAGE INITIALIZATION
    // ==========================================

    updateLanguage(currentLang);


    // ==========================================
    // LANGUAGE TOGGLE
    // ==========================================

    const langBtn =
        document.getElementById(
            "lang-toggle"
        );

    if (langBtn) {

        langBtn.addEventListener(
            "click",
            () => {

                currentLang =
                    currentLang === "en"
                        ? "ka"
                        : "en";

                updateLanguage(
                    currentLang
                );

            }
        );

    }

});


// ==========================================
// MATRIX BACKGROUND
// Code Rain
// ==========================================

const canvas =
    document.getElementById(
        "matrix-canvas"
    );


if (canvas) {

    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/?;:{}[]!@#$%^&*()";


    const fontSize = 14;


    const columns =
        canvas.width / fontSize;


    const drops = [];


    for (
        let x = 0;
        x < columns;
        x++
    ) {

        drops[x] = 1;

    }


    function drawMatrix() {

        ctx.fillStyle =
            "rgba(0, 0, 0, 0.05)";


        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.fillStyle =
            "#00f0ff";


        ctx.font =
            fontSize +
            "px monospace";


        for (
            let i = 0;
            i < drops.length;
            i++
        ) {

            const text =
                letters.charAt(
                    Math.floor(
                        Math.random() *
                        letters.length
                    )
                );


            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );


            if (
                drops[i] * fontSize >
                    canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }


            drops[i]++;

        }

    }


    setInterval(
        drawMatrix,
        33
    );


    let currentWidth =
        window.innerWidth;


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth !==
                currentWidth
            ) {

                canvas.width =
                    window.innerWidth;

                canvas.height =
                    window.innerHeight;

                currentWidth =
                    window.innerWidth;


                const newColumns =
                    canvas.width /
                    fontSize;


                drops.length = 0;


                for (
                    let x = 0;
                    x < newColumns;
                    x++
                ) {

                    drops[x] = 1;

                }

            }

        }
    );

}


// ==========================================
// MODAL POPUP LOGIC
// ==========================================

function getPlanDetails(lang) {

    const isKa =
        lang === "ka";


    return {

        starter: {

            title:
                isKa
                    ? "🚀 Starter პაკეტი"
                    : "🚀 Starter Package",

            description:
                isKa
                    ? "იდეალურია ფრილანსერებისთვის, პირადი საიტებისთვის და მცირე ბიზნესისთვის."
                    : "Perfect for freelancers, personal websites, and small businesses.",

            btn_book:
                isKa
                    ? "ამ პაკეტის დაჯავშნა"
                    : "Book This Package",

            content: `

                <div class="modal-grid">

                    <div class="modal-section">

                        <h3>
                            ✨ ${
                                isKa
                                    ? "ფუნქციების ჩამონათვალი"
                                    : "Feature Breakdown"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>


                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ადაპტირებადი დიზაინი"
                                                : "Responsive Design"
                                        }
                                    </strong>


                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "საიტის დიზაინი ავტომატურად ერგება ტელეფონების, ტაბლეტებისა და კომპიუტერების ეკრანებს."
                                                : "The website layout automatically adapts to look perfect on mobile phones, tablets, and desktop screens."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>


                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "სუფთა კოდი"
                                                : "Clean Code"
                                        }
                                    </strong>


                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "ხელით დაწერილი HTML/CSS მძიმე ბილდერების გარეშე, რაც უზრუნველყოფს მაღალ უსაფრთხოებასა და სწრაფ ჩატვირთვას."
                                                : "Hand-written, optimized HTML/CSS without heavy builders, ensuring high security and blazing-fast loading speeds."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>


                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "საკონტაქტო ფორმა"
                                                : "Contact Form"
                                        }
                                    </strong>


                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მარტივი და ფუნქციური ფორმა, რომლის საშუალებითაც ვიზიტორებს შეუძლიათ პირდაპირ დაგიკავშირდნენ."
                                                : "A simple and functional form that allows visitors to contact you directly."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>


                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "სწრაფი ჩაბარება"
                                                : "Fast Delivery"
                                        }
                                    </strong>


                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "პროექტზე მუშაობა მიმდინარეობს შეთანხმებული ვადების მიხედვით, რათა თქვენი საიტი სწრაფად გაეშვას."
                                                : "The project is developed according to an agreed timeline so your website can go live quickly."
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-section">

                        <h3>
                            🎯 ${
                                isKa
                                    ? "ვისთვის არის"
                                    : "Perfect For"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ფრილანსერები"
                                                : "Freelancers"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "პირადი პორტფოლიოსა და პროფესიული ონლაინ-პრეზენტაციისთვის."
                                                : "For personal portfolios and professional online presence."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "პირადი საიტები"
                                                : "Personal Websites"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მათთვის, ვისაც სურს საკუთარი საქმიანობის, პროექტების ან გამოცდილების წარმოჩენა."
                                                : "For showcasing your work, projects, experience, or personal brand."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "მცირე ბიზნესი"
                                                : "Small Businesses"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მცირე კომპანიებისთვის, რომლებსაც სჭირდებათ პროფესიული ონლაინ-წარმოდგენა."
                                                : "For small businesses that need a professional online presence."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "გჭირდებათ დახმარება არჩევანში?"
                                    : "Need help deciding?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "დავჯავშნოთ მოკლე ზარი და გავარკვიოთ, რა სჭირდება თქვენს ბრენდს."
                                    : "Every business is unique. Let's schedule a quick chat to figure out exactly what your brand needs."
                            }
                        </p>


                        <a
                            href="consult.html"
                            class="modal-cta-btn"
                        >
                            ${
                                isKa
                                    ? "უფასო კონსულტაცია"
                                    : "Get a Free Consultation"
                            }
                        </a>

                    </div>

                </div>

            `

        },


        business: {

            title:
                isKa
                    ? "💼 Business პაკეტი"
                    : "💼 Business Package",

            description:
                isKa
                    ? "იდეალურია რესტორნებისთვის, მზარდი კომპანიებისა და სააგენტოებისთვის."
                    : "Perfect for restaurants, growing companies, and agencies.",

            btn_book:
                isKa
                    ? "ამ პაკეტის დაჯავშნა"
                    : "Book This Package",

            content: `

                <div class="modal-grid">

                    <div class="modal-section">

                        <h3>
                            ✨ ${
                                isKa
                                    ? "ფუნქციების ჩამონათვალი"
                                    : "Feature Breakdown"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ყველაფერი Starter-იდან"
                                                : "Everything in Starter"
                                        }
                                    </strong>

                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მოიცავს ადაპტირებად დიზაინს, სუფთა კოდს, საკონტაქტო ფორმასა და სწრაფ ჩაბარებას."
                                                : "Includes responsive design, clean code, contact forms, and fast delivery built-in."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "გალერეა"
                                                : "Gallery"
                                        }
                                    </strong>

                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "დახვეწილი ფოტო სლაიდერი ან ბადე თქვენი პროდუქტებისა და პორტფოლიოს გამოსაჩენად."
                                                : "Beautifully structured image grids or interactive sliders to showcase your products, portfolio, or team."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "მუქი და განათებული თემები"
                                                : "Dark & Light Themes"
                                        }
                                    </strong>

                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მომხმარებელს შეუძლია გადართოს საიტის დიზაინი სურვილისამებრ."
                                                : "A modern toggle feature allowing users to switch the site's color scheme to their preference."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        Google Maps
                                    </strong>

                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "ინტერაქტიული რუკა, რათა კლიენტებმა მარტივად მიგაგნონ."
                                                : "Interactive location maps integrated directly into your site to help local clients find your physical address."
                                        }

                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "SEO ოპტიმიზაცია"
                                                : "SEO Optimization"
                                        }
                                    </strong>

                                    <p>

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "საიტის სტრუქტურისა და კონტენტის ოპტიმიზაცია საძიებო სისტემებისთვის."
                                                : "Optimization of your website structure and content for better search engine visibility."
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-section">

                        <h3>
                            🎯 ${
                                isKa
                                    ? "ვისთვის არის"
                                    : "Perfect For"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "რესტორნები"
                                                : "Restaurants"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "რესტორნებისთვის, კაფეებისთვის და კვების ობიექტებისთვის."
                                                : "For restaurants, cafes, and food businesses."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "კომპანიები"
                                                : "Companies"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "კომპანიებისთვის, რომლებსაც სჭირდებათ პროფესიული და მრავალგვერდიანი საიტი."
                                                : "For companies that need a professional multi-page website."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "სააგენტოები"
                                                : "Agencies"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "სააგენტოებისთვის, რომლებსაც სჭირდებათ ძლიერი ონლაინ-წარმოდგენა."
                                                : "For agencies that need a strong and professional online presence."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "გსურთ ბიზნესის გაძლიერება ონლაინ?"
                                    : "Ready to grow your business online?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "მოდით განვიხილოთ თქვენი მიზნები და შევქმნათ საიტი, რომელიც თქვენს ბიზნესს რეალურად მოემსახურება."
                                    : "Let's discuss your goals and create a website that truly serves your business."
                            }
                        </p>


                        <a
                            href="consult.html"
                            class="modal-cta-btn"
                        >
                            ${
                                isKa
                                    ? "უფასო კონსულტაცია"
                                    : "Get a Free Consultation"
                            }
                        </a>

                    </div>

                </div>

            `

        },


        premium: {

            title:
                isKa
                    ? "👑 Premium პაკეტი"
                    : "👑 Premium Package",

            description:
                isKa
                    ? "მძლავრი გადაწყვეტა დიდი კომპანიებისა და ონლაინ ბიზნესებისთვის."
                    : "A powerful solution for larger companies and online businesses.",

            btn_book:
                isKa
                    ? "ამ პაკეტის დაჯავშნა"
                    : "Book This Package",

            content: `

                <div class="modal-grid">

                    <div class="modal-section">

                        <h3>
                            ✨ ${
                                isKa
                                    ? "ფუნქციების ჩამონათვალი"
                                    : "Feature Breakdown"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ყველაფერი Business-იდან"
                                                : "Everything in Business"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მოიცავს Business პაკეტის ყველა ძირითად ფუნქციას."
                                                : "Includes all core features from the Business package."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "CMS ინტეგრაცია"
                                                : "CMS Integration"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "კონტენტის მარტივად მართვის სისტემა."
                                                : "A content management system for easy content updates."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "გაფართოებული SEO"
                                                : "Advanced SEO"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "გაფართოებული ტექნიკური და კონტენტ SEO."
                                                : "Advanced technical and content-focused SEO."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "წარმადობის ოპტიმიზაცია"
                                                : "Performance Optimization"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "საიტის სიჩქარისა და წარმადობის ოპტიმიზაცია."
                                                : "Optimization focused on website speed and performance."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "დოკუმენტაცია"
                                                : "Documentation"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "პროექტის ძირითადი ტექნიკური დოკუმენტაცია."
                                                : "Core technical documentation for the project."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ანალიტიკა"
                                                : "Analytics"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "ვიზიტორებისა და საიტის მუშაობის ანალიზი."
                                                : "Analytics for visitors and website performance."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-section">

                        <h3>
                            🎯 ${
                                isKa
                                    ? "ვისთვის არის"
                                    : "Perfect For"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "დიდი კომპანიები"
                                                : "Large Companies"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "დიდი და კომპლექსური ონლაინ-წარმოდგენისთვის."
                                                : "For larger organizations with complex online needs."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ონლაინ მაღაზიები"
                                                : "E-commerce"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "ონლაინ გაყიდვებისა და პროდუქციის მართვისთვის."
                                                : "For online sales and product-driven businesses."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "მზად ხართ უფრო მასშტაბური პროექტისთვის?"
                                    : "Ready for a larger project?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "მოდით განვიხილოთ თქვენი მოთხოვნები და შევქმნათ შესაბამისი გადაწყვეტა."
                                    : "Let's discuss your requirements and create the right solution."
                            }
                        </p>


                        <a
                            href="consult.html"
                            class="modal-cta-btn"
                        >
                            ${
                                isKa
                                    ? "უფასო კონსულტაცია"
                                    : "Get a Free Consultation"
                            }
                        </a>

                    </div>

                </div>

            `

        },


        custom: {

            title:
                isKa
                    ? "🛠️ Custom პაკეტი"
                    : "🛠️ Custom Package",

            description:
                isKa
                    ? "სრულიად ინდივიდუალური გადაწყვეტა თქვენი იდეისთვის."
                    : "A completely custom solution built around your idea.",

            btn_book:
                isKa
                    ? "პროექტის განხილვა"
                    : "Discuss Project",

            content: `

                <div class="modal-grid">

                    <div class="modal-section">

                        <h3>
                            ✨ ${
                                isKa
                                    ? "რას ვქმნით"
                                    : "What We Build"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "Figma დიზაინი"
                                                : "Figma Design"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "თქვენს იდეაზე მორგებული ინდივიდუალური ვიზუალური დიზაინი."
                                                : "A custom visual design built specifically around your idea."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ინდივიდუალური ფუნქციონალი"
                                                : "Custom Features"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "სპეციფიკური ფუნქციები, რომლებიც სტანდარტულ პაკეტებში არ შედის."
                                                : "Custom functionality beyond standard packages."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "პერსონალიზებული UI/UX"
                                                : "Custom UI/UX"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მომხმარებლის გამოცდილებაზე სრულად მორგებული ინტერფეისი."
                                                : "An interface designed around the intended user experience."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "რთული ინტეგრაციები"
                                                : "Complex Integrations"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "გარე API-ებთან და სერვისებთან ინდივიდუალური ინტეგრაციები."
                                                : "Custom integrations with external APIs and services."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ყველაფერი Premium-იდან"
                                                : "Everything in Premium"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "Premium პაკეტის ყველა ძირითადი შესაძლებლობა."
                                                : "All core capabilities included in Premium."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-section">

                        <h3>
                            🎯 ${
                                isKa
                                    ? "ვისთვის არის"
                                    : "Perfect For"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "სტარტაპები"
                                                : "Startups"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "ახალი პროდუქტებისა და ციფრული იდეებისთვის."
                                                : "For new products and digital ideas."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "უნიკალური პროექტები"
                                                : "Unique Projects"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "პროექტებისთვის, რომლებიც სტანდარტულ ჩარჩოებში ვერ თავსდება."
                                                : "For projects that do not fit standard packages."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "თქვენი დიზაინები"
                                                : "Your Designs"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "თუ უკვე გაქვთ საკუთარი დიზაინი ან კონცეფცია."
                                                : "For clients who already have their own design or concept."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "გაქვთ განსხვავებული იდეა?"
                                    : "Have a different idea?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "მომწერეთ თქვენი იდეა და ერთად განვიხილოთ მისი განხორციელება."
                                    : "Tell me about your idea and let's discuss how to build it."
                            }
                        </p>


                        <a
                            href="consult.html"
                            class="modal-cta-btn"
                        >
                            ${
                                isKa
                                    ? "პროექტის განხილვა"
                                    : "Discuss Project"
                            }
                        </a>

                    </div>

                </div>

            `

        },


        ecommerce: {

            title:
                isKa
                    ? "🛒 E-commerce პაკეტი"
                    : "🛒 E-commerce Package",

            description:
                isKa
                    ? "სრული ონლაინ მაღაზია პროდუქციის გაყიდვისთვის."
                    : "A complete online store built for selling products.",

            btn_book:
                isKa
                    ? "მაღაზიის განხილვა"
                    : "Discuss Store",

            content: `

                <div class="modal-grid">

                    <div class="modal-section">

                        <h3>
                            ✨ ${
                                isKa
                                    ? "ფუნქციების ჩამონათვალი"
                                    : "Feature Breakdown"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "პროდუქტების კატალოგი"
                                                : "Product Catalog"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "პროდუქტების ორგანიზებული კატალოგი."
                                                : "A structured product catalog."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "სავაჭრო კალათა"
                                                : "Shopping Cart"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მომხმარებლებს შეუძლიათ პროდუქტების კალათაში დამატება."
                                                : "Customers can add products to a shopping cart."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "შეკვეთის გაფორმება"
                                                : "Checkout System"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მარტივი და ფუნქციური შეკვეთის პროცესი."
                                                : "A streamlined checkout experience."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "გადახდის ინტეგრაცია"
                                                : "Payment Integration"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "საჭირო გადახდის სისტემებთან ინტეგრაცია."
                                                : "Integration with required payment systems."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "შეკვეთების მართვა"
                                                : "Order Management"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "შეკვეთების მართვის ფუნქციონალი."
                                                : "Tools for managing customer orders."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "მობილურზე ოპტიმიზებული მაღაზია"
                                                : "Mobile-Optimized Store"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "მაღაზია სრულად მორგებულია მობილურ მოწყობილობებზე."
                                                : "A store optimized for mobile devices."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ადმინ პანელი"
                                                : "Admin Panel"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "პროდუქტებისა და შეკვეთების მართვის ადმინისტრაციული სივრცე."
                                                : "An administrative interface for managing products and orders."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-section">

                        <h3>
                            🎯 ${
                                isKa
                                    ? "ვისთვის არის"
                                    : "Perfect For"
                            }
                        </h3>


                        <div class="feature-list">

                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "ონლაინ მაღაზიები"
                                                : "Online Shops"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "ბიზნესებისთვის, რომლებიც ონლაინ ყიდიან პროდუქტებს."
                                                : "For businesses selling products online."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "პროდუქტის ბრენდები"
                                                : "Product Brands"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "ბრენდებისთვის, რომლებსაც სჭირდებათ საკუთარი ონლაინ მაღაზია."
                                                : "For product brands that need their own online store."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="feature-item">

                                <span class="feature-icon">
                                    ✓
                                </span>

                                <div class="feature-text">

                                    <strong>
                                        ${
                                            isKa
                                                ? "საცალო ბიზნესი"
                                                : "Retail Businesses"
                                        }
                                    </strong>

                                    <p>
                                        ${
                                            isKa
                                                ? "საცალო ბიზნესებისთვის, რომლებიც ონლაინ გაყიდვებზე გადადიან."
                                                : "For retail businesses expanding into online sales."
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "გსურთ ონლაინ მაღაზიის შექმნა?"
                                    : "Ready to build your online store?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "მოდით განვიხილოთ თქვენი პროდუქცია და მაღაზიის საჭიროებები."
                                    : "Let's discuss your products and store requirements."
                            }
                        </p>


                        <a
                            href="consult.html"
                            class="modal-cta-btn"
                        >
                            ${
                                isKa
                                    ? "უფასო კონსულტაცია"
                                    : "Get a Free Consultation"
                            }
                        </a>

                    </div>

                </div>

            `

        }

    };

}


// ==========================================
// MODAL ELEMENTS
// ==========================================

const modalOverlay =
    document.getElementById(
        "plan-modal"
    );

const modalTitle =
    document.getElementById(
        "modal-title"
    );

const modalDescription =
    document.getElementById(
        "modal-description"
    );

const modalContent =
    document.getElementById(
        "modal-content"
    );

const modalBookButton =
    document.getElementById(
        "modal-book-button"
    );

let activeModalPlan =
    null;


// ==========================================
// RENDER MODAL
// ==========================================

function renderModalContent(plan) {

    if (!modalOverlay) {
        return;
    }


    const details =
        getPlanDetails(
            currentLang
        );


    if (
        !details ||
        !details[plan]
    ) {
        return;
    }


    const selected =
        details[plan];


    activeModalPlan =
        plan;


    if (modalTitle) {

        modalTitle.textContent =
            selected.title;

    }


    if (modalDescription) {

        modalDescription.textContent =
            selected.description;

    }


    if (modalContent) {

        modalContent.innerHTML =
            selected.content;

    }


    if (modalBookButton) {

        modalBookButton.textContent =
            selected.btn_book;

    }


    if (
        window.lucide
    ) {

        lucide.createIcons();

    }

}


// ==========================================
// OPEN MODAL
// ==========================================

function openPlanModal(plan) {

    if (!modalOverlay) {
        return;
    }


    renderModalContent(
        plan
    );


    modalOverlay.classList.remove(
        "hidden"
    );


    document.body.classList.add(
        "modal-open"
    );

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closePlanModal() {

    if (!modalOverlay) {
        return;
    }


    modalOverlay.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "modal-open"
    );


    activeModalPlan =
        null;

}


// ==========================================
// PRICING CARD BUTTONS
// ==========================================

document
    .querySelectorAll(
        "[data-plan]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const plan =
                        button.getAttribute(
                            "data-plan"
                        );

                    if (plan) {

                        openPlanModal(
                            plan
                        );

                    }

                }
            );

        }
    );


// ==========================================
// MODAL CLOSE EVENTS
// ==========================================

const modalClose =
    document.getElementById(
        "modal-close"
    );


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closePlanModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modalOverlay
            ) {

                closePlanModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePlanModal();

        }

    }
);


// ==========================================
// TRANSLATION SYSTEM
// ==========================================

const translations = {

    // ==========================================
    // ENGLISH
    // ==========================================

    en: {

        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_work: "Approach",
        nav_contact: "Contact",

        // General
        btn_back: "Back",
        btn_get_consultation:
            "GET A FREE CONSULTATION",
        btn_view_details:
            "View Details",
        btn_lets_talk:
            "Let's Talk",

        // Pricing
        pricing_title:
            "Choose the Right Package",

        pricing_subtitle:
            "Every website is built with performance, responsiveness, and clean design in mind.",

        plan_starter_title:
            "🚀 Starter",

        plan_starter_pages:
            "1–3 Pages",

        plan_business_title:
            "💼 Business",

        plan_business_pages:
            "4–8 Pages",

        plan_premium_title:
            "👑 Premium",

        plan_premium_pages:
            "Unlimited Pages",

        plan_custom_title:
            "🛠️ Custom",

        plan_custom_sub:
            "Tailored to Your Needs",

        plan_ecommerce_title:
            "🛒 E-commerce",

        plan_ecommerce_sub:
            "Complete Online Store",

        lbl_included:
            "Included",

        lbl_perfect_for:
            "Perfect For",

        lbl_starting_from:
            "Starting From",

        lbl_price_based_on:
            "Price Based On",

        val_project_scope:
            "Project Scope",

        badge_popular:
            "Most Popular",

        badge_most_popular:
            "Most Popular",

        // Starter
        feat_responsive:
            "Responsive Design",

        feat_clean_code:
            "Clean Code",

        feat_contact_form:
            "Contact Form",

        feat_fast_delivery:
            "Fast Delivery",

        target_freelancers:
            "Freelancers",

        target_personal:
            "Personal Websites",

        target_small_biz:
            "Small Businesses",

        // Business
        feat_everything_starter:
            "Everything in Starter",

        feat_gallery:
            "Gallery",

        feat_themes:
            "Dark & Light Themes",

        feat_maps:
            "Google Maps",

        feat_seo:
            "SEO Optimization",

        target_restaurants:
            "Restaurants",

        target_companies:
            "Companies",

        target_agencies:
            "Agencies",

        // Premium
        feat_everything_business:
            "Everything in Business",

        feat_cms:
            "CMS Integration",

        feat_adv_seo:
            "Advanced SEO",

        feat_perf_opt:
            "Performance Optimization",

        feat_docs:
            "Documentation",

        feat_analytics:
            "Analytics",

        target_large_companies:
            "Large Companies",

        target_ecommerce:
            "E-commerce",

        // Custom
        feat_figma:
            "Figma Design",

        feat_custom_features:
            "Custom Features",

        feat_custom_uiux:
            "Custom UI/UX",

        feat_complex_int:
            "Complex Integrations",

        feat_everything_premium:
            "Everything in Premium",

        target_startups:
            "Startups",

        target_unique_proj:
            "Unique Projects",

        target_your_designs:
            "Your Designs",

        // E-commerce
        feat_ecommerce_catalog:
            "Product Catalog",

        feat_ecommerce_cart:
            "Shopping Cart",

        feat_ecommerce_checkout:
            "Checkout System",

        feat_ecommerce_payment:
            "Payment Integration",

        feat_ecommerce_orders:
            "Order Management",

        feat_ecommerce_mobile:
            "Mobile-Optimized Store",

        feat_ecommerce_admin:
            "Admin Panel",

        target_online_shops:
            "Online Shops",

        target_product_brands:
            "Product Brands",

        target_retail_businesses:
            "Retail Businesses",


        // ==========================================
        // ABOUT
        // ==========================================

        about_eyebrow:
            "KOKOS-LAB · ABOUT",

        about_hero_title:
            "Building across disciplines.",

        about_hero_desc:
            "I explore the intersection of artificial intelligence, software, 3D graphics, neuroscience, and creative technology.",

        about_meta_name_label:
            "NAME",

        about_meta_focus_label:
            "CURRENT FOCUS",

        about_meta_focus:
            "AI · Software · 3D",

        about_intro_kicker:
            "ABOUT ME",

        about_intro_title:
            "A multidisciplinary approach to technology.",

        about_intro_desc:
            "My interests span technology, psychology, artificial intelligence, visual computing, and creative development.",

        about_intro_text_1:
            "I am Tornike Dolidze, a 22-year-old developer and creative technologist working across several different fields of technology and research.",

        about_intro_text_2:
            "My academic background and technical interests have led me toward projects that combine software, artificial intelligence, visual technologies, and human cognition.",

        about_intro_side:
            "Curious by nature. Building by choice.",


        // ==========================================
        // EDUCATION
        // ==========================================

        about_education_kicker:
            "EDUCATION",

        about_education_title:
            "The academic path behind the work.",

        about_education_desc:
            "A combination of social sciences, psychology, and emerging technology.",

        education_1_label:
            "BACHELOR'S DEGREE",

        education_1_title:
            "International Relations",

        education_1_desc:
            "Academic background in international relations and global affairs.",

        education_2_label:
            "DOCTORATE",

        education_2_title:
            "Psychology",

        education_2_desc:
            "Academic work focused on psychology, human behavior, and cognition.",

        education_3_label:
            "CURRENT PROGRAM",

        education_3_title:
            "Neuroengineering",

        education_3_desc:
            "Currently studying the intersection of neuroscience and engineering.",


        // ==========================================
        // CERTIFICATION
        // ==========================================

        about_certification_kicker:
            "CERTIFICATION",

        about_certification_title:
            "Visual technology and 3D.",

        certification_label:
            "PROFESSIONAL CERTIFICATE",

        certification_title:
            "3D Graphics",

        certification_desc:
            "Professional certification in 3D graphics and digital visualization.",


        // ==========================================
        // FOCUS
        // ==========================================

        about_focus_kicker:
            "AREAS OF FOCUS",

        about_focus_title:
            "Where curiosity becomes projects.",

        about_focus_desc:
            "The fields I am currently exploring, developing, and combining.",

        focus_ai_title:
            "Artificial Intelligence",

        focus_ai_desc:
            "Building and training local AI systems and experimenting with generative models.",

        focus_software_title:
            "Software Development",

        focus_software_desc:
            "Developing applications, tools, and digital products.",

        focus_3d_title:
            "3D & Visualization",

        focus_3d_desc:
            "Creating 3D assets, environments, visualizations, and digital experiences.",

        focus_games_title:
            "Game Development",

        focus_games_desc:
            "Creating original game concepts, worlds, systems, and experiences.",


        // ==========================================
        // PROJECTS
        // ==========================================

        about_projects_kicker:
            "CURRENT PROJECTS",

        about_projects_title:
            "Ideas currently taking shape.",

        about_projects_desc:
            "Personal projects that are currently being designed, developed, and explored.",

        project_1_status:
            "IN DEVELOPMENT",

        project_2_status:
            "IN DEVELOPMENT",

        project_3_status:
            "IN DEVELOPMENT",

        project_ai_desc:
            "Building and training local artificial intelligence systems.",

        project_papers_desc:
            "A modern document application designed for macOS.",

        project_dreamland_desc:
            "An original game project focused on exploration, world building, and visual storytelling.",


        // ==========================================
        // FUTURE
        // ==========================================

        about_goals_kicker:
            "FUTURE",

        about_goals_title:
            "Building at the edge of disciplines.",

        about_goals_desc:
            "My long-term goal is to explore the relationship between artificial intelligence, neuroscience, software, visual computing, and creative technology.",

        about_goals_label:
            "ALWAYS BUILDING",


        // ==========================================
        // AI & DEVELOPMENT
        // ==========================================

        about_ai_kicker:
            "AI & DEVELOPMENT",

        about_ai_title:
            "Programming with artificial intelligence.",

        about_ai_intro:
            "I see artificial intelligence as a development partner that can accelerate the way software is designed, written, tested, and improved.",

        about_ai_main_label:
            "MY APPROACH",

        about_ai_main_title:
            "AI expands the developer's capabilities.",

        about_ai_main_text:
            "Used thoughtfully, AI can reduce repetitive work, accelerate experimentation, help identify problems, explain unfamiliar code, and make it easier to explore different technical solutions.",

        ai_benefit_1_title:
            "Faster Development",

        ai_benefit_1_desc:
            "AI can accelerate repetitive coding tasks and help turn ideas into working prototypes faster.",

        ai_benefit_2_title:
            "Better Exploration",

        ai_benefit_2_desc:
            "Different approaches, architectures, and solutions can be explored quickly before choosing the right direction.",

        ai_benefit_3_title:
            "Learning & Understanding",

        ai_benefit_3_desc:
            "AI can explain unfamiliar code, technologies, and concepts while supporting continuous learning.",

        ai_benefit_4_title:
            "Code Improvement",

        ai_benefit_4_desc:
            "Existing code can be reviewed, refactored, optimized, and improved with an additional layer of analysis.",

        about_ai_note:
            "AI assists the process — the developer remains responsible for the architecture, decisions, verification, and final result.",


        // ==========================================
        // EXPERIENCE
        // ==========================================

        about_experience_kicker:
            "EXPERIENCE",

        about_experience_title:
            "Turning ideas into working digital products.",

        about_experience_desc:
            "Practical experience working with clients, primarily internationally, on websites and existing digital products.",

        experience_label:
            "FREELANCE / INDEPENDENT WORK",

        experience_title:
            "Web Development & Code Improvement",

        experience_desc:
            "I work with clients, primarily from international markets, to build and improve websites and digital products.",

        experience_desc_2:
            "My work includes developing websites from the ground up, improving existing codebases, refining functionality and structure, fixing issues, and helping clients turn their ideas into functional digital experiences.",

        experience_skill_web:
            "Web Development",

        experience_skill_code:
            "Code Improvement",


        // ==========================================
        // CTA / FOOTER
        // ==========================================

        about_cta_kicker:
            "KOKOS-LAB",

        about_cta_title:
            "Let's build something meaningful.",

        about_cta_desc:
            "Explore the projects or get in touch to start something new.",

        about_cta_button:
            "Back to KOKOS-LAB",

        footer_rights:
            "© 2026 KOKOS-LAB. All rights reserved.",




        // ==========================================
        // ABOUT PAGE
        // ==========================================

        about_eyebrow:
            "KOKOS-LAB · ABOUT",

        about_hero_title:
            "Building across<br><span>disciplines.</span>",

        about_hero_desc:
            "I explore the intersection of artificial intelligence, software, 3D graphics, neuroscience, and creative technology.",

        about_meta_name_label:
            "NAME",

        about_meta_focus_label:
            "CURRENT FOCUS",

        about_meta_focus:
            "AI · Software · 3D",

        about_intro_kicker:
            "ABOUT ME",

        about_intro_title:
            "A multidisciplinary approach to technology.",

        about_intro_desc:
            "My interests span technology, psychology, artificial intelligence, visual computing, and creative development.",

        about_intro_text_1:
            "I am Tornike Dolidze, a 22-year-old developer and creative technologist working across several different fields of technology and research.",

        about_intro_text_2:
            "My academic background and technical interests have led me toward projects that combine software, artificial intelligence, visual technologies, and human cognition.",

        about_intro_side:
            "Curious by nature.<br>Building by choice.",


        // EDUCATION

        about_education_kicker:
            "EDUCATION",

        about_education_title:
            "The academic path behind the work.",

        about_education_desc:
            "A combination of social sciences, psychology, and emerging technology.",

        education_1_label:
            "BACHELOR'S DEGREE",

        education_1_title:
            "International Relations",

        education_1_desc:
            "Academic background in international relations and global affairs.",

        education_2_label:
            "DOCTORATE",

        education_2_title:
            "Psychology",

        education_2_desc:
            "Academic work focused on psychology, human behavior, and cognition.",

        education_3_label:
            "CURRENT PROGRAM",

        education_3_title:
            "Neuroengineering",

        education_3_desc:
            "Currently studying the intersection of neuroscience and engineering.",


        // CERTIFICATION

        about_certification_kicker:
            "CERTIFICATION",

        about_certification_title:
            "Visual technology and 3D.",

        certification_label:
            "PROFESSIONAL CERTIFICATE",

        certification_title:
            "3D Graphics",

        certification_desc:
            "Professional certification in 3D graphics and digital visualization.",


        // AREAS OF FOCUS

        about_focus_kicker:
            "AREAS OF FOCUS",

        about_focus_title:
            "Where curiosity becomes projects.",

        about_focus_desc:
            "The fields I am currently exploring, developing, and combining.",

        focus_ai_title:
            "Artificial Intelligence",

        focus_ai_desc:
            "Building and training local AI systems and experimenting with generative models.",

        focus_software_title:
            "Software Development",

        focus_software_desc:
            "Developing applications, tools, and digital products.",

        focus_3d_title:
            "3D & Visualization",

        focus_3d_desc:
            "Creating 3D assets, environments, visualizations, and digital experiences.",

        focus_games_title:
            "Game Development",

        focus_games_desc:
            "Creating original game concepts, worlds, systems, and experiences.",


        // CURRENT PROJECTS

        about_projects_kicker:
            "CURRENT PROJECTS",

        about_projects_title:
            "Ideas currently taking shape.",

        about_projects_desc:
            "Personal projects that are currently being designed, developed, and explored.",

        project_1_status:
            "IN DEVELOPMENT",

        project_ai_title:
            "Local AI",

        project_ai_desc:
            "Building and training local artificial intelligence systems.",

        project_2_status:
            "IN DEVELOPMENT",

        project_papers_title:
            "PAPERS",

        project_papers_desc:
            "A modern document application designed for macOS.",

        project_3_status:
            "IN DEVELOPMENT",

        project_dreamland_title:
            "DREAMLAND",

        project_dreamland_desc:
            "An original game project focused on exploration, world building, and visual storytelling.",


        // FUTURE / GOALS

        about_goals_kicker:
            "FUTURE",

        about_goals_title:
            "Building at the edge of disciplines.",

        about_goals_desc:
            "My long-term goal is to explore the relationship between artificial intelligence, neuroscience, software, visual computing, and creative technology.",

        about_goals_label:
            "ALWAYS BUILDING",


        // AI & DEVELOPMENT

        about_ai_kicker:
            "AI & DEVELOPMENT",

        about_ai_title:
            "Programming with artificial intelligence.",

        about_ai_intro:
            "I see artificial intelligence as a development partner that can accelerate the way software is designed, written, tested, and improved.",

        about_ai_main_label:
            "MY APPROACH",

        about_ai_main_title:
            "AI expands the developer's capabilities.",

        about_ai_main_text:
            "Used thoughtfully, AI can reduce repetitive work, accelerate experimentation, help identify problems, explain unfamiliar code, and make it easier to explore different technical solutions.",

        ai_benefit_1_title:
            "Faster Development",

        ai_benefit_1_desc:
            "AI can accelerate repetitive coding tasks and help turn ideas into working prototypes faster.",

        ai_benefit_2_title:
            "Better Exploration",

        ai_benefit_2_desc:
            "Different approaches, architectures, and solutions can be explored quickly before choosing the right direction.",

        ai_benefit_3_title:
            "Learning & Understanding",

        ai_benefit_3_desc:
            "AI can explain unfamiliar code, technologies, and concepts while supporting continuous learning.",

        ai_benefit_4_title:
            "Code Improvement",

        ai_benefit_4_desc:
            "Existing code can be reviewed, refactored, optimized, and improved with an additional layer of analysis.",

        about_ai_note:
            "AI assists the process — the developer remains responsible for the architecture, decisions, verification, and final result.",


        // EXPERIENCE

        about_experience_kicker:
            "EXPERIENCE",

        about_experience_title:
            "Turning ideas into working digital products.",

        about_experience_desc:
            "Practical experience working with clients, primarily internationally, on websites and existing digital products.",

        experience_label:
            "FREELANCE / INDEPENDENT WORK",

        experience_title:
            "Web Development & Code Improvement",

        experience_desc:
            "I work with clients, primarily from international markets, to build and improve websites and digital products.",

        experience_desc_2:
            "My work includes developing websites from the ground up, improving existing codebases, refining functionality and structure, fixing issues, and helping clients turn their ideas into functional digital experiences.",

        experience_skill_web:
            "Web Development",

        experience_skill_improvement:
            "Code Improvement",


        // FINAL CTA

        about_cta_kicker:
            "KOKOS-LAB",

        about_cta_title:
            "Let's build something meaningful.",

        about_cta_desc:
            "Explore the projects or get in touch to start something new.",

        about_cta_button:
            "Back to KOKOS-LAB",


            



    },


    // ==========================================
    // GEORGIAN
    // ==========================================

    ka: {

        // Navigation
        nav_home:
            "მთავარი",

        nav_about:
            "ჩემ შესახებ",

        nav_services:
            "სერვისები",

        nav_work:
            "მიდგომა",

        nav_contact:
            "კონტაქტი",

        // General
        btn_back:
            "უკან",

        btn_get_consultation:
            "უფასო კონსულტაცია",

        btn_view_details:
            "დეტალურად",

        btn_lets_talk:
            "დავიწყოთ",

        // Pricing
        pricing_title:
            "აირჩიეთ თქვენთვის შესაფერისი პაკეტი",

        pricing_subtitle:
            "ყველა ვებსაიტი იქმნება წარმადობის, ადაპტირებადობისა და სუფთა დიზაინის გათვალისწინებით.",

        plan_starter_title:
            "🚀 Starter",

        plan_starter_pages:
            "1–3 გვერდი",

        plan_business_title:
            "💼 Business",

        plan_business_pages:
            "4–8 გვერდი",

        plan_premium_title:
            "👑 Premium",

        plan_premium_pages:
            "ულიმიტო გვერდები",

        plan_custom_title:
            "🛠️ Custom",

        plan_custom_sub:
            "თქვენს საჭიროებებზე მორგებული",

        plan_ecommerce_title:
            "🛒 E-commerce",

        plan_ecommerce_sub:
            "სრული ონლაინ მაღაზია",

        lbl_included:
            "პაკეტში შედის",

        lbl_perfect_for:
            "იდეალურია",

        lbl_starting_from:
            "ფასი იწყება",

        lbl_price_based_on:
            "ფასი დამოკიდებულია",

        val_project_scope:
            "პროექტის მოცულობაზე",

        badge_popular:
            "ყველაზე პოპულარული",

        badge_most_popular:
            "ყველაზე მოთხოვნადი",

        // Starter
        feat_responsive:
            "ადაპტირებადი დიზაინი",

        feat_clean_code:
            "სუფთა კოდი",

        feat_contact_form:
            "საკონტაქტო ფორმა",

        feat_fast_delivery:
            "სწრაფი ჩაბარება",

        target_freelancers:
            "ფრილანსერებისთვის",

        target_personal:
            "პირადი საიტებისთვის",

        target_small_biz:
            "მცირე ბიზნესისთვის",

        // Business
        feat_everything_starter:
            "ყველაფერი Starter-იდან",

        feat_gallery:
            "ფოტო/ვიდეო გალერეა",

        feat_themes:
            "მუქი და ნათელი თემები",

        feat_maps:
            "Google Maps ინტეგრაცია",

        feat_seo:
            "SEO ოპტიმიზაცია",

        target_restaurants:
            "რესტორნებისთვის",

        target_companies:
            "კომპანიებისთვის",

        target_agencies:
            "სააგენტოებისთვის",

        // Premium
        feat_everything_business:
            "ყველაფერი Business-იდან",

        feat_cms:
            "CMS ინტეგრაცია",

        feat_adv_seo:
            "გაფართოებული SEO",

        feat_perf_opt:
            "წარმადობის ოპტიმიზაცია",

        feat_docs:
            "დოკუმენტაცია",

        feat_analytics:
            "ანალიტიკა",

        target_large_companies:
            "დიდი კომპანიებისთვის",

        target_ecommerce:
            "ონლაინ მაღაზიებისთვის",

        // Custom
        feat_figma:
            "Figma დიზაინი",

        feat_custom_features:
            "ინდივიდუალური ფუნქციონალი",

        feat_custom_uiux:
            "პერსონალიზებული UI/UX",

        feat_complex_int:
            "რთული ინტეგრაციები",

        feat_everything_premium:
            "ყველაფერი Premium-იდან",

        target_startups:
            "სტარტაპებისთვის",

        target_unique_proj:
            "უნიკალური პროექტებისთვის",

        target_your_designs:
            "თქვენი დიზაინებისთვის",

        // E-commerce
        feat_ecommerce_catalog:
            "პროდუქტების კატალოგი",

        feat_ecommerce_cart:
            "სავაჭრო კალათა",

        feat_ecommerce_checkout:
            "შეკვეთის გაფორმება",

        feat_ecommerce_payment:
            "გადახდის ინტეგრაცია",

        feat_ecommerce_orders:
            "შეკვეთების მართვა",

        feat_ecommerce_mobile:
            "მობილურზე ოპტიმიზებული მაღაზია",

        feat_ecommerce_admin:
            "ადმინ პანელი",

        target_online_shops:
            "ონლაინ მაღაზიებისთვის",

        target_product_brands:
            "პროდუქტის ბრენდებისთვის",

        target_retail_businesses:
            "საცალო ბიზნესებისთვის",


        // ==========================================
        // ABOUT
        // ==========================================

        about_eyebrow:
            "KOKOS-LAB · ჩემ შესახებ",

        about_hero_title:
            "ვქმნი სხვადასხვა დისციპლინის გადაკვეთაზე.",

        about_hero_desc:
            "ვიკვლევ ხელოვნური ინტელექტის, პროგრამული უზრუნველყოფის, 3D გრაფიკის, ნეირომეცნიერებისა და კრეატიული ტექნოლოგიების გადაკვეთას.",

        about_meta_name_label:
            "სახელი",

        about_meta_focus_label:
            "მიმდინარე ფოკუსი",

        about_meta_focus:
            "AI · Software · 3D",

        about_intro_kicker:
            "ჩემ შესახებ",

        about_intro_title:
            "ტექნოლოგიებისადმი მრავალდისციპლინური მიდგომა.",

        about_intro_desc:
            "ჩემი ინტერესები მოიცავს ტექნოლოგიებს, ფსიქოლოგიას, ხელოვნურ ინტელექტს, ვიზუალურ გამოთვლებსა და კრეატიულ დეველოპმენტს.",

        about_intro_text_1:
            "მე ვარ თორნიკე დოლიძე, 22 წლის დეველოპერი და კრეატიული ტექნოლოგი, რომელიც ტექნოლოგიისა და კვლევის რამდენიმე მიმართულებაზე მუშაობს.",

        about_intro_text_2:
            "ჩემმა აკადემიურმა გამოცდილებამ და ტექნიკურმა ინტერესებმა მიმიყვანა პროექტებამდე, რომლებიც პროგრამულ უზრუნველყოფას, ხელოვნურ ინტელექტს, ვიზუალურ ტექნოლოგიებსა და ადამიანის კოგნიციას აერთიანებს.",

        about_intro_side:
            "ცნობისმოყვარეობა ბუნებით. შექმნა — არჩევანით.",


        // ==========================================
        // EDUCATION
        // ==========================================

        about_education_kicker:
            "განათლება",

        about_education_title:
            "აკადემიური გზა, რომელიც ჩემს საქმიანობას ქმნის.",

        about_education_desc:
            "სოციალური მეცნიერებების, ფსიქოლოგიისა და თანამედროვე ტექნოლოგიების ერთობლიობა.",

        education_1_label:
            "ბაკალავრის ხარისხი",

        education_1_title:
            "საერთაშორისო ურთიერთობები",

        education_1_desc:
            "აკადემიური განათლება საერთაშორისო ურთიერთობებისა და გლობალური საკითხების მიმართულებით.",

        education_2_label:
            "დოქტორი",

        education_2_title:
            "ფსიქოლოგია",

        education_2_desc:
            "აკადემიური განათლება ფსიქოლოგიის, ადამიანის ქცევისა და კოგნიციის მიმართულებით.",

        education_3_label:
            "მიმდინარე პროგრამა",

        education_3_title:
            "ნეიროინჟინერია",

        education_3_desc:
            "ამჟამად ვსწავლობ ნეირომეცნიერებისა და ინჟინერიის გადაკვეთაზე.",


        // ==========================================
        // CERTIFICATION
        // ==========================================

        about_certification_kicker:
            "სერტიფიკაცია",

        about_certification_title:
            "ვიზუალური ტექნოლოგიები და 3D.",

        certification_label:
            "პროფესიული სერტიფიკატი",

        certification_title:
            "3D გრაფიკა",

        certification_desc:
            "პროფესიული სერტიფიკატი 3D გრაფიკისა და ციფრული ვიზუალიზაციის მიმართულებით.",


        // ==========================================
        // FOCUS
        // ==========================================

        about_focus_kicker:
            "მიმდინარე მიმართულებები",

        about_focus_title:
            "სადაც ცნობისმოყვარეობა პროექტებად იქცევა.",

        about_focus_desc:
            "სფეროები, რომლებსაც ამჟამად ვიკვლევ, ვავითარებ და ერთმანეთთან ვაერთიანებ.",

        focus_ai_title:
            "ხელოვნური ინტელექტი",

        focus_ai_desc:
            "ლოკალური AI სისტემების აგება და წვრთნა და გენერაციულ მოდელებთან ექსპერიმენტები.",

        focus_software_title:
            "პროგრამული უზრუნველყოფა",

        focus_software_desc:
            "აპლიკაციების, ხელსაწყოებისა და ციფრული პროდუქტების შექმნა.",

        focus_3d_title:
            "3D და ვიზუალიზაცია",

        focus_3d_desc:
            "3D ასეტების, გარემოების, ვიზუალიზაციებისა და ციფრული გამოცდილებების შექმნა.",

        focus_games_title:
            "თამაშების დეველოპმენტი",

        focus_games_desc:
            "ორიგინალური თამაშების იდეების, სამყაროების, სისტემებისა და გამოცდილებების შექმნა.",


        // ==========================================
        // PROJECTS
        // ==========================================

        about_projects_kicker:
            "მიმდინარე პროექტები",

        about_projects_title:
            "იდეები, რომლებიც ახლა ფორმას იძენს.",

        about_projects_desc:
            "პირადი პროექტები, რომლებიც ამჟამად იგეგმება, იქმნება და ვითარდება.",

        project_1_status:
            "დამუშავების პროცესში",

        project_2_status:
            "დამუშავების პროცესში",

        project_3_status:
            "დამუშავების პროცესში",

        project_ai_desc:
            "ლოკალური ხელოვნური ინტელექტის სისტემების აგება და წვრთნა.",

        project_papers_desc:
            "თანამედროვე დოკუმენტების აპლიკაცია macOS-ისთვის.",

        project_dreamland_desc:
            "ორიგინალური თამაშის პროექტი, რომელიც ორიენტირებულია კვლევაზე, სამყაროს შექმნასა და ვიზუალურ თხრობაზე.",


        // ==========================================
        // FUTURE
        // ==========================================

        about_goals_kicker:
            "მომავალი",

        about_goals_title:
            "დისციპლინების საზღვარზე შექმნა.",

        about_goals_desc:
            "ჩემი გრძელვადიანი მიზანია შევისწავლო ხელოვნური ინტელექტის, ნეირომეცნიერების, პროგრამული უზრუნველყოფის, ვიზუალური გამოთვლებისა და კრეატიული ტექნოლოგიების ურთიერთკავშირი.",

        about_goals_label:
            "ყოველთვის ვქმნი",


        // ==========================================
        // AI & DEVELOPMENT
        // ==========================================

        about_ai_kicker:
            "AI და დეველოპმენტი",

        about_ai_title:
            "პროგრამირება ხელოვნურ ინტელექტთან ერთად.",

        about_ai_intro:
            "ხელოვნურ ინტელექტს ვუყურებ როგორც დეველოპმენტის პარტნიორს, რომელსაც შეუძლია პროგრამული უზრუნველყოფის დაგეგმვის, დაწერის, ტესტირებისა და გაუმჯობესების პროცესის დაჩქარება.",

        about_ai_main_label:
            "ჩემი მიდგომა",

        about_ai_main_title:
            "AI დეველოპერის შესაძლებლობებს აფართოებს.",

        about_ai_main_text:
            "სწორად გამოყენების შემთხვევაში AI ამცირებს განმეორებით სამუშაოს, აჩქარებს ექსპერიმენტებს, ეხმარება პრობლემების აღმოჩენაში, ხსნის უცნობ კოდს და სხვადასხვა ტექნიკური გადაწყვეტის სწრაფად შესწავლას ამარტივებს.",

        ai_benefit_1_title:
            "უფრო სწრაფი დეველოპმენტი",

        ai_benefit_1_desc:
            "AI-ს შეუძლია დააჩქაროს განმეორებითი კოდირების ამოცანები და იდეების სამუშაო პროტოტიპებად ქცევა.",

        ai_benefit_2_title:
            "მეტი ექსპერიმენტი",

        ai_benefit_2_desc:
            "სხვადასხვა მიდგომის, არქიტექტურისა და გადაწყვეტის სწრაფად გამოცდა შესაძლებელია სწორი მიმართულების არჩევამდე.",

        ai_benefit_3_title:
            "სწავლა და გაგება",

        ai_benefit_3_desc:
            "AI-ს შეუძლია ახსნას უცნობი კოდი, ტექნოლოგიები და კონცეფციები და ხელი შეუწყოს უწყვეტ სწავლას.",

        ai_benefit_4_title:
            "კოდის გაუმჯობესება",

        ai_benefit_4_desc:
            "არსებული კოდის გადახედვა, რეფაქტორინგი, ოპტიმიზაცია და გაუმჯობესება შესაძლებელია დამატებითი ანალიზის დახმარებით.",

        about_ai_note:
            "AI პროცესს ეხმარება — არქიტექტურაზე, გადაწყვეტილებებზე, შემოწმებასა და საბოლოო შედეგზე პასუხისმგებელი მაინც დეველოპერია.",


        // ==========================================
        // EXPERIENCE
        // ==========================================

        about_experience_kicker:
            "გამოცდილება",

        about_experience_title:
            "იდეების სამუშაო ციფრულ პროდუქტებად ქცევა.",

        about_experience_desc:
            "პრაქტიკული გამოცდილება კლიენტებთან, ძირითადად საერთაშორისო ბაზარზე, ვებსაიტებისა და არსებული ციფრული პროდუქტების შექმნისა და გაუმჯობესების მიმართულებით.",

        experience_label:
            "ფრილანსი / დამოუკიდებელი მუშაობა",

        experience_title:
            "ვებ დეველოპმენტი და კოდის გაუმჯობესება",

        experience_desc:
            "ვმუშაობ კლიენტებთან, ძირითადად საერთაშორისო ბაზრიდან, რათა შევქმნა და გავაუმჯობესო ვებსაიტები და ციფრული პროდუქტები.",

        experience_desc_2:
            "ჩემი სამუშაო მოიცავს ვებსაიტების ნულიდან შექმნას, არსებული კოდბეისების გაუმჯობესებას, ფუნქციონალისა და სტრუქტურის დახვეწას, პრობლემების გამოსწორებას და იდეების ფუნქციურ ციფრულ გამოცდილებად ქცევაში დახმარებას.",

        experience_skill_web:
            "ვებ დეველოპმენტი",

        experience_skill_code:
            "კოდის გაუმჯობესება",


        // ==========================================
        // CTA / FOOTER
        // ==========================================

        about_cta_kicker:
            "KOKOS-LAB",

        about_cta_title:
            "შევქმნათ რაღაც მნიშვნელოვანი.",

        about_cta_desc:
            "დაათვალიერე პროექტები ან დამიკავშირდი ახალი იდეის დასაწყებად.",

        about_cta_button:
            "KOKOS-LAB-ზე დაბრუნება",

        footer_rights:
            "© 2026 KOKOS-LAB. ყველა უფლება დაცულია."

    }

};


// ==========================================
// APPLY TRANSLATIONS
// ==========================================

function updateLanguage(lang) {

    // მხოლოდ დაშვებული ენები
    if (
        lang !== "en" &&
        lang !== "ka"
    ) {

        lang = "en";

    }


    currentLang =
        lang;


    // ენის დამახსოვრება
    localStorage.setItem(
        "kokos-lang",
        lang
    );


    // HTML lang attribute
    document.documentElement.lang =
        lang === "ka"
            ? "ka"
            : "en";


    // შესაბამისი dictionary
    // fallback-ით
    const dictionary =
        translations[lang] ||
        translations.en;


    // ყველა მთარგმნელი ელემენტი
    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(
        element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                Object.prototype.hasOwnProperty.call(
                    dictionary,
                    key
                )
            ) {

                element.textContent =
                    dictionary[key];

            }

        }
    );


    // ენის ღილაკი
    const langBtn =
        document.getElementById(
            "lang-toggle"
        );


    if (langBtn) {

        langBtn.textContent =
            lang === "ka"
                ? "EN"
                : "GE";

    }


    // თუ Pricing Modal გახსნილია,
    // მისი ტექსტიც განახლდეს
    if (
        typeof activeModalPlan !==
            "undefined" &&
        activeModalPlan &&
        typeof modalOverlay !==
            "undefined" &&
        modalOverlay &&
        !modalOverlay.classList.contains(
            "hidden"
        )
    ) {

        renderModalContent(
            activeModalPlan
        );

    }

}


// ==========================================
// GENERIC BUTTON / CARD HANDLERS
// ==========================================

document
    .querySelectorAll(
        ".pricing-card"
    )
    .forEach(
        card => {

            const planButton =
                card.querySelector(
                    "[data-plan]"
                );


            if (!planButton) {
                return;
            }


            planButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const plan =
                        planButton.getAttribute(
                            "data-plan"
                        );


                    if (plan) {

                        openPlanModal(
                            plan
                        );

                    }

                }
            );

        }
    );


// ==========================================
// SMOOTH SCROLL
// ==========================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const href =
                        anchor.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                            block:
                                "start"
                        }
                    );

                }
            );

        }
    );


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        link => {

            const href =
                link.getAttribute(
                    "href"
                );


            if (
                !href ||
                href.startsWith("#")
            ) {
                return;
            }


            const linkPage =
                href.split("#")[0];


            if (
                linkPage ===
                currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );


// ==========================================
// INTERSECTION OBSERVER
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".reveal, .fade-up, .home-section"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}


// ==========================================
// PREVENT ACCIDENTAL FORM RESUBMISSION
// ==========================================

window.addEventListener(
    "pageshow",
    event => {

        if (
            event.persisted
        ) {

            document
                .querySelectorAll(
                    "form"
                )
                .forEach(
                    form => {

                        form.reset();

                    }
                );

        }

    }
);


// ==========================================
// FINAL ICON REFRESH
// ==========================================

if (window.lucide) {

    lucide.createIcons();

}