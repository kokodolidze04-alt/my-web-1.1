document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // LUCIDE ICONS
    // =====================================================

    if (window.lucide) {
        lucide.createIcons();
    }


    // =====================================================
    // LANGUAGE
    // =====================================================

    let currentLang =
        localStorage.getItem("kokos-lang") || "en";


    // =====================================================
    // NAVIGATION
    // =====================================================

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.style.background =
                    "rgba(255,255,255,0)";

                navbar.style.backdropFilter =
                    "blur(20px)";

                navbar.style.webkitBackdropFilter =
                    "blur(20px)";

            } else {

                navbar.style.background =
                    "rgba(255,255,255,0)";

                navbar.style.backdropFilter =
                    "blur(10px)";

                navbar.style.webkitBackdropFilter =
                    "blur(10px)";
            }

        });

    }


    // =====================================================
    // MOBILE PRICING ACCORDION
    // =====================================================

    const toggleHeaders =
        document.querySelectorAll(".toggle-header");


    toggleHeaders.forEach(header => {

        header.addEventListener("click", () => {

            if (window.innerWidth > 768) {
                return;
            }


            const card =
                header.closest(".pricing-card");


            if (!card) {
                return;
            }


            document
                .querySelectorAll(".pricing-card")
                .forEach(otherCard => {

                    if (otherCard !== card) {
                        otherCard.classList.remove("active");
                    }

                });


            card.classList.toggle("active");

        });

    });


    // =====================================================
    // PLAN DATA
    // =====================================================

    function getPlanDetails(lang) {

        const isKa = lang === "ka";


        const t = {
            feature:
                isKa
                    ? "ფუნქციების ჩამონათვალი"
                    : "Feature Breakdown",

            perfectFor:
                isKa
                    ? "ვისთვის არის"
                    : "Perfect For",

            what:
                isKa
                    ? "რას ნიშნავს:"
                    : "What it means:",

            consultation:
                isKa
                    ? "უფასო კონსულტაცია"
                    : "Get a Free Consultation",

            book:
                isKa
                    ? "ამ პაკეტის დაჯავშნა"
                    : "Book This Package"
        };


        return {

            // =================================================
            // STARTER
            // =================================================

            starter: {

                title:
                    isKa
                        ? "🚀 Starter პაკეტი"
                        : "🚀 Starter Package",

                description:
                    isKa
                        ? "იდეალურია ფრილანსერებისთვის, პირადი საიტებისთვის და მცირე ბიზნესისთვის."
                        : "Perfect for freelancers, personal websites, and small businesses.",

                btn_book: t.book,


                content: `

                    <div class="modal-grid">

                        <div class="modal-section">

                            <h3>
                                ✨ ${t.feature}
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "საიტის დიზაინი ავტომატურად ერგება ტელეფონების, ტაბლეტებისა და კომპიუტერების ეკრანებს."
                                                    : "The website layout automatically adapts to mobile phones, tablets, and desktop screens."
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ხელით დაწერილი HTML/CSS მძიმე ბილდერების გარეშე, რაც უზრუნველყოფს სწრაფ და ეფექტურ მუშაობას."
                                                    : "Hand-written, optimized HTML/CSS without heavy builders, ensuring fast and efficient performance."
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
                                                ${t.what}
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
                                                ${t.what}
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
                                🎯 ${t.perfectFor}
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
                                        : "Let's schedule a quick chat to figure out exactly what your brand needs."
                                }
                            </p>

                            <a
                                href="consult.html"
                                class="modal-cta-btn"
                            >
                                ${t.consultation}
                            </a>

                        </div>

                    </div>

                `
            },
            // =================================================
            // BUSINESS
            // =================================================

            business: {

                title:
                    isKa
                        ? "💼 Business პაკეტი"
                        : "💼 Business Package",

                description:
                    isKa
                        ? "იდეალურია რესტორნებისთვის, მზარდი კომპანიებისა და სააგენტოებისთვის."
                        : "Perfect for restaurants, growing companies, and agencies.",

                btn_book: t.book,


                content: `

                    <div class="modal-grid">

                        <div class="modal-section">

                            <h3>
                                ✨ ${t.feature}
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "მოიცავს Starter პაკეტის ყველა ძირითად ფუნქციას."
                                                    : "Includes the main features of the Starter package."
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ფოტოებისა და პორტფოლიოს გამოსაჩენი დახვეწილი გალერეა."
                                                    : "Beautifully structured image galleries for your products, portfolio, or team."
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
                                                    ? "მუქი და ნათელი თემები"
                                                    : "Dark & Light Themes"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "მომხმარებელს შეუძლია საიტის ფერის თემის გადართვა."
                                                    : "Users can switch between dark and light visual themes."
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ინტერაქტიული რუკა, რათა კლიენტებმა მარტივად მიგაგნონ."
                                                    : "Interactive maps integrated directly into your website."
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
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "საიტის სტრუქტურისა და კონტენტის ოპტიმიზაცია საძიებო სისტემებისთვის."
                                                    : "Optimization of website structure and content for better search visibility."
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="modal-section">

                            <h3>
                                🎯 ${t.perfectFor}
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
                                                    ? "კომპანიებისთვის, რომლებსაც სჭირდებათ პროფესიული მრავალგვერდიანი საიტი."
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
                                                    : "For agencies that need a strong professional online presence."
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
                                        : "Let's discuss your goals and build a website that actually works for your business."
                                }
                            </p>

                            <a
                                href="consult.html"
                                class="modal-cta-btn"
                            >
                                ${t.consultation}
                            </a>

                        </div>

                    </div>

                `
            },


            // =================================================
            // PREMIUM
            // =================================================

            premium: {

                title:
                    isKa
                        ? "👑 Premium პაკეტი"
                        : "👑 Premium Package",

                description:
                    isKa
                        ? "მძლავრი, სრულმასშტაბიანი ვებ-გვერდი კომპანიებისა და დიდი პროექტებისთვის."
                        : "A powerful, full-scale website for companies and larger projects.",

                btn_book: t.book,


                content: `

                    <div class="modal-grid">

                        <div class="modal-section">

                            <h3>
                                ✨ ${t.feature}
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "მოიცავს Business პაკეტის ყველა ძირითად ფუნქციას."
                                                    : "Includes the main features of the Business package."
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
                                                    ? "კონტენტის მართვის სისტემა"
                                                    : "Content Management System"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "საიტის კონტენტის მართვა ტექნიკური ცოდნის გარეშე."
                                                    : "Manage and update website content without requiring technical knowledge."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "საიტის ტექნიკური ელემენტებისა და სტრუქტურის ღრმა ოპტიმიზაცია."
                                                    : "Deeper optimization of website structure and technical elements."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "საიტის ჩატვირთვისა და მუშაობის გაუმჯობესება ოპტიმიზირებული კოდითა და რესურსებით."
                                                    : "Improved loading speed and performance through optimized code and assets."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "პროექტის ძირითადი ფუნქციებისა და გამოყენების წესების დოკუმენტაცია."
                                                    : "Documentation covering the main project features and usage instructions."
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
                                                    ? "ანალიტიკის ინტეგრაცია"
                                                    : "Analytics Integration"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ვიზიტორებისა და საიტის გამოყენების მონაცემების შეგროვებისა და ანალიზის შესაძლებლობა."
                                                    : "The ability to collect and analyze visitor and website usage data."
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="modal-section">

                            <h3>
                                🎯 ${t.perfectFor}
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
                                                    ? "კომპანიებისთვის, რომლებსაც სჭირდებათ ძლიერი და მასშტაბური ონლაინ-წარმოდგენა."
                                                    : "For companies that need a powerful and scalable online presence."
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
                                            E-commerce
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "ონლაინ ბიზნესებისთვის, რომლებსაც სჭირდებათ კომპლექსური ფუნქციონალი და ინტეგრაციები."
                                                    : "For online businesses requiring advanced functionality and integrations."
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
                                        ? "გჭირდებათ სრულმასშტაბიანი ვებ-პროექტი?"
                                        : "Need a full-scale web project?"
                                }
                            </h4>

                            <p>
                                ${
                                    isKa
                                        ? "მოდით განვიხილოთ თქვენი მიზნები, მოთხოვნები და პროექტის მასშტაბი."
                                        : "Let's discuss your goals, requirements, and project scope."
                                }
                            </p>

                            <a
                                href="consult.html"
                                class="modal-cta-btn"
                            >
                                ${t.consultation}
                            </a>

                        </div>

                    </div>

                `
            },


            // =================================================
            // CUSTOM
            // =================================================

            custom: {

                title:
                    isKa
                        ? "🛠️ Custom პაკეტი"
                        : "🛠️ Custom Package",

                description:
                    isKa
                        ? "სრულად ინდივიდუალურად შექმნილი ვებ-პროექტი თქვენი კონკრეტული მოთხოვნების მიხედვით."
                        : "A fully custom web project built around your specific requirements.",

                btn_book:
                    isKa
                        ? "დავიწყოთ საუბარი"
                        : "Let's Talk",


                content: `

                    <div class="modal-grid">

                        <div class="modal-section">

                            <h3>
                                ✨ ${t.feature}
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
                                                    ? "Figma დიზაინიდან ვებსაიტამდე"
                                                    : "Figma to Website"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "თქვენი არსებული დიზაინის ზუსტად და ფუნქციურად გადატანა რეალურ ვებსაიტში."
                                                    : "Turning your existing Figma design into a real functional website."
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
                                                    ? "ინდივიდუალური ფუნქციები"
                                                    : "Custom Features"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ფუნქციები, რომლებიც კონკრეტულად თქვენი პროექტის საჭიროებებისთვის იქმნება."
                                                    : "Features developed specifically around your project's requirements."
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
                                                    ? "ინდივიდუალური UI/UX"
                                                    : "Custom UI/UX"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "უნიკალური ინტერფეისი და მომხმარებლის გამოცდილება, რომელიც თქვენს ბრენდს ერგება."
                                                    : "A unique interface and user experience tailored to your brand."
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
                                                    ? "კომპლექსური ინტეგრაციები"
                                                    : "Complex Integrations"
                                            }
                                        </strong>

                                        <p>
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "გარე სერვისების, API-ებისა და სხვა სისტემების ინდივიდუალური ინტეგრაცია."
                                                    : "Custom integration of external services, APIs, and other systems."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "Premium პაკეტის ძირითადი შესაძლებლობები დამატებული ინდივიდუალურ ფუნქციონალთან ერთად."
                                                    : "Premium capabilities combined with custom functionality."
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="modal-section">

                            <h3>
                                🎯 ${t.perfectFor}
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
                                                    ? "სტარტაპებისთვის, რომლებსაც სჭირდებათ უნიკალური ციფრული პროდუქტი."
                                                    : "For startups that need a unique digital product."
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
                                                    ? "პროექტებისთვის, რომლებიც სტანდარტულ ვებსაიტის პაკეტებში ვერ ჯდება."
                                                    : "For projects that do not fit standard website packages."
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
                                                    ? "თუ უკვე გაქვთ დიზაინი და გჭირდებათ მისი პროფესიონალურად აწყობა."
                                                    : "For clients who already have a design and need it professionally developed."
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
                                        ? "გაქვთ უნიკალური იდეა?"
                                        : "Have a unique idea?"
                                }
                            </h4>

                            <p>
                                ${
                                    isKa
                                        ? "მომიყევით თქვენს პროექტზე და ერთად განვსაზღვროთ მისი ტექნიკური და ვიზუალური მიმართულება."
                                        : "Tell me about your project and let's define its technical and visual direction together."
                                }
                            </p>

                            <a
                                href="consult.html"
                                class="modal-cta-btn"
                            >
                                ${
                                    isKa
                                        ? "დავიწყოთ საუბარი"
                                        : "Let's Talk"
                                }
                            </a>

                        </div>

                    </div>

                `
            },


            // =================================================
            // E-COMMERCE
            // =================================================

            ecommerce: {

                title:
                    isKa
                        ? "🛒 E-commerce პაკეტი"
                        : "🛒 E-commerce Package",

                description:
                    isKa
                        ? "სრული ონლაინ მაღაზია პროდუქტების, კალათის, შეკვეთისა და გადახდის სისტემით."
                        : "A complete online store with products, shopping cart, checkout, payments, and order management.",

                btn_book:
                    isKa
                        ? "ამ პაკეტის განხილვა"
                        : "Discuss This Package",


                content: `

                    <div class="modal-grid">

                        <div class="modal-section">

                            <h3>
                                ✨ ${t.feature}
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "პროდუქტების, კატეგორიების, სურათების, ფასებისა და დეტალური გვერდების ორგანიზებული სისტემა."
                                                    : "A structured catalog for products, categories, images, prices, and detailed product pages."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "მომხმარებელს შეუძლია პროდუქტების დამატება, რაოდენობის შეცვლა და შეკვეთის გადამოწმება."
                                                    : "Customers can add products, update quantities, remove items, and review their order."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "მოწესრიგებული checkout პროცესი, სადაც მომხმარებელი ავსებს საჭირო ინფორმაციას და ადასტურებს შეკვეთას."
                                                    : "A streamlined checkout flow where customers enter the required information and confirm their order."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "შესაბამისი ონლაინ გადახდის პროვაიდერის ინტეგრაცია."
                                                    : "Integration with the appropriate online payment provider."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "შემომავალი შეკვეთებისა და მათი სტატუსების მართვის სისტემა."
                                                    : "A system for managing incoming orders and order statuses."
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
                                            <strong>
                                                ${t.what}
                                            </strong>

                                            ${
                                                isKa
                                                    ? "ონლაინ მაღაზია სრულად ადაპტირებულია ტელეფონებისთვის, ტაბლეტებისა და კომპიუტერებისთვის."
                                                    : "The online store is fully responsive across phones, tablets, and desktop screens."
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="modal-section">

                            <h3>
                                🧩 ${
                                    isKa
                                        ? "როგორ ვქმნით მაღაზიას"
                                        : "How We Build Your Store"
                                }
                            </h3>


                            <div class="feature-list">

                                <div class="feature-item">

                                    <span class="feature-icon">
                                        01
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "მოთხოვნების განსაზღვრა"
                                                    : "Discovery & Architecture"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "ვადგენთ პროდუქტების სტრუქტურას, კატეგორიებს, მომხმარებლის გზასა და საჭირო ფუნქციებს."
                                                    : "We define the product structure, categories, customer journey, and required functionality."
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div class="feature-item">

                                    <span class="feature-icon">
                                        02
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "UI/UX დიზაინი"
                                                    : "UI/UX Design"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "ვქმნით თანამედროვე, მარტივ და კონვერსიაზე ორიენტირებულ მაღაზიის ინტერფეისს."
                                                    : "We create a modern, intuitive, and conversion-focused store interface."
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div class="feature-item">

                                    <span class="feature-icon">
                                        03
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "დეველოპმენტი"
                                                    : "Development"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "დიზაინს ვაქცევთ ფუნქციურ, სწრაფ და responsive ონლაინ მაღაზიად."
                                                    : "We turn the approved design into a functional, fast, and responsive online store."
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div class="feature-item">

                                    <span class="feature-icon">
                                        04
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "ინტეგრაციები"
                                                    : "Integrations"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "ვაერთიანებთ გადახდის, შეკვეთების და საჭირო გარე სერვისებს."
                                                    : "We integrate payment, order management, and required third-party services."
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div class="feature-item">

                                    <span class="feature-icon">
                                        05
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "ტესტირება"
                                                    : "Testing"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "ვამოწმებთ კალათას, checkout-ს, გადახდებს, responsive დიზაინსა და ძირითად user flow-ებს."
                                                    : "We test the cart, checkout, payments, responsive behavior, and key user flows."
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div class="feature-item">

                                    <span class="feature-icon">
                                        06
                                    </span>

                                    <div class="feature-text">

                                        <strong>
                                            ${
                                                isKa
                                                    ? "გაშვება და ჩაბარება"
                                                    : "Deployment & Launch"
                                            }
                                        </strong>

                                        <p>
                                            ${
                                                isKa
                                                    ? "საბოლოო ოპტიმიზაციის შემდეგ მაღაზია განთავსდება სერვერზე და მზად იქნება მომხმარებლებისთვის."
                                                    : "After final optimization, the store is deployed and prepared for real customers."
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
                                        ? "გსურთ ონლაინ გაყიდვების დაწყება?"
                                        : "Ready to Sell Online?"
                                }
                            </h4>

                            <p>
                                ${
                                    isKa
                                        ? "მომწერეთ თქვენი იდეისა და პროდუქციის შესახებ და ერთად განვსაზღვროთ თქვენი ონლაინ მაღაზიის საუკეთესო სტრუქტურა."
                                        : "Tell me about your products and goals, and let's define the right structure for your online store."
                                }
                            </p>

                            <a
                                href="consult.html"
                                class="modal-cta-btn"
                            >
                                ${t.consultation}
                            </a>

                        </div>

                    </div>

                `
            }

        };

    }


    // =====================================================
    // MODAL
    // =====================================================

    const modalOverlay =
        document.getElementById("details-modal");


    const modalBodyContent =
        document.getElementById("modal-body-content");


    const closeModalBtn =
        document.querySelector(".close-modal-btn");


    let activeModalPlan = null;


    function renderModalContent(planType) {

        if (!modalBodyContent) {
            return;
        }


        const plans =
            getPlanDetails(currentLang);


        const data =
            plans[planType];


        if (!data) {
            console.warn(
                "Unknown plan:",
                planType
            );

            return;
        }


        activeModalPlan =
            planType;


        modalBodyContent.innerHTML = `

            <h2 id="modal-title">
                ${data.title}
            </h2>


            <p>
                <strong>
                    ${data.description}
                </strong>
            </p>


            <hr
                style="
                    margin:24px 0;
                    opacity:.2;
                "
            >


            ${data.content}


            <a
                href="cont.html"
                class="primary-btn"
                style="
                    display:inline-flex;
                    margin-top:24px;
                    text-decoration:none;
                "
            >
                ${data.btn_book}
            </a>

        `;


        if (window.lucide) {
            lucide.createIcons();
        }

    }


    function openModal(planType) {

        if (!modalOverlay) {
            return;
        }


        renderModalContent(
            planType
        );


        if (!activeModalPlan) {
            return;
        }


        modalOverlay.classList.remove(
            "hidden"
        );


        modalOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );

    }


    function closeModal() {

        if (!modalOverlay) {
            return;
        }


        modalOverlay.classList.add(
            "hidden"
        );


        modalOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );


        activeModalPlan = null;

    }


    // =====================================================
    // DETAILS BUTTONS
    // =====================================================
    //
    // IMPORTANT:
    // ვიყენებთ EVENT DELEGATION-ს.
    // ეს არის მთავარი შესწორება.
    // =====================================================

    document.addEventListener(
        "click",
        event => {

            const detailsButton =
                event.target.closest(
                    ".details-btn[data-plan]"
                );


            if (detailsButton) {

                event.preventDefault();
                event.stopPropagation();


                const planType =
                    detailsButton.getAttribute(
                        "data-plan"
                    );


                if (planType) {
                    openModal(
                        planType
                    );
                }


                return;
            }


            // Close button

            const clickedClose =
                event.target.closest(
                    ".close-modal-btn"
                );


            if (clickedClose) {

                event.preventDefault();

                closeModal();

                return;
            }

        }
    );


    // =====================================================
    // CLOSE WHEN CLICKING OUTSIDE
    // =====================================================

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    modalOverlay
                ) {

                    closeModal();

                }

            }
        );

    }


    // =====================================================
    // ESC TO CLOSE
    // =====================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modalOverlay &&
                !modalOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeModal();

            }

        }
    );

    // =====================================================
// TRANSLATION SYSTEM
// =====================================================

const translations = {

    en: {

        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_work: "Approach",
        nav_contact: "Contact",

        home_page_title:
            "KOKOS-LAB | Web Development & 3D Visualization",

        web_page_title:
            "KOKOS-LAB | Web Development",

        about_page_title:
            "About — KOKOS-LAB",

        consult_page_title:
            "KOKOS-LAB | Free Consultation",

        cont_page_title:
            "KOKOS-LAB | Contact",

        home_eyebrow:
            "KOKOS-LAB · DIGITAL STUDIO",

        home_hero_title:
            "Digital experiences<br>built to<span>stand out.</span>",

        home_hero_desc:
            "I build modern websites and create 3D product visuals that turn ideas into polished digital experiences.",

        home_hero_primary:
            "Explore Services",

        home_hero_secondary:
            "Start a Conversation",

        home_person_name:
            "Tornike Dolidze",

        home_person_role:
            "Developer · 3D Artist",

        home_trust_note:
            "Built with detail, performance, and purpose.",

        home_services_kicker:
            "WHAT I DO",

        home_services_title:
            "Two disciplines. One creative studio.",

        home_services_desc:
            "From the interface your customers use to the visuals they remember.",

        service_web_title:
            "Web Development",

        home_web_long_desc:
            "Modern, responsive, high-performance websites built around your goals, your content, and your audience.",

        home_view_service:
            "View service",

        home_3d_badge:
            "3D SERVICE",

        service_3d_title:
            "3D Visualization",

        home_3d_long_desc:
            "Realistic product models and visualizations designed to present products before they ever reach the camera.",

        home_talk_about_3d:
            "Talk about your project",

        home_position_kicker:
            "WHY KOKOS-LAB",

        home_position_title:
            "Not just a finished screen. A finished experience.",

        home_position_desc:
            "Every project is approached as a complete experience — from the first idea and structure to the final responsive result.",

        home_point_one_title:
            "Purpose first",

        home_point_one_desc:
            "The structure starts with what the project needs to achieve.",

        home_point_two_title:
            "Clean execution",

        home_point_two_desc:
            "Responsive layouts, clean code, and attention to the small details.",

        home_point_three_title:
            "Direct collaboration",

        home_point_three_desc:
            "You work directly with the person building your project.",

        home_process_kicker:
            "THE APPROACH",

        home_process_title:
            "From idea to final result.",

        home_process_one_title:
            "Discovery",

        home_process_one_desc:
            "We discuss your business, goals, audience, references, and project requirements.",

        home_process_two_title:
            "Structure",

        home_process_two_desc:
            "We define the pages, content hierarchy, user flow, and visual direction.",

        home_process_three_title:
            "Development",

        home_process_three_desc:
            "The approved direction becomes a polished, responsive, and functional website.",

        home_process_four_title:
            "Launch",

        home_process_four_desc:
            "Final testing, optimization, deployment, and handover.",

        home_cta_kicker:
            "READY TO START?",

        home_cta_title:
            "Let's build something worth remembering.",

        home_cta_desc:
            "Tell me about your project and let's find the right direction.",

        home_cta_button:
            "Start a Conversation",

        about_eyebrow:
            "KOKOS-LAB · ABOUT",

        about_hero_title:
            "At the intersection of <span>various fields .</span>",

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

        about_goals_kicker:
            "FUTURE",

        about_goals_title:
            "Building at the edge of disciplines.",

        about_goals_desc:
            "My long-term goal is to explore the relationship between artificial intelligence, neuroscience, software, visual computing, and creative technology.",

        about_goals_label:
            "ALWAYS BUILDING",

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

        about_cta_kicker:
            "KOKOS-LAB",

        about_cta_title:
            "Let's build something meaningful.",

        about_cta_desc:
            "Explore the projects or get in touch to start something new.",

        about_cta_button:
            "Back to KOKOS-LAB",

        consult_page_title:
            "KOKOS-LAB | Free Consultation",

        consult_back:
            "Back to Web Development",

        consult_kicker:
            "FREE CONSULTATION",

        consult_title:
            "Free Consultation",

        consult_desc:
            "Book a free, no-obligation call to discuss your project. Read the FAQs below to prepare, then reach out!",

        consult_brand:
            "KOKOS-LAB",

        faq_kicker:
            "BEFORE WE START",

        faq_main_title:
            "Frequently Asked Questions",

        faq_q1:
            "How long does the consultation take?",

        faq_a1:
            "Usually between 15 to 30 minutes. We'll discuss your goals, target audience, and preferred design style.",

        faq_q2:
            "What should I prepare beforehand?",

        faq_a2:
            "Just a basic idea of what you want your website to achieve. If you have links to websites you like, that's a big plus!",

        faq_q3:
            "Is it really free?",

        faq_a3:
            "Yes! The initial consultation is 100% free to see if we are a good fit for your project.",

        consult_contact_kicker:
            "LET'S TALK",

        consult_contact_ready:
            "Ready to start? Contact me:",

        consult_email_label:
            "EMAIL",

        consult_phone_label:
            "PHONE",

        consult_messaging_label:
            "MESSAGING",

        consult_messaging_value:
            "WhatsApp / Telegram",

        consultation_name_placeholder:
            "Your name",

        consultation_email_placeholder:
            "Your email",

        consultation_message_placeholder:
            "Tell me about your project...",

        cont_page_title:
            "KOKOS-LAB | Contact",

        cont_back_home:
            "Back to Home",

        cont_kicker:
            "CONTACT",

        cont_title:
            "Let's talk.",

        cont_desc:
            "Have a project in mind, need help with an existing website, or simply want to discuss an idea? Get in touch.",

        cont_get_in_touch:
            "GET IN TOUCH",

        cont_talk_title:
            "Let's talk<br><span>about your project</span>",

        cont_create_title:
            "Let's create<br><span>something.</span>",

        cont_talk_desc:
            "Whether you have a specific project in mind or just want to explore options, I'm here to help you build something great.",

        cont_email_label:
            "EMAIL",

        cont_phone_label:
            "PHONE",

        cont_message_label:
            "MESSAGE",

        cont_name_label:
            "NAME",

        cont_name_placeholder:
            "John Doe",

        cont_email_placeholder:
            "john@example.com",

        cont_message_placeholder:
            "Tell me about your project...",

        cont_send:
            "Send via Email",

        cont_send_message:
            "Send a Message",

        cont_form_desc:
            "Tell me a little about your project and I'll get back to you.",

        cont_lbl_name:
            "Your Name",

        cont_lbl_email:
            "Email Address",

        cont_lbl_message:
            "How can I help you?",

        cont_btn_send:
            "Send via Email",

        cont_form_note:
            "Your message will open directly in your email client.",

        cont_follow_connect:
            "Follow & Connect",

        cont_success:
            "Your message has been prepared successfully.",

        footer_consultation:
            "Consultation",

        footer_contact:
            "Contact",

        footer_rights:
            "© 2026 KOKOS-LAB. All rights reserved.",

        web_section_kicker:
            "WEB DEVELOPMENT",

        web_hero_title:
            "Modern Websites<br>Built to Grow Your Business",

        web_hero_desc:
            "I create fast, responsive, and modern websites that combine clean design with reliable performance. Every project is crafted to help your business stand out online.",

        btn_back:
            "Back",

        btn_get_consultation:
            "GET A FREE CONSULTATION",

        pricing_title:
            "Choose the Right Package",

        pricing_subtitle:
            "Every website is built with performance, responsiveness, and clean design in mind.",

        plan_starter_title:
            "🚀 Starter",

        plan_starter_pages:
            "1–3 Pages",

        lbl_included:
            "Included",

        feat_responsive:
            "Responsive Design",

        feat_clean_code:
            "Clean Code",

        feat_contact_form:
            "Contact Form",

        feat_fast_delivery:
            "Fast Delivery",

        lbl_perfect_for:
            "Perfect For",

        target_freelancers:
            "Freelancers",

        target_personal:
            "Personal Websites",

        target_small_biz:
            "Small Businesses",

        lbl_starting_from:
            "Starting From",

        btn_view_details:
            "View Details",

        plan_business_title:
            "💼 Business",

        plan_business_pages:
            "4–8 Pages",

        feat_everything_starter:
            "Everything in Starter",

        feat_gallery:
            "Gallery",

        feat_themes:
            "Dark & Light Themes",

        feat_maps:
            "Google Maps",

        feat_seo:
            "SEO",

        target_restaurants:
            "Restaurants",

        target_companies:
            "Companies",

        target_agencies:
            "Agencies",

        plan_premium_title:
            "👑 Premium",

        plan_premium_pages:
            "Unlimited Pages",

        badge_popular:
            "Most Popular",

        badge_most_popular:
            "Most Popular",

        feat_everything_business:
            "Everything in Business",

        feat_cms:
            "Content Management System",

        feat_adv_seo:
            "Advanced SEO",

        feat_perf_opt:
            "Performance Optimization",

        feat_docs:
            "Documentation",

        feat_analytics:
            "Analytics Integration",

        target_large_companies:
            "Large Companies",

        target_ecommerce:
            "E-commerce",

        plan_custom_title:
            "🛠️ Custom",

        plan_custom_sub:
            "Tailored to Your Needs",

        feat_figma:
            "Figma to Website",

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

        lbl_price_based_on:
            "Price Based On",

        val_project_scope:
            "Project Scope",

        btn_lets_talk:
            "Let's Talk",

        plan_ecommerce_title:
            "🛒 E-commerce",

        plan_ecommerce_sub:
            "Complete Online Store",

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

        why_kicker:
            "WHY KOKOS-LAB",

        why_title:
            "A website should do more than simply exist.",

        why_desc:
            "It should communicate your value, guide your visitors, and make your business look as professional online as it is in real life.",

        why_performance_title:
            "Performance",

        why_performance_desc:
            "Fast-loading pages, optimized assets, responsive layouts, and clean front-end implementation.",

        why_responsive_title:
            "Responsive by Design",

        why_responsive_desc:
            "Your website is designed to work properly across phones, tablets, laptops, and desktop screens.",

        process_kicker:
            "THE PROCESS",

        process_title:
            "From idea to launch.",

        process_discovery_title:
            "Discovery",

        process_discovery_desc:
            "We discuss your business, goals, audience, references, and project requirements.",

        process_structure_title:
            "Structure",

        process_structure_desc:
            "We define the pages, content hierarchy, user flow, and visual direction.",

        process_development_title:
            "Development",

        process_development_desc:
            "The approved direction becomes a polished, responsive, and functional website.",

        process_launch_title:
            "Launch",

        process_launch_desc:
            "Final testing, optimization, deployment, and handover.",

        cta_kicker:
            "READY TO START?",

        cta_title:
            "Let's build your website.",

        cta_desc:
            "Tell me about your project and I'll help you choose the right approach.",

courses_page_title: "KOKOS-LAB | 3D Courses",
course_kicker: "EDUCATION & MENTORSHIP",
course_section_title: "3D Modeling Courses",
course_section_desc: "Learn 3D graphics, modeling, and sculpting from scratch to professional level.",
course_includes_title: "What you will learn:",
course_btn_register: "Enroll in Course",

course_1_title: "Modeling Basics",
course_1_duration: "10 Lectures · 2 Meetings per week",
course_1_p1: "Installing Blender & setting up helper components",
course_1_p2: "Importing objects & utilizing workspace tools",
course_1_p3: "Applying essential modeling tools",
course_1_p4: "Fundamentals of texturing & materials",
course_1_p5: "Working with camera principles & framing",
course_1_p6: "Final project rendering & output",
course_1_cert: "Certificate issued upon completion",

course_2_title: "Modeling + Sculpting",
course_2_duration: "12 Lectures · 3 Meetings per week",
course_2_badge: "PRO COURSE",
course_2_p1: "Installing Blender & setting up helper components",
course_2_p2: "Importing objects & utilizing workspace tools",
course_2_p3: "Applying essential modeling tools",
course_2_p4: "Fundamentals of texturing & materials",
course_2_p5: "Working with camera principles & framing",
course_2_p6: "Core principles of 3D Sculpting",
course_2_p7: "Lighting, shadows & atmospheric work",
course_2_p8: "Constructing complex hybrid scenes",
course_2_p9: "Composition setup & high-end final rendering",
course_2_cert: "Certificate + Recommendation Letter",

// COURSES PAGE TRANSLATIONS
        courses_page_title: "KOKOS-LAB | 3D Courses",
        course_kicker: "EDUCATION & MENTORSHIP",
        course_hero_title: "Master the <span>3D World</span> & Become Part of a Global Industry",
        course_hero_desc: "3D graphics has long evolved beyond a simple hobby into one of the most in-demand fields of the modern digital economy. Blender is the fastest-growing 3D tool of the 21st century, giving you ultimate creative freedom to build digital worlds, characters, product visualizations, and game assets. Our curriculum is designed to guide you from absolute zero to practical, real-world results, instilling the right technical mindset to prepare you for commercial projects.",

        // BENTO GRID CARDS
        blender_card1_title: "Why Choose Blender?",
        blender_card1_desc: "Blender is an indisputable game-changer in the industry today. It is a completely free, open-source ecosystem backed and used by world-leading studios including Ubisoft, Epic Games, and AWS. The software seamlessly unifies polygonal modeling, digital sculpting, texturing, animation, and real-time rendering (EEVEE & Cycles) under one roof. Master Blender and you operate free from expensive licenses with access to infinite creative tools.",

        blender_card2_title: "Vast Industry Applications",
        blender_card2_desc: "The career of a 3D artist goes far beyond game development. Today, 3D specialists are vital across Game Dev, Film & VFX, Product Commercials (Motion Design), Architectural Visualization, 3D Printing, and Metaverse/AR-VR technologies. Any brand looking to showcase products in pristine visual detail without expensive camera setups relies heavily on skilled 3D designers.",

        blender_card3_title: "High Income & Global Freelancing",
        blender_card3_desc: "3D graphics remains one of the highest-paying remote careers globally. Since digital assets know no borders, you aren't restricted to your local market. Armed with a solid portfolio built during this course, you can directly launch onto international platforms like Upwork, Fiverr, ArtStation, and CGITrader, working with US and European clients where hourly rates range from $25 to $75+.",

        course_select_kicker: "CHOOSE YOUR PATH",
        course_section_title: "Select Your Training Program",
        course_section_desc: "Our courses are 100% focused on practical knowledge and real project workflows. Choose your preferred intensity and start building.",
        course_includes_title: "What you will learn:",
        course_btn_register: "Enroll in Course",

        // COURSE 01 (12 POINTS)
        course_1_title: "Modeling Basics",
        course_1_duration: "10 Lectures · 2 Meetings per week",
        course_1_cert: "Certificate issued upon completion",
        course_1_p1: "Installing Blender, customizing workspace UI, and activating essential Add-ons",
        course_1_p2: "3D space navigation, object imports, transformations, and Pivot Point control",
        course_1_p3: "Core & advanced Low-Poly modeling tools (Extrude, Inset, Bevel, Loop Cut)",
        course_1_p4: "Polygonal topology fundamentals and mesh cleanliness (Quads vs N-Gons)",
        course_1_p5: "Modifier Stack system: Mirror, Subdivision Surface, Boolean, and Array",
        course_1_p6: "Texturing & PBR material basics (Principled BSDF, Roughness, Metallic)",
        course_1_p7: "UV Unwrapping principles, Seams management, and proper Texture Mapping",
        course_1_p8: "Studio lighting setup (3-Point Lighting) and scene atmosphere creation",
        course_1_p9: "Working with cameras: Focal Length, Depth of Field, and cinematic framing",
        course_1_p10: "EEVEE & Cycles render engines configuration and selection strategy",
        course_1_p11: "Final high-resolution image rendering and post-processing in Compositor",
        course_1_p12: "First portfolio project preparation and multi-format export (FBX/OBJ)",

        // COURSE 02 (22 POINTS)
        course_2_title: "Modeling + Sculpting",
        course_2_duration: "12 Lectures · 3 Meetings per week",
        course_2_badge: "PRO COURSE",
        course_2_cert: "Certificate + Recommendation Letter",
        course_2_p1: "Setting up a professional Blender production environment and workflow",
        course_2_p2: "Object importing, composition, and accurate proportion blocking (Blocking out)",
        course_2_p3: "Complex Hard-Surface modeling techniques for detailed assets",
        course_2_p4: "Subdivision Surface modeling and supporting loops topology control",
        course_2_p5: "In-depth Sculpting Mode overview, custom brushes, and Dyntopo usage",
        course_2_p6: "Digital sculpting of organic shapes, characters, or highly detailed assets",
        course_2_p7: "Remesh technologies and sculpt mesh preparation for retopology",
        course_2_p8: "Professional Retopology workflow (converting High-Poly to clean Low-Poly)",
        course_2_p9: "Complex UV Unwrapping, proper Seam distribution, and UV Packing optimization",
        course_2_p10: "Texture Baking process: Baking Normal Maps, AO, and Curvature maps",
        course_2_p11: "Basic & advanced PBR texturing nodes in the Shader Editor",
        course_2_p12: "Creating fully procedural textures using Node groups (Noise, Voronoi, Bump)",
        course_2_p13: "Professional lighting setup & atmospheric effects (Volumetrics, Fog, HDRI)",
        course_2_p14: "Advanced lighting, reflections, and complex shaders (Glass, Subsurface Scattering)",
        course_2_p15: "Constructing hybrid 3D scenes and detailed Environment Design",
        course_2_p16: "Camera animation and cinematic camera movement techniques",
        course_2_p17: "Introduction to Particle Systems & Geometry Nodes (Foliage, Instancing)",
        course_2_p18: "Cycles Render Engine optimization, sampling, and Denoising techniques",
        course_2_p19: "Post-production in Compositor: Color Grading, Glare, Depth Maps & FX",
        course_2_p20: "Final high-end 3D rendering and cinematic video/image export",
        course_2_p21: "Preparing 3D assets for Game Engines (Unreal Engine / Unity) or 3D Printing",
        course_2_p22: "Building an international portfolio (ArtStation/Behance) and freelancing strategy",

        // FINAL PROJECT & CERTIFICATION
        final_project_badge: "CERTIFICATION STEP",
        final_project_title: "1-Week <span>Final Project</span> & Certification",
        final_project_desc: "Upon completing the theoretical and practical modules of the course, every student receives an individual 1-week final assignment. This serves as a real-world exam where you will apply all the techniques and skills acquired during the course.",
        final_step_1_title: "Brief & Assignment",
        final_step_1_desc: "You receive an individual project brief detailing requirements, creative direction, technical specs, and delivery deadlines.",
        final_step_2_title: "1-Week Execution",
        final_step_2_desc: "Over 7 days, you independently build your project (modeling, texturing, lighting, rendering) with periodic mentor check-ins.",
        final_step_3_title: "Evaluation & Certificate",
        final_step_3_desc: "Upon successful review, you are awarded the official KOKOS-LAB Certificate and the project becomes a highlighted piece in your personal portfolio."

    },


    ka: {

        nav_home: "მთავარი",
        nav_about: "ჩემ შესახებ",
        nav_services: "სერვისები",
        nav_work: "მიდგომა",
        nav_contact: "კონტაქტი",

        home_page_title:
            "KOKOS-LAB | ვებ დეველოპმენტი და 3D ვიზუალიზაცია",

        web_page_title:
            "KOKOS-LAB | ვებ დეველოპმენტი",

        about_page_title:
            "ჩემ შესახებ — KOKOS-LAB",

        consult_page_title:
            "KOKOS-LAB | უფასო კონსულტაცია",

        cont_page_title:
            "KOKOS-LAB | კონტაქტი",

        home_eyebrow:
            "KOKOS-LAB · ციფრული სტუდია",

        home_hero_title:
            "ციფრული გამოცდილებები,<br>რომლებიც ყურადღებას<br><span>იმსახურებს.</span>",

        home_hero_desc:
            "ვქმნი თანამედროვე ვებსაიტებსა და 3D პროდუქტის ვიზუალიზაციებს, რომლებიც იდეებს დახვეწილ ციფრულ გამოცდილებად აქცევს.",

        home_hero_primary:
            "სერვისების ნახვა",

        home_hero_secondary:
            "დავიწყოთ საუბარი",

        home_person_name:
            "თორნიკე დოლიძე",

        home_person_role:
            "დეველოპერი · 3D არტისტი",

        home_trust_note:
            "შექმნილი დეტალების, წარმადობისა და მიზანმიმართულების გათვალისწინებით.",

        home_services_kicker:
            "რას ვაკეთებ",

        home_services_title:
            "ორი მიმართულება და ერთი კრეატიული სტუდია.",

        home_services_desc:
            "ინტერფეისიდან, რომელსაც შენი მომხმარებლები იყენებენ, ვიზუალებამდე, რომლებიც მათ დაამახსოვრდებათ.",

        service_web_title:
            "ვებ დეველოპმენტი",

        home_web_long_desc:
            "თანამედროვე, ადაპტირებადი და მაღალი წარმადობის ვებსაიტები, რომლებიც შენს მიზნებზე, კონტენტსა და აუდიტორიაზეა მორგებული.",

        home_view_service:
            "სერვისის ნახვა",

        home_3d_badge:
            "3D სერვისი",

        service_3d_title:
            "3D ვიზუალიზაცია",

        home_3d_long_desc:
            "რეალისტური პროდუქტის მოდელები და ვიზუალიზაციები, რომლებიც საშუალებას გაძლევს პროდუქტი კამერის წინ გამოჩენამდე წარმოადგინო.",

        home_talk_about_3d:
            "მომიყევი შენს პროექტზე",

        home_position_kicker:
            "რატომ KOKOS-LAB",

        home_position_title:
            "მაღალი ხარისხი, მაღალი წარმადობა.",

        home_position_desc:
            "თითოეული პროექტი სრულ გამოცდილებად განიხილება — პირველი იდეიდან და სტრუქტურიდან საბოლოო ადაპტირებად შედეგამდე.",

        home_point_one_title:
            "მიზანი პირველ ადგილზე",

        home_point_one_desc:
            "სტრუქტურა იწყება იმით, რისი მიღწევაც პროექტს სჭირდება.",

        home_point_two_title:
            "სუფთა შესრულება",

        home_point_two_desc:
            "ადაპტირებადი დიზაინი, სუფთა კოდი და ყურადღება მცირე დეტალების მიმართ.",

        home_point_three_title:
            "პირდაპირი თანამშრომლობა",

        home_point_three_desc:
            "პირდაპირ მუშაობ იმ ადამიანთან, რომელიც შენს პროექტს ქმნის.",

        home_process_kicker:
            "მიდგომა",

        home_process_title:
            "იდეიდან საბოლოო შედეგამდე.",

        home_process_one_title:
            "კვლევა და დაგეგმვა",

        home_process_one_desc:
            "ვიხილავთ შენს ბიზნესს, მიზნებს, აუდიტორიას, მაგალითებსა და პროექტის მოთხოვნებს.",

        home_process_two_title:
            "სტრუქტურა",

        home_process_two_desc:
            "ვსაზღვრავთ გვერდებს, კონტენტის იერარქიას, მომხმარებლის გზას და ვიზუალურ მიმართულებას.",

        home_process_three_title:
            "დეველოპმენტი",

        home_process_three_desc:
            "დამტკიცებული მიმართულება გარდაიქმნება დახვეწილ, ადაპტირებად და ფუნქციურ ვებსაიტად.",

        home_process_four_title:
            "გაშვება",

        home_process_four_desc:
            "საბოლოო ტესტირება, ოპტიმიზაცია, განთავსება და პროექტის გადმოცემა.",

        home_cta_kicker:
            "მზად ხარ დასაწყებად?",

        home_cta_title:
            "შევქმნათ რაღაც, რაც მნიშვნელოვანია.",

        home_cta_desc:
            "მომიყევი შენი პროექტის შესახებ და ერთად ვიპოვოთ სწორი მიმართულება.",

        home_cta_button:
            "დავიწყოთ საუბარი",

        about_eyebrow:
            "KOKOS-LAB · ჩემ შესახებ",

        about_hero_title:
            "სხვადასხვა<br><span>სფეროს გადაკვეთაზე.</span>",

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

        about_goals_kicker:
            "მომავალი",

        about_goals_title:
            "ჩემი სამომავლო მიზნები",

        about_goals_desc:
            "ჩემი გრძელვადიანი მიზანია შევისწავლო ხელოვნური ინტელექტის, ნეირომეცნიერების, პროგრამული უზრუნველყოფის, ვიზუალური გამოთვლებისა და ტექნოლოგიების ურთიერთკავშირი.",

        about_goals_label:
            "ყოველთვის ვქმნი",

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

        about_cta_kicker:
            "KOKOS-LAB",

        about_cta_title:
            "შევქმნათ რაღაც მნიშვნელოვანი.",

        about_cta_desc:
            "დაათვალიერე პროექტები ან დამიკავშირდი ახალი იდეის დასაწყებად.",

        about_cta_button:
            "KOKOS-LAB-ზე დაბრუნება",

        consult_page_title:
            "KOKOS-LAB | უფასო კონსულტაცია",

        consult_back:
            "ვებ დეველოპმენტზე დაბრუნება",

        consult_kicker:
            "უფასო კონსულტაცია",

        consult_title:
            "უფასო კონსულტაცია",

        consult_desc:
            "დაჯავშნე უფასო, ვალდებულებების გარეშე ზარი შენი პროექტის განსახილველად. წინასწარ გაეცანი ხშირად დასმულ კითხვებს და შემდეგ დამიკავშირდი!",

        consult_brand:
            "KOKOS-LAB",

        faq_kicker:
            "დაწყებამდე",

        faq_main_title:
            "ხშირად დასმული კითხვები",

        faq_q1:
            "რამდენ ხანს გრძელდება კონსულტაცია?",

        faq_a1:
            "ჩვეულებრივ, 15-დან 30 წუთამდე. განვიხილავთ შენს მიზნებს, სამიზნე აუდიტორიას და სასურველ დიზაინის სტილს.",

        faq_q2:
            "რა უნდა მოვამზადო წინასწარ?",

        faq_a2:
            "საკმარისია გქონდეს ზოგადი წარმოდგენა იმის შესახებ, თუ რისი მიღწევა გინდა შენი ვებსაიტით. თუ გაქვს შენთვის სასურველი ვებსაიტების ბმულები, ეს დიდი პლუსია!",

        faq_q3:
            "ნამდვილად უფასოა?",

        faq_a3:
            "დიახ! საწყისი კონსულტაცია 100%-ით უფასოა, რათა განვიხილოთ შენი პროექტი და გავარკვიოთ, შეგვიძლია თუ არა თანამშრომლობა.",

        consult_contact_kicker:
            "დავიწყოთ საუბარი",

        consult_contact_ready:
            "მზად ხარ დასაწყებად? დამიკავშირდი:",

        consult_email_label:
            "ელფოსტა",

        consult_phone_label:
            "ტელეფონი",

        consult_messaging_label:
            "მესენჯერი",

        consult_messaging_value:
            "WhatsApp / Telegram",

        consultation_name_placeholder:
            "შენი სახელი",

        consultation_email_placeholder:
            "შენი ელფოსტა",

        consultation_message_placeholder:
            "მომიყევი შენი პროექტის შესახებ...",

        cont_page_title:
            "KOKOS-LAB | კონტაქტი",

        cont_back_home:
            "მთავარზე დაბრუნება",

        cont_kicker:
            "კონტაქტი",

        cont_title:
            "დავიწყოთ საუბარი.",

        cont_desc:
            "გაქვს პროექტის იდეა, გჭირდება დახმარება არსებულ ვებსაიტზე ან უბრალოდ გინდა იდეის განხილვა? დამიკავშირდი.",

        cont_get_in_touch:
            "დამიკავშირდი",

        cont_talk_title:
            "მოდით, ვისაუბროთ<br><span>შენს პროექტზე</span>",

        cont_create_title:
            "შევქმნათ<br><span>რაღაც ახალი.</span>",

        cont_talk_desc:
            "მომიყევი შენი პროექტის, მიზნებისა და იმ საკითხების შესახებ, რომლებშიც დახმარება გჭირდება.",

        cont_email_label:
            "ელფოსტა",

        cont_phone_label:
            "ტელეფონი",

        cont_message_label:
            "შეტყობინება",

        cont_name_label:
            "სახელი",

        cont_name_placeholder:
            "შენი სახელი",

        cont_email_placeholder:
            "შენი ელფოსტა",

        cont_message_placeholder:
            "მომიყევი შენი პროექტის შესახებ...",

        cont_send:
            "შეტყობინების გაგზავნა",

        cont_send_message:
            "გამოგზავნე შეტყობინება",

        cont_form_desc:
            "მომიყევი შენი პროექტის შესახებ და მალე დაგიკავშირდები.",

        cont_lbl_name:
            "შენი სახელი",

        cont_lbl_email:
            "ელფოსტის მისამართი",

        cont_lbl_message:
            "როგორ შემიძლია დაგეხმარო?",

        cont_btn_send:
            "გაგზავნა ელფოსტით",

        cont_form_note:
            "შენი შეტყობინება პირდაპირ შენს ელფოსტის აპში გაიხსნება.",

        cont_follow_connect:
            "გამოიწერე და დამიკავშირდი",

        cont_success:
            "შეტყობინება წარმატებით მომზადდა.",

        footer_consultation:
            "კონსულტაცია",

        footer_contact:
            "კონტაქტი",

        footer_rights:
            "© 2026 KOKOS-LAB. ყველა უფლება დაცულია.",

        web_section_kicker:
            "ვებ დეველოპმენტი",

        web_hero_title:
            "თანამედროვე ვებსაიტები,<br>რომლებიც შენს ბიზნესს ზრდის",

        web_hero_desc:
            "ვქმნი სწრაფ, ადაპტირებად და თანამედროვე ვებსაიტებს, რომლებიც სუფთა დიზაინსა და სანდო წარმადობას აერთიანებს.",

        btn_back:
            "უკან",

        btn_get_consultation:
            "მიიღე უფასო კონსულტაცია",

        pricing_title:
            "აირჩიე სწორი პაკეტი",

        pricing_subtitle:
            "ყველა ვებსაიტი იქმნება წარმადობის, ადაპტირებადი დიზაინისა და სუფთა კოდის გათვალისწინებით.",

        plan_starter_title:
            "🚀 Starter",

        plan_starter_pages:
            "1–3 გვერდი",

        lbl_included:
            "შედის პაკეტში",

        feat_responsive:
            "ადაპტირებადი დიზაინი",

        feat_clean_code:
            "სუფთა კოდი",

        feat_contact_form:
            "საკონტაქტო ფორმა",

        feat_fast_delivery:
            "სწრაფი ჩაბარება",

        lbl_perfect_for:
            "იდეალურია",

        target_freelancers:
            "ფრილანსერებისთვის",

        target_personal:
            "პირადი საიტებისთვის",

        target_small_biz:
            "მცირე ბიზნესისთვის",

        lbl_starting_from:
            "იწყება",

        btn_view_details:
            "დეტალების ნახვა",

        plan_business_title:
            "💼 Business",

        plan_business_pages:
            "4–8 გვერდი",

        feat_everything_starter:
            "ყველაფერი Starter პაკეტიდან",

        feat_gallery:
            "გალერეა",

        feat_themes:
            "მუქი და ნათელი თემები",

        feat_maps:
            "Google რუკები",

        feat_seo:
            "SEO ოპტიმიზაცია",

        target_restaurants:
            "რესტორნებისთვის",

        target_companies:
            "კომპანიებისთვის",

        target_agencies:
            "სააგენტოებისთვის",

        plan_premium_title:
            "👑 Premium",

        plan_premium_pages:
            "შეუზღუდავი გვერდები",

        badge_popular:
            "ყველაზე მოთხოვნადი",

        badge_most_popular:
            "ყველაზე მოთხოვნადი",

        feat_everything_business:
            "ყველაფერი Business პაკეტიდან",

        feat_cms:
            "კონტენტის მართვის სისტემა",

        feat_adv_seo:
            "გაფართოებული SEO",

        feat_perf_opt:
            "წარმადობის ოპტიმიზაცია",

        feat_docs:
            "დოკუმენტაცია",

        feat_analytics:
            "ანალიტიკის ინტეგრაცია",

        target_large_companies:
            "დიდი კომპანიებისთვის",

        target_ecommerce:
            "E-commerce პროექტებისთვის",

        plan_custom_title:
            "🛠️ Custom",

        plan_custom_sub:
            "მორგებული შენს საჭიროებებზე",

        feat_figma:
            "Figma დიზაინიდან ვებსაიტამდე",

        feat_custom_features:
            "ინდივიდუალური ფუნქციები",

        feat_custom_uiux:
            "ინდივიდუალური UI/UX",

        feat_complex_int:
            "კომპლექსური ინტეგრაციები",

        feat_everything_premium:
            "ყველაფერი Premium პაკეტიდან",

        target_startups:
            "სტარტაპებისთვის",

        target_unique_proj:
            "უნიკალური პროექტებისთვის",

        target_your_designs:
            "შენი დიზაინების ასაწყობად",

        lbl_price_based_on:
            "ფასი განისაზღვრება",

        val_project_scope:
            "პროექტის მასშტაბიდან გამომდინარე",

        btn_lets_talk:
            "დავიწყოთ საუბარი",

        plan_ecommerce_title:
            "🛒 E-commerce",

        plan_ecommerce_sub:
            "სრული ონლაინ მაღაზია",

        feat_ecommerce_catalog:
            "პროდუქტების კატალოგი",

        feat_ecommerce_cart:
            "სავაჭრო კალათა",

        feat_ecommerce_checkout:
            "შეკვეთის სისტემა",

        feat_ecommerce_payment:
            "გადახდის ინტეგრაცია",

        feat_ecommerce_orders:
            "შეკვეთების მართვა",

        feat_ecommerce_mobile:
            "მობილურისთვის ოპტიმიზებული",

        feat_ecommerce_admin:
            "ადმინ პანელი",

        target_online_shops:
            "ონლაინ მაღაზიებისთვის",

        target_product_brands:
            "პროდუქტის ბრენდებისთვის",

        target_retail_businesses:
            "საცალო ვაჭრობისთვის",

        why_kicker:
            "რატომ KOKOS-LAB",

        why_title:
            "ვებსაიტმა მხოლოდ არსებობაზე მეტი უნდა შეძლოს.",

        why_desc:
            "მან უნდა გადმოსცეს შენი ღირებულება, წარმართოს ვიზიტორი და შენი ბიზნესი ონლაინ ისეთივე პროფესიონალურად აჩვენოს, როგორიც რეალურ ცხოვრებაშია.",

        why_performance_title:
            "წარმადობა",

        why_performance_desc:
            "სწრაფად მუშაობა, ოპტიმიზებული რესურსები, ადაპტირებადი დიზაინი და სუფთა კოდი.",

        why_responsive_title:
            "ადაპტირებადი დიზაინი",

        why_responsive_desc:
            "შენი ვებსაიტი გამართულად მუშაობს ტელეფონებზე, პლანშეტებზე, ლეპტოპებსა და კომპიუტერის ეკრანებზე.",

        process_kicker:
            "პროცესი",

        process_title:
            "იდეიდან გაშვებამდე.",

        process_discovery_title:
            "კვლევა",

        process_discovery_desc:
            "ვიხილავთ შენს ბიზნესს, მიზნებს, აუდიტორიას და მოთხოვნებს.",

        process_structure_title:
            "სტრუქტურა",

        process_structure_desc:
            "ვსაზღვრავთ გვერდებს, კონტენტის იერარქიასა და ვიზუალურ მიმართულებას.",

        process_development_title:
            "დეველოპმენტი",

        process_development_desc:
            "დამტკიცებული იდეა იქცევა დახვეწილ, ფუნქციურ ვებსაიტად.",

        process_launch_title:
            "გაშვება",

        process_launch_desc:
            "საბოლოო ტესტირება, ოპტიმიზაცია და პროექტის ჩაბარება.",

        cta_kicker:
            "მზად ხარ დასაწყებად?",

        cta_title:
            "შევქმნათ შენი ვებსაიტი.",

        cta_desc:
            "მომიყევი შენი პროექტის შესახებ და დაგეხმარები სწორი მიმართულების არჩევაში.",


            courses_page_title: "KOKOS-LAB | 3D კურსები",
course_kicker: "სწავლება და მენტორობა",
course_section_title: "3D მოდელირების კურსები",
course_section_desc: "შეისწავლეთ 3D გრაფიკა, მოდელირება და სკულპტინგი ნულიდან პროფესიონალ დონემდე.",
course_includes_title: "რას ისწავლი:",
course_btn_register: "კურსზე რეგისტრაცია",

course_1_title: "მოდელირების საფუძვლები",
course_1_duration: "10-ლექცია · კვირაში 2 შეხვედრა",
course_1_p1: "Blender-ის ინსტალაცია და დამხმარე კომპონენტების დაყენება",
course_1_p2: "ობიექტების შემოტანა და მათზე ხელსაწყოების გამოყენება",
course_1_p3: "მოდელირების ინსტრუმენტების გამოყენება",
course_1_p4: "ტექსტურირების საბაზისო ელემენტები",
course_1_p5: "კამერასთან მუშაობის პრინციპები",
course_1_p6: "პროექტის საბოლოო რენდერი",
course_1_cert: "კურსის ბოლოს გაიცემა სერტიფიკატი",

course_2_title: "მოდელირება + სკულპტინგი",
course_2_duration: "12-ლექცია · კვირაში 3 შეხვედრა",
course_2_badge: "PRO კურსი",
course_2_p1: "Blender-ის ინსტალაცია და დამხმარე კომპონენტების დაყენება",
course_2_p2: "ობიექტების შემოტანა და მათზე ხელსაწყოების გამოყენება",
course_2_p3: "მოდელირების ინსტრუმენტების გამოყენება",
course_2_p4: "ტექსტურირების საბაზისო ელემენტები",
course_2_p5: "კამერასთან მუშაობის პრინციპები",
course_2_p6: "სკულპტირების პრინციპები",
course_2_p7: "შუქ-ჩრდილებზე მუშაობა",
course_2_p8: "ჰიბრიდული სცენების აწყობა",
course_2_p9: "კომპოზიციის აწყობა და საბოლოო რენდერი",
course_2_cert: "სერტიფიკატი + რეკომენდაციის წერილი",

// COURSES PAGE TRANSLATIONS
        courses_page_title: "KOKOS-LAB | 3D კურსები",
        course_kicker: "სწავლება და მენტორობა",
        course_hero_title: "დაეუფლე <span>3D სამყაროს</span> და გახდი გლობალური ინდუსტრიის ნაწილი",
        course_hero_desc: "3D გრაფიკა უკვე დიდი ხანია გასცდა უბრალო ჰობის ფარგლებს და თანამედროვე ციფრული ეკონომიკის ერთ-ერთ ყველაზე მოთხოვნად მიმართულებად იქცა. Blender-ი არის XXI საუკუნის ყველაზე სწრაფად მზარდი 3D ინსტრუმენტი, რომელიც გაძლევს სრულ თავისუფლებას — შექმნა ციფრული სამყაროები, პერსონაჟები, პროდუქციის ვიზუალიზაციები და თამაშის ასეტები. ჩვენი სასწავლო პროგრამა შექმნილია იმისათვის, რომ ნულიდან პრაქტიკულ შედეგამდე მიგიყვანოს, ჩამოგიყალიბოს სწორი ტექნიკური აზროვნება და მოგამზადოს რეალურ პროექტებზე მუშაობისთვის.",

        // BENTO GRID CARDS
        blender_card1_title: "რატომ სწორედ Blender?",
        blender_card1_desc: "Blender-ი დღესდღეობით ინდუსტრიის უდავო რევოლუციონერია. ის სრულიად უფასო, ღია კოდის მქონე ეკოსისტემაა, რომელსაც მსოფლიოს წამყვანი სტუდიები (მათ შორის Ubisoft, Epic Games და AWS) აქტიურად უჭერენ მხარს და იყენებენ. პროგრამა ერთ სივრცეში აერთიანებს პოლიგონურ მოდელირებას, ციფრულ სკულპტინგს, ტექსტურირებას, ანიმაციასა და რეალურ დროში რენდერინგს (EEVEE & Cycles). Blender-ის ცოდნა ნიშნავს იმას, რომ შენ არ ხარ შეზღუდული ფასიანი ლიცენზიებით და გაქვს წვდომა უსაზღვრო შემოქმედებით რესურსთან.",

        blender_card2_title: "უზარმაზარი გამოყენების სფერო",
        blender_card2_desc: "3D არტისტის პროფესია მხოლოდ თამაშების შექმნით არ შემოიფარგლება. დღეს 3D სპეციალისტები სასიცოცხლოდ მნიშვნელოვანნი არიან Game Development-ში, კინოინდუსტრიასა და VFX-ში, პროდუქტის სარეკლამო ვიზუალიზაციაში (Motion Design), არქიტექტურასა და ინტერიერის დიზაინში, 3D ბეჭდვასა და Metaverse / AR-VR ტექნოლოგიებში. ნებისმიერი ბრენდი, რომელსაც სურს პროდუქტი კამერით გადაღების გარეშე, იდეალურ ვიზუალურ ფორმაში წარმოაჩინოს, ეძებს 3D დიზაინერს.",

        blender_card3_title: "მაღალი ანაზღაურება & გლობალური ფრილანსი",
        blender_card3_desc: "3D გრაფიკა წარმოადგენს ერთ-ერთ ყველაზე მაღალანაზღაურებად სფეროს დისტანციურ ბაზარზე. რადგან ციფრულ პროდუქტებს საზღვრები არ აქვს, შენ არ ხარ შეზღუდული ლოკალური ბაზრით. კურსის განმავლობაში შექმნილი ხარისხიანი პორტფოლიოლით შეგიძლია პირდაპირ გამოხვიდე საერთაშორისო პლატფორმებზე (Upwork, Fiverr, ArtStation, CGITrader) და იმუშაო ამერიკულ თუ ევროპულ კომპანიებთან, სადაც საათობრივი ანაზღაურება $25-დან $75-მდე მერყეობს.",

        course_select_kicker: "აირჩიე მიმართულება",
        course_section_title: "აირჩიე შენი სასწავლო პროგრამა",
        course_section_desc: "ჩვენი კურსები ორიენტირებულია 100%-ით პრაქტიკულ ცოდნაზე. აირჩიე შენთვის სასურველი ინტენსივობა და დაიწყე სწავლა.",
        course_includes_title: "რას ისწავლი:",
        course_btn_register: "კურსზე რეგისტრაცია",

        // COURSE 01 (12 POINTS)
        course_1_title: "მოდელირების საფუძვლები",
        course_1_duration: "10-ლექცია · კვირაში 2 შეხვედრა",
        course_1_cert: "კურსის ბოლოს გაიცემა სერტიფიკატი",
        course_1_p1: "Blender-ის ინსტალაცია, ინტერფეისის მორგება და დამხმარე Add-on-ების გააქტიურება",
        course_1_p2: "3D სივრცეში ნავიგაცია, ობიექტების შემოტანა, ტრანსფორმაციები და Pivot Point-ები",
        course_1_p3: "Low-Poly მოდელირების საბაზისო და გაფართოებული ინსტრუმენტები (Extrude, Inset, Bevel, Loop Cut)",
        course_1_p4: "პოლიგონური ტოპოლოგიის საფუძვლები და სწორი კუთხეების (Quads vs N-Gons) მართვა",
        course_1_p5: "მოდიფიკატორების (Modifiers) სისტემა: Mirror, Subdivision Surface, Boolean და Array",
        course_1_p6: "ტექსტურირებისა და PBR მასალების საფუძვლები (Principled BSDF, Roughness, Metallic)",
        course_1_p7: "UV Unwrapping-ის პრინციპები და ტექსტურული რუკების სწორად გაშლა",
        course_1_p8: "სტუდიური განათების აწყობა (3-Point Lighting) და სცენის ატმოსფეროს შექმნა",
        course_1_p9: "კამერასთან მუშაობა: Focal Length, Depth of Field და კადრირების კომპოზიცია",
        course_1_p10: "EEVEE და Cycles რენდერ-ძრავების პარამეტრები და მათი სწორი შერჩევა",
        course_1_p11: "საბოლოო მაღალი რეზოლუციის სურათის რენდერინგი და პოსტ-პროცესი (Compositor)",
        course_1_p12: "პირველი პორტფოლიო პროექტის მომზადება და ექსპორტი (FBX/OBJ) სხვა პროგრამებისთვის",

        // COURSE 02 (22 POINTS)
        course_2_title: "მოდელირება + სკულპტინგი",
        course_2_duration: "12-ლექცია · კვირაში 3 შეხვედრა",
        course_2_badge: "PRO კურსი",
        course_2_cert: "სერტიფიკატი + რეკომენდაციის წერილი",
        course_2_p1: "Blender-ის სრული გარემოს გამართვა და პროფესიონალური Workflow-ს აწყობა",
        course_2_p2: "ობიექტების შემოტანა, კომპოზიცია და პროპორციების ზუსტი ბლოკაუტი (Blocking out)",
        course_2_p3: "Hard-Surface მოდელირების კომპლექსური ტექნიკები რთული ფორმებისთვის",
        course_2_p4: "Subdivision Surface მოდელირება და დამხმარე წიბოების (Supporting Loops) მართვა",
        course_2_p5: "სკულპტირების (Sculpting Mode) ინსტრუმენტების, ფუნჯებისა და Dyntopo-ს სიღრმისეული მიმოხილვა",
        course_2_p6: "ორგანული ფორმების, პერსონაჟების ან დეტალიზებული ობიექტების ციფრული სკულპტინგი",
        course_2_p7: "Remesh ტექნოლოგიები და სკულპტის მომზადება რეტოპოლოგიისთვის",
        course_2_p8: "პროფესიონალური Retopology (High-Poly-დან Low-Poly მოდელის მიღება)",
        course_2_p9: "კომპლექსური UV Unwrapping, Seam-ების სწორად გადანაწილება და UV Packing",
        course_2_p10: "Baking პროცესი: High-Poly დეტალების გადატანა Low-Poly-ზე (Normal Map, AO, Curvature)",
        course_2_p11: "PBR ტექსტურირების საბაზისო და გაფართოებული კვანძები (Shader Nodes)",
        course_2_p12: "Procedural ტექსტურების შექმნა მხოლოდ ნოდების გამოყენებით (Noise, Voronoi, Bump)",
        course_2_p13: "სინათლისა და ატმოსფერული ეფექტების (Volumetrics, Fog, HDRI) პროფესიონალური აწყობა",
        course_2_p14: "შუქ-ჩრდილების, არეკვლებისა და რთული მასალების (Glass, Subsurface Scattering) დამუშავება",
        course_2_p15: "ჰიბრიდული 3D სცენების აწყობა და გარემოს (Environment Design) დეტალიზაცია",
        course_2_p16: "კამერების ანიმაცია და კადრირების კინემატოგრაფიული პრინციპები",
        course_2_p17: "Particle System & Geometry Nodes-ის შესავალი (ბალახი, ხეები, დუბლირება)",
        course_2_p18: "Cycles Render Engine-ის ოპტიმიზაცია და Noise-ის შემცირება (Denoising)",
        course_2_p19: "Compositor-ში პოსტ-პროდუქცია: Color Grading, Glare, Depth Map და ეფექტები",
        course_2_p20: "საბოლოო მაღალი ხარისხის 3D რენდერი და Cinematic ვიდეო/სურათის გამოსვლა",
        course_2_p21: "3D მოდელების მომზადება Game-Engine-ებისთვის (Unreal Engine / Unity) ან 3D ბეჭდვისთვის",
        course_2_p22: "საერთაშორისო პორტფოლიოს (ArtStation/Behance) აწყობა და ფრილანს პლატფორმების სტრატეგია",

        // FINAL PROJECT & CERTIFICATION
        final_project_badge: "სერტიფიცირების ეტაპი",
        final_project_title: "1-კვირიანი <span>ფინალური პროექტი</span> & სერტიფიცირება",
        final_project_desc: "კურსის თეორიული და პრაქტიკული ეტაპის დასრულების შემდეგ, თითოეული სტუდენტი იღებს ინდივიდუალურ 1-კვირიან ფინალურ დავალებას. ეს არის რეალური პრაქტიკული გამოცდა, სადაც გამოიყენებთ კურსის განმავლობაში შეძენილ ყველა ტექნიკასა და უნარს.",
        final_step_1_title: "დავალების მიღება",
        final_step_1_desc: "იღებთ ინდივიდუალურ ტექნიკურ დავალებას (Briefing), სადაც განსაზღვრულია პროექტის თემატიკა, მოთხოვნები და ჩაბარების ვადები.",
        final_step_2_title: "1-კვირიანი სამუშაო პროცესი",
        final_step_2_desc: "7 დღის განმავლობაში დამოუკიდებლად მუშაობთ პროექტზე (მოდელირება, ტექსტურირება, განათება, რენდერი) მენტორის პერიოდული მხარდაჭერით.",
        final_step_3_title: "შეფასება & სერტიფიკატი",
        final_step_3_desc: "პროექტის წარმატებით დაცვის შემდეგ გადმოგეცემათ KOKOS-LAB-ის ოფიციალური სერტიფიკატი და ნამუშევარი ემატება თქვენს პირად პორტფოლიოს."


    }
};

// =====================================================
// UPDATE LANGUAGE
// =====================================================

function updateLanguage(lang) {

    if (
        lang !== "en" &&
        lang !== "ka"
    ) {
        lang = "en";
    }

    currentLang = lang;

    localStorage.setItem(
        "kokos-lang",
        lang
    );

    const dictionary =
        translations[lang];

    document.documentElement.lang =
        lang === "ka"
            ? "ka"
            : "en";

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

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
                // შეცვლილია: გამოყენებულია innerHTML, რომ დიზაინის ტეგები (<br>, <span>) არ წაიშალოს
                element.innerHTML =
                    dictionary[key];

            }

        });

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (
                Object.prototype.hasOwnProperty.call(
                    dictionary,
                    key
                )
            ) {

                element.placeholder =
                    dictionary[key];

            }

        });

    const titleElement =
        document.querySelector(
            "title[data-i18n]"
        );

    if (titleElement) {

        const titleKey =
            titleElement.getAttribute(
                "data-i18n"
            );

        if (
            Object.prototype.hasOwnProperty.call(
                dictionary,
                titleKey
            )
        ) {

            document.title =
                dictionary[titleKey];

        }

    }

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

    if (
        typeof activeModalPlan !== "undefined" &&
        activeModalPlan &&
        typeof modalOverlay !== "undefined" &&
        modalOverlay &&
        !modalOverlay.classList.contains("hidden")
    ) {

        if (
            typeof renderModalContent ===
            "function"
        ) {

            renderModalContent(
                activeModalPlan
            );

        }

    }

}


// =====================================================
// LANGUAGE BUTTON
// =====================================================

const langBtn =
    document.getElementById(
        "lang-toggle"
    );

if (langBtn) {

    langBtn.addEventListener(
        "click",
        () => {

            const newLang =
                currentLang === "en"
                    ? "ka"
                    : "en";

            updateLanguage(
                newLang
            );

        }
    );

}


updateLanguage(
    currentLang
);


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

    function setActiveNavigation() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        document
            .querySelectorAll(
                ".nav-links a"
            )
            .forEach(link => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (!href) {
                    return;
                }


                const targetPage =
                    href
                        .split("/")
                        .pop()
                        .split("#")[0]
                        .toLowerCase();


                if (
                    targetPage &&
                    targetPage === currentPage
                ) {

                    link.classList.add(
                        "active"
                    );

                } else {

                    link.classList.remove(
                        "active"
                    );

                }

            });

    }


    setActiveNavigation();


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    // =====================================================
    // INTERSECTION OBSERVER
    // =====================================================

    const revealElements =
        document.querySelectorAll(
            ".pricing-card, .home-service-card, .process-card"
        );


    if (
        "IntersectionObserver" in window
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


    // =====================================================
    // CONTACT FORM
    // =====================================================

    const contactForm =
        document.getElementById(
            "contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "user_name"
                    )?.value || "";


                const email =
                    document.getElementById(
                        "user_email"
                    )?.value || "";


                const message =
                    document.getElementById(
                        "message"
                    )?.value || "";


                const myEmail =
                    "tornikedolidze04@gmail.com";


                const subject =
                    encodeURIComponent(
                        `New Project Inquiry from ${name}`
                    );


                const body =
                    encodeURIComponent(
                        `Name: ${name}\n` +
                        `Email: ${email}\n\n` +
                        `Message:\n${message}`
                    );


                window.location.href =
                    `mailto:${myEmail}?subject=${subject}&body=${body}`;


                contactForm.reset();

            }
        );

    }


    // =====================================================
    // FORM RESTORE PROTECTION
    // =====================================================

    window.addEventListener(
        "pageshow",
        event => {

            if (event.persisted) {

                document
                    .querySelectorAll("form")
                    .forEach(form => {

                        form.reset();

                    });

            }

        }
    );


    // =====================================================
    // CTA BUTTON
    // =====================================================

    const ctaButton =
        document.getElementById(
            "cta-btn"
        );


    if (ctaButton) {

        ctaButton.addEventListener(
            "click",
            () => {

                const services =
                    document.getElementById(
                        "services"
                    );


                if (services) {

                    services.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // =====================================================
    // MATRIX BACKGROUND
    // =====================================================

    const canvas =
        document.getElementById(
            "matrix-canvas"
        );


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        let fontSize = 14;


        function resizeMatrix() {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }


        resizeMatrix();


        const letters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/?;:{}[]!@#$%^&*()";


        let columns =
            Math.floor(
                canvas.width / fontSize
            );


        let drops =
            new Array(columns)
                .fill(1);


        function resetMatrix() {

            columns =
                Math.floor(
                    canvas.width / fontSize
                );


            drops =
                new Array(columns)
                    .fill(1);

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
                `${fontSize}px monospace`;


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


        let lastWidth =
            window.innerWidth;


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth !==
                    lastWidth
                ) {

                    resizeMatrix();

                    resetMatrix();

                    lastWidth =
                        window.innerWidth;

                }

            }
        );

    }


    // =====================================================
    // FINAL ICON REFRESH
    // =====================================================

    if (window.lucide) {
        lucide.createIcons();
    }

});