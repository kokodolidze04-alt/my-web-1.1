document.addEventListener("DOMContentLoaded", () => {

    // Lucide Icons-ის ინიციალიზაცია
    if (window.lucide) {
        lucide.createIcons();
    }


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

            navbar.style.background = "rgba(255, 255, 255, 0)";
            navbar.style.backdropFilter = "blur(20px)";
            navbar.style.webkitBackdropFilter = "blur(20px)";

        } else {

            navbar.style.background = "rgba(255, 255, 255, 0)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.webkitBackdropFilter = "blur(10px)";

        }

    });


    // Pricing Accordion Logic (მობილურისთვის)
    const toggleHeaders =
        document.querySelectorAll(".toggle-header");

    toggleHeaders.forEach(header => {

        header.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                const card =
                    header.closest(".pricing-card");

                document
                    .querySelectorAll(".pricing-card")
                    .forEach(c => {

                        if (c !== card) {
                            c.classList.remove("active");
                        }

                    });

                card.classList.toggle("active");

            }

        });

    });


    // ენის ინიციალიზაცია გვერდის ჩატვირთვისას
    updateLanguage(currentLang);


    // ენის გადამრთველი ღილაკის ლოგიკა
    const langBtn =
        document.getElementById("lang-toggle");

    if (langBtn) {

        langBtn.addEventListener("click", () => {

            currentLang =
                currentLang === "en"
                    ? "ka"
                    : "en";

            updateLanguage(currentLang);

        });

    }

});



// ==========================================
// Matrix Background Code Rain
// ==========================================

const canvas =
    document.getElementById("matrix-canvas");


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


    for (let x = 0; x < columns; x++) {

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
            fontSize + "px monospace";


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
                    canvas.width / fontSize;


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
// Modal Popup Logic (მრავალენოვანი)
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
                                    : "Let's discuss your goals and build a website that actually works for your business."
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

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "პროდუქტების, კატეგორიების, სურათების, ფასებისა და პროდუქტის დეტალური გვერდების ორგანიზებული სისტემა."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მომხმარებელს შეუძლია პროდუქტების დამატება, რაოდენობის შეცვლა, წაშლა და შეკვეთის გადამოწმება."
                                                : "Customers can add products, update quantities, remove items, and review their order before checkout."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მარტივი და მოწესრიგებული checkout პროცესი, სადაც მომხმარებელი ავსებს საჭირო ინფორმაციას და ადასტურებს შეკვეთას."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "ონლაინ გადახდის შესაბამისი პროვაიდერის ინტეგრაცია, რათა მომხმარებელმა უსაფრთხოდ გადაიხადოს შეკვეთა."
                                                : "Integration with the appropriate online payment provider so customers can securely pay for their orders."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "შემომავალი შეკვეთების, მათი სტატუსებისა და მომხმარებლების მიერ შეძენილი პროდუქტების მართვის სისტემა."
                                                : "A system for managing incoming orders, order statuses, and products purchased by customers."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "ონლაინ მაღაზია სრულად ადაპტირებულია ტელეფონებისთვის, ტაბლეტებისთვის, ლეპტოპებისა და დესკტოპებისთვის."
                                                : "The online store is fully responsive across phones, tablets, laptops, and desktop screens."
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
                                                ? "ვადგენთ პროდუქტების სტრუქტურას, კატეგორიებს, მომხმარებლის გზას და საჭირო ფუნქციებს."
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
                    ? "მძლავრი, სრულმასშტაბიანი ვებ-გვერდი კომპანიებისა და დიდი პროექტებისთვის."
                    : "A powerful, full-scale website for companies and larger projects.",


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

                                        <strong>
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "მოიცავს Business პაკეტის ყველა ფუნქციას და დამატებით უფრო ფართო შესაძლებლობებს."
                                                : "Includes all Business package features plus a wider range of advanced capabilities."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "საიტის კონტენტის მართვის შესაძლებლობა ტექნიკური ცოდნის გარეშე."
                                                : "A system that allows website content to be managed and updated without requiring technical knowledge."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "საიტის სტრუქტურისა და ტექნიკური ელემენტების უფრო ღრმა ოპტიმიზაცია საძიებო სისტემებისთვის."
                                                : "Deeper optimization of your website structure and technical elements for search engines."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "საიტის ვიზიტორებისა და მათი ქცევის შესახებ მონაცემების შეგროვებისა და ანალიზის შესაძლებლობა."
                                                : "The ability to collect and analyze visitor and website usage data."
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
                                                ? "ონლაინ ბიზნესებისთვის, რომლებსაც სჭირდებათ უფრო კომპლექსური ფუნქციონალი და ინტეგრაციები."
                                                : "For online businesses that require more advanced functionality and integrations."
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
                                                ? "Figma დიზაინიდან ვებსაიტამდე"
                                                : "Figma to Website"
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
                                                ? "თქვენი არსებული დიზაინის ზუსტად და ფუნქციურად გადატანა რეალურ ვებსაიტში."
                                                : "Turning your existing Figma design into a real, functional website while preserving the intended design."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "ფუნქციები, რომლებიც კონკრეტულად თქვენი პროექტის საჭიროებებისთვის იქმნება."
                                                : "Features developed specifically around the requirements of your project."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "უნიკალური ინტერფეისი და მომხმარებლის გამოცდილება, რომელიც თქვენს ბრენდს ერგება."
                                                : "A unique interface and user experience tailored specifically to your brand."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "გარე სერვისების, API-ების და სხვა სისტემების ინდივიდუალური ინტეგრაცია."
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
                                            ${
                                                isKa
                                                    ? "რას ნიშნავს:"
                                                    : "What it means:"
                                            }
                                        </strong>

                                        ${
                                            isKa
                                                ? "Premium პაკეტის ყველა ძირითადი შესაძლებლობა დამატებული ინდივიდუალურ ფუნქციონალთან ერთად."
                                                : "All major Premium package capabilities combined with custom functionality."
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
                                                ? "სტარტაპებისთვის, რომლებსაც სჭირდებათ უნიკალური ციფრული პროდუქტი."
                                                : "For startups that need a unique digital product built around their idea."
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
                                                : "For projects that don't fit into standard website packages."
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

        }

    };

}



// ==========================================
// Modal Rendering
// ==========================================

function renderModalContent(planType) {

    const plans =
        getPlanDetails(currentLang);


    if (
        planType &&
        plans[planType]
    ) {

        activeModalPlan =
            planType;


        const data =
            plans[planType];


        modalBodyContent.innerHTML = `

            <h2
                id="modal-title"
            >
                ${data.title}
            </h2>


            <p>
                <strong>
                    ${data.description}
                </strong>
            </p>


            <hr
                style="
                    margin: 24px 0;
                    opacity: .2;
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

}



// ==========================================
// Details Buttons
// ==========================================

const detailsButtons =
    document.querySelectorAll(
        ".details-btn[data-plan]"
    );


const modalOverlay =
    document.getElementById(
        "details-modal"
    );


const closeModalBtn =
    document.querySelector(
        ".close-modal-btn"
    );


const modalBodyContent =
    document.getElementById(
        "modal-body-content"
    );


if (
    modalOverlay &&
    detailsButtons.length > 0
) {

    detailsButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const planType =
                        button.getAttribute(
                            "data-plan"
                        );


                    renderModalContent(
                        planType
                    );


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
            );

        }
    );



    if (closeModalBtn) {

        closeModalBtn.addEventListener(
            "click",
            closeModal
        );

    }


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


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                !modalOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeModal();

            }

        }
    );

}


function closeModal() {

    if (!modalOverlay) return;


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



// ==========================================
// Language State
// ==========================================

let currentLang =
    localStorage.getItem(
        "kokos-lang"
    ) || "en";


let activeModalPlan =
    null;



const translations = {

    // =====================================================
    // ENGLISH
    // =====================================================

    en: {

        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_work: "Approach",
        nav_contact: "Contact",

        // General
        btn_back: "Back",
        btn_get_consultation: "GET A FREE CONSULTATION",
        btn_view_details: "View Details",
        btn_lets_talk: "Let's Talk",

        // =====================================================
        // HOME
        // =====================================================

        home_eyebrow:
            "KOKOS-LAB · DIGITAL STUDIO",

        home_hero_title:
            "Digital experiences built to stand out.",

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

        // =====================================================
        // WEB DEVELOPMENT
        // =====================================================

        web_section_kicker:
            "WEB DEVELOPMENT",

        web_hero_title:
            "Modern Websites Built to Grow Your Business",

        web_hero_desc:
            "I create fast, responsive, and modern websites that combine clean design with reliable performance. Every project is crafted to help your business stand out online.",

        // Pricing
        pricing_title:
            "Choose the Right Package",

        pricing_subtitle:
            "Every website is built with performance, responsiveness, and clean design in mind.",

        // Plans
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

        // Pricing labels
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

        // Buttons / badges
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
            "SEO",

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

        // Custom
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

        // Why KOKOS-LAB
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

        // Web process
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

        // Web CTA
        cta_kicker:
            "READY TO START?",

        cta_title:
            "Let's build your website.",

        cta_desc:
            "Tell me about your project and I'll help you choose the right approach.",

        // =====================================================
        // CONSULTATION
        // =====================================================

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

        // =====================================================
        // CONTACT
        // =====================================================

        cont_back_home:
            "Back to Home",

        cont_get_in_touch:
            "GET IN TOUCH",

        cont_talk_title:
            "Let's talk about your project",

        cont_talk_desc:
            "Whether you have a specific project in mind or just want to explore options, I'm here to help you build something great.",

        cont_create_title:
            "Let's create something.",

        cont_email_label:
            "EMAIL",

        cont_phone_label:
            "PHONE",

        cont_follow_connect:
            "Follow & Connect",

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

        // =====================================================
        // FOOTER
        // =====================================================

        footer_rights:
            "© 2026 KOKOS-LAB. All rights reserved.",

        footer_consultation:
            "Consultation",

        footer_contact:
            "Contact"
    },


    // =====================================================
    // GEORGIAN
    // =====================================================

    ka: {

        // Navigation
        nav_home:
            "მთავარი",

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
            "დავიწყოთ საუბარი",

        // =====================================================
        // HOME
        // =====================================================

        home_eyebrow:
            "KOKOS-LAB · ციფრული სტუდია",

        home_hero_title:
            "ციფრული გამოცდილებები, რომლებიც გამორჩეულად იქმნება.",

        home_hero_desc:
            "ვქმნი თანამედროვე ვებსაიტებსა და 3D პროდუქტის ვიზუალებს, რომლებიც იდეებს დახვეწილ ციფრულ გამოცდილებად გარდაქმნის.",

        home_hero_primary:
            "სერვისების ნახვა",

        home_hero_secondary:
            "დავიწყოთ საუბარი",

        home_person_name:
            "თორნიკე დოლიძე",

        home_person_role:
            "დეველოპერი · 3D არტისტი",

        home_trust_note:
            "შექმნილი დეტალების, წარმადობისა და მიზნის გათვალისწინებით.",

        home_services_kicker:
            "რას ვაკეთებ",

        home_services_title:
            "ორი მიმართულება. ერთი კრეატიული სტუდია.",

        home_services_desc:
            "ინტერფეისიდან, რომელსაც თქვენი მომხმარებლები იყენებენ, ვიზუალებამდე, რომლებიც მათ ახსოვთ.",

        service_web_title:
            "ვებ დეველოპმენტი",

        home_web_long_desc:
            "თანამედროვე, ადაპტირებადი და მაღალი წარმადობის ვებსაიტები, შექმნილი თქვენი მიზნების, კონტენტისა და აუდიტორიის გათვალისწინებით.",

        home_view_service:
            "სერვისის ნახვა",

        home_3d_badge:
            "3D სერვისი",

        service_3d_title:
            "3D ვიზუალიზაცია",

        home_3d_long_desc:
            "რეალისტური პროდუქტის მოდელები და ვიზუალიზაციები, რომლებიც საშუალებას გაძლევთ პროდუქტი კამერის წინ გამოჩენამდე წარმოადგინოთ.",

        home_talk_about_3d:
            "ისაუბრეთ თქვენს პროექტზე",

        home_position_kicker:
            "რატომ KOKOS-LAB",

        home_position_title:
            "არა მხოლოდ დასრულებული ეკრანი. დასრულებული გამოცდილება.",

        home_position_desc:
            "თითოეული პროექტი განიხილება როგორც სრული გამოცდილება — პირველი იდეიდან და სტრუქტურიდან საბოლოო ადაპტირებად შედეგამდე.",

        home_point_one_title:
            "მიზანი პირველ ადგილზე",

        home_point_one_desc:
            "სტრუქტურა იწყება იმით, თუ რისი მიღწევა უნდა შეძლოს პროექტმა.",

        home_point_two_title:
            "სუფთა შესრულება",

        home_point_two_desc:
            "ადაპტირებადი განლაგება, სუფთა კოდი და ყურადღება უმცირეს დეტალებზეც კი.",

        home_point_three_title:
            "პირდაპირი თანამშრომლობა",

        home_point_three_desc:
            "თქვენ პირდაპირ იმ ადამიანთან მუშაობთ, რომელიც თქვენს პროექტს ქმნის.",

        home_process_kicker:
            "მიდგომა",

        home_process_title:
            "იდეიდან საბოლოო შედეგამდე.",

        home_process_one_title:
            "კვლევა",

        home_process_one_desc:
            "ვიხილავთ თქვენს ბიზნესს, მიზნებს, აუდიტორიას, მაგალითებსა და პროექტის მოთხოვნებს.",

        home_process_two_title:
            "სტრუქტურა",

        home_process_two_desc:
            "განვსაზღვრავთ გვერდებს, კონტენტის იერარქიას, მომხმარებლის გზასა და ვიზუალურ მიმართულებას.",

        home_process_three_title:
            "დეველოპმენტი",

        home_process_three_desc:
            "დამტკიცებული მიმართულება გარდაიქმნება დახვეწილ, ადაპტირებად და ფუნქციურ ვებსაიტად.",

        home_process_four_title:
            "გაშვება",

        home_process_four_desc:
            "საბოლოო ტესტირება, ოპტიმიზაცია, განთავსება და პროექტის ჩაბარება.",

        home_cta_kicker:
            "მზად ხართ დასაწყებად?",

        home_cta_title:
            "შევქმნათ რაღაც, რაც დამახსოვრებას იმსახურებს.",

        home_cta_desc:
            "მომიყევით თქვენი პროექტის შესახებ და ერთად ვიპოვოთ სწორი მიმართულება.",

        home_cta_button:
            "დავიწყოთ საუბარი",

        // =====================================================
        // WEB DEVELOPMENT
        // =====================================================

        web_section_kicker:
            "ვებ დეველოპმენტი",

        web_hero_title:
            "თანამედროვე ვებსაიტები თქვენი ბიზნესის ზრდისთვის",

        web_hero_desc:
            "ვქმნი სწრაფ, ადაპტირებად და თანამედროვე ვებსაიტებს, რომლებიც სუფთა დიზაინსა და საიმედო წარმადობას აერთიანებს. თითოეული პროექტი შექმნილია იმისთვის, რომ თქვენი ბიზნესი ონლაინ სივრცეში გამორჩეული გახდეს.",

        // Pricing
        pricing_title:
            "აირჩიეთ თქვენთვის შესაფერისი პაკეტი",

        pricing_subtitle:
            "ყველა ვებსაიტი იქმნება წარმადობის, ადაპტირებადობისა და სუფთა დიზაინის გათვალისწინებით.",

        // Plans
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

        // Pricing labels
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
            "პირადი ვებსაიტებისთვის",

        target_small_biz:
            "მცირე ბიზნესებისთვის",

        // Business
        feat_everything_starter:
            "Starter-ის ყველა ფუნქცია",

        feat_gallery:
            "გალერეა",

        feat_themes:
            "მუქი და ნათელი თემები",

        feat_maps:
            "Google Maps",

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
            "Business-ის ყველა ფუნქცია",

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

        // Custom
        feat_figma:
            "Figma-დან ვებსაიტამდე",

        feat_custom_features:
            "მორგებული ფუნქციები",

        feat_custom_uiux:
            "მორგებული UI/UX",

        feat_complex_int:
            "კომპლექსური ინტეგრაციები",

        feat_everything_premium:
            "Premium-ის ყველა ფუნქცია",

        target_startups:
            "სტარტაპებისთვის",

        target_unique_proj:
            "უნიკალური პროექტებისთვის",

        target_your_designs:
            "თქვენი დიზაინის მიხედვით",

        // E-commerce
        feat_ecommerce_catalog:
            "პროდუქტების კატალოგი",

        feat_ecommerce_cart:
            "სავაჭრო კალათა",

        feat_ecommerce_checkout:
            "შეკვეთის გაფორმების სისტემა",

        feat_ecommerce_payment:
            "გადახდის ინტეგრაცია",

        feat_ecommerce_orders:
            "შეკვეთების მართვა",

        feat_ecommerce_mobile:
            "მობილურზე ოპტიმიზებული მაღაზია",

        feat_ecommerce_admin:
            "ადმინისტრაციული პანელი",

        target_online_shops:
            "ონლაინ მაღაზიებისთვის",

        target_product_brands:
            "პროდუქტის ბრენდებისთვის",

        target_retail_businesses:
            "საცალო ბიზნესებისთვის",

        // Why KOKOS-LAB
        why_kicker:
            "რატომ KOKOS-LAB",

        why_title:
            "ვებსაიტი უბრალოდ არსებობაზე მეტს უნდა აკეთებდეს.",

        why_desc:
            "მან უნდა გადმოსცეს თქვენი ღირებულება, სწორად წარმართოს ვიზიტორები და თქვენი ბიზნესი ონლაინ ისეთივე პროფესიონალურად წარმოაჩინოს, როგორიც რეალურად არის.",

        why_performance_title:
            "წარმადობა",

        why_performance_desc:
            "სწრაფად ჩატვირთვადი გვერდები, ოპტიმიზებული რესურსები, ადაპტირებადი განლაგება და სუფთა front-end იმპლემენტაცია.",

        why_responsive_title:
            "ადაპტირებადი დიზაინი",

        why_responsive_desc:
            "ვებსაიტი შექმნილია იმისთვის, რომ სწორად იმუშაოს ტელეფონებზე, ტაბლეტებზე, ლეპტოპებსა და დესკტოპებზე.",

        // Web process
        process_kicker:
            "პროცესი",

        process_title:
            "იდეიდან გაშვებამდე.",

        process_discovery_title:
            "კვლევა",

        process_discovery_desc:
            "ვიხილავთ თქვენს ბიზნესს, მიზნებს, აუდიტორიას, მაგალითებსა და პროექტის მოთხოვნებს.",

        process_structure_title:
            "სტრუქტურა",

        process_structure_desc:
            "განვსაზღვრავთ გვერდებს, კონტენტის იერარქიას, მომხმარებლის გზასა და ვიზუალურ მიმართულებას.",

        process_development_title:
            "დეველოპმენტი",

        process_development_desc:
            "დამტკიცებული მიმართულება გარდაიქმნება დახვეწილ, ადაპტირებად და ფუნქციურ ვებსაიტად.",

        process_launch_title:
            "გაშვება",

        process_launch_desc:
            "საბოლოო ტესტირება, ოპტიმიზაცია, განთავსება და პროექტის ჩაბარება.",

        // Web CTA
        cta_kicker:
            "მზად ხართ დასაწყებად?",

        cta_title:
            "შევქმნათ თქვენი ვებსაიტი.",

        cta_desc:
            "მომიყევით თქვენი პროექტის შესახებ და დაგეხმარებით სწორი მიდგომის არჩევაში.",

        // =====================================================
        // CONSULTATION
        // =====================================================

        consult_back:
            "ვებ დეველოპმენტზე დაბრუნება",

        consult_kicker:
            "უფასო კონსულტაცია",

        consult_title:
            "უფასო კონსულტაცია",

        consult_desc:
            "დაჯავშნეთ უფასო, ვალდებულების გარეშე კონსულტაცია თქვენი პროექტის განსახილველად. მომზადებისთვის გაეცანით ხშირად დასმულ კითხვებს და შემდეგ დამიკავშირდით.",

        consult_brand:
            "KOKOS-LAB",

        faq_kicker:
            "დაწყებამდე",

        faq_main_title:
            "ხშირად დასმული კითხვები",

        faq_q1:
            "რამდენ ხანს გრძელდება კონსულტაცია?",

        faq_a1:
            "ჩვეულებრივ 15-დან 30 წუთამდე. განვიხილავთ თქვენს მიზნებს, სამიზნე აუდიტორიასა და სასურველ დიზაინის სტილს.",

        faq_q2:
            "რა უნდა მოვამზადო წინასწარ?",

        faq_a2:
            "მხოლოდ ძირითადი წარმოდგენა იმაზე, თუ რისი მიღწევა გსურთ თქვენი ვებსაიტით. თუ გაქვთ თქვენთვის სასურველი ვებსაიტების ბმულები, ეს დიდი პლუსია.",

        faq_q3:
            "ნამდვილად უფასოა?",

        faq_a3:
            "დიახ! საწყისი კონსულტაცია 100%-ით უფასოა, რათა გავარკვიოთ, რამდენად შევეფერებით ერთმანეთს თქვენი პროექტისთვის.",

        consult_contact_kicker:
            "დავიწყოთ საუბარი",

        consult_contact_ready:
            "მზად ხართ დასაწყებად? დამიკავშირდით:",

        consult_email_label:
            "ელფოსტა",

        consult_phone_label:
            "ტელეფონი",

        consult_messaging_label:
            "მესენჯერი",

        consult_messaging_value:
            "WhatsApp / Telegram",

        // =====================================================
        // CONTACT
        // =====================================================

        cont_back_home:
            "მთავარზე დაბრუნება",

        cont_get_in_touch:
            "დაგვიკავშირდით",

        cont_talk_title:
            "მოდი, ვისაუბროთ თქვენს პროექტზე",

        cont_talk_desc:
            "გაქვთ კონკრეტული პროექტის იდეა ან უბრალოდ გსურთ შესაძლებლობების განხილვა? დაგეხმარებით რაიმე მნიშვნელოვანის შექმნაში.",

        cont_create_title:
            "მოდი, შევქმნათ რაღაც.",

        cont_email_label:
            "ელფოსტა",

        cont_phone_label:
            "ტელეფონი",

        cont_follow_connect:
            "გამომყევით და დამიკავშირდით",

        cont_send_message:
            "შეტყობინების გაგზავნა",

        cont_form_desc:
            "მომიყევით ცოტა რამ თქვენი პროექტის შესახებ და დაგიკავშირდებით.",

        cont_lbl_name:
            "თქვენი სახელი",

        cont_lbl_email:
            "ელფოსტის მისამართი",

        cont_lbl_message:
            "როგორ შემიძლია დაგეხმაროთ?",

        cont_btn_send:
            "გაგზავნა ელფოსტით",

        cont_form_note:
            "თქვენი შეტყობინება პირდაპირ თქვენს ელფოსტის პროგრამაში გაიხსნება.",

        // =====================================================
        // FOOTER
        // =====================================================

        footer_rights:
            "© 2026 KOKOS-LAB. ყველა უფლება დაცულია.",

        footer_consultation:
            "კონსულტაცია",

        footer_contact:
            "კონტაქტი"
    }
};


// ==========================================
// Apply Translations
// ==========================================

function updateLanguage(lang) {

    currentLang =
        lang;


    localStorage.setItem(
        "kokos-lang",
        lang
    );


    document.documentElement.lang =
        lang === "ka"
            ? "ka"
            : "en";


    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    const dictionary =
        translations[lang] ||
        translations.en;


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


    // თუ modal გახსნილია,
    // ენის შეცვლისას მისი შიგთავსიც განახლდეს
    if (
        activeModalPlan &&
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
// Header / Navigation Helpers
// ==========================================

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


            if (!href) return;


            const targetPage =
                href
                    .split("/")
                    .pop()
                    .toLowerCase();


            if (
                targetPage ===
                currentPage
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



// ==========================================
// Smooth Anchor Scrolling
// ==========================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetId =
                    anchor
                        .getAttribute("href");


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


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });



// ==========================================
// Intersection Observer
// ==========================================

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



// ==========================================
// Prevent accidental form resubmission
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
                .forEach(form => {

                    form.reset();

                });

        }

    }
);



// ==========================================
// Final Icon Refresh
// ==========================================

if (window.lucide) {

    lucide.createIcons();

}