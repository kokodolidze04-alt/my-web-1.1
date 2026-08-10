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
                                                ? "დაცული შეტყობინების სექცია, საიდანაც კლიენტის წერილები პირდაპირ თქვენს მეილზე მოდის."
                                                : "A dedicated, secure messaging section that sends client inquiries directly to your personal email inbox."
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
                                                ? "ოპტიმიზებული პროცესი, რომელიც უზრუნველყოფს 1-3 გვერდიანი საიტის რეკორდულ დროში დამზადებას."
                                                : "A streamlined process ensuring your 1-3 page website is designed, coded, and launched in record time."
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div class="modal-section">

                        <h3>
                            ⚙️ ${
                                isKa
                                    ? "სამუშაო პროცესი"
                                    : "The Process"
                            }
                        </h3>


                        <div class="process-steps">

                            <div class="step">

                                <span class="step-num">
                                    1
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "სტრატეგია:"
                                                : "Onboarding & Strategy:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ვაგროვებთ მასალებს, ტექსტებს და განვსაზღვრავთ მთავარ მიზნებს."
                                            : "We gather your branding assets, texts, and define your main goals."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    2
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "სტრუქტურა:"
                                                : "Wireframing:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ვქმნით გვერდების მკაფიო და შედეგზე ორიენტირებულ განლაგებას."
                                            : "Creating a clear, conversion-focused layout structure for your pages."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    3
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "დეველოპმენტი:"
                                                : "Front-End Development:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ვწერთ სუფთა, მობილურზე მორგებულ HTML/CSS კოდს."
                                            : "Writing clean, mobile-optimized HTML/CSS code from scratch."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    4
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "ტესტირება:"
                                                : "QA & Testing:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ვამოწმებთ ფორმის გამართულობასა და ადაპტირებადობას."
                                            : "Checking form functionality, responsiveness, and cross-browser compatibility."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    5
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "გაშვება:"
                                                : "Launch & Handover:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "საიტის სერვერზე განთავსება და პროექტის ჩაბარება."
                                            : "Final deployment to the live server and delivering your fast website."
                                    }

                                </p>

                            </div>

                        </div>

                    </div>



                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "ვერ ჩამოყალიბდით?"
                                    : "Not sure if this is the right fit?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "განვიხილოთ თქვენი საჭიროებები და ვიპოვოთ საუკეთესო გამოსავალი."
                                    : "Let's discuss your specific needs and find the perfect solution for your business."
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
                                                ? "საბაზისო მეტა-ტეგები, რათა Google-მა ადვილად აღმოაჩინოს თქვენი საიტი."
                                                : "Foundational meta-tags, image alt-texts, and structure so Google can easily index and rank your pages."
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div class="modal-section">

                        <h3>
                            ⚙️ ${
                                isKa
                                    ? "სამუშაო პროცესი"
                                    : "The Process"
                            }
                        </h3>


                        <div class="process-steps">

                            <div class="step">

                                <span class="step-num">
                                    1
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "არქიტექტურა:"
                                                : "Discovery & Architecture:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "8 გვერდამდე სტრუქტურის დაგეგმვა."
                                            : "Mapping out the user journey and structure for up to 8 pages."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    2
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "UI/UX დიზაინი:"
                                                : "UI/UX Design:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ინტერაქტიული ელემენტებისა და გალერეების დაპროექტება."
                                            : "Designing interactive elements, light/dark themes, and structured galleries."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    3
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "დეველოპმენტი:"
                                                : "Development & Integration:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "საიტის აწყობა და Google Maps-ის ინტეგრაცია."
                                            : "Coding the site and embedding Google Maps & necessary APIs."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    4
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "SEO გამართვა:"
                                                : "On-Page SEO Setup:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "მეტა-ტეგების გამართვა და ფოტოების ოპტიმიზაცია."
                                            : "Structuring meta-tags and optimizing all assets for search engines."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    5
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "ტესტირება:"
                                                : "Staging & Revisions:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "საიტის შემოწმება და შესწორებები გაშვებამდე."
                                            : "You test the fully functional site on a private link before we finalize."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    6
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "გაშვება:"
                                                : "Deployment & Go-Live:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ოფიციალური გაშვება Google-ში ინდექსაციით."
                                            : "Official launch and final indexing checks."
                                    }

                                </p>

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



        premium: {

            title:
                isKa
                    ? "👑 Premium პაკეტი"
                    : "👑 Premium Package",


            description:
                isKa
                    ? "იდეალურია დიდი კომპანიებისთვის, ონლაინ მაღაზიებისა და რთული პროექტებისთვის."
                    : "Perfect for large companies, e-commerce, and complex projects.",


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
                                                ? "CMS ინტეგრაცია"
                                                : "CMS Integration"
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
                                                ? "მართვის სისტემა, საიდანაც თავად შეძლებთ გვერდების დამატებასა და ტექსტების ცვლილებას."
                                                : "A powerful back-end dashboard allowing you to add unlimited pages, manage blogs, and update content yourself."
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
                                                ? "ღრმა ტექნიკური ოპტიმიზაცია ძიების შედეგებში მაღალი პოზიციებისთვის."
                                                : "Deep technical optimization and keyword structuring designed to push your site higher in search engine results."
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
                                                ? "სრული წარმადობის ოპტიმიზაცია"
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
                                                ? "ფაილების შეკუმშვა Google-ის სიჩქარის მაღალი ქულის (90+) მისაღწევად."
                                                : "Advanced image compression and code minification to guarantee top-tier speed scores (90+) on Google."
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
                                                ? "მიიღებთ დეტალურ სახელმძღვანელოს საიტის მართვისთვის."
                                                : "You receive a comprehensive, easy-to-understand written guide on how to use and manage your new website."
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
                                                ? "ანალიტიკა და მხარდაჭერა"
                                                : "Analytics & Priority Support"
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
                                                ? "Google Analytics-ის გამართვა და პრიორიტეტული ტექნიკური დახმარება."
                                                : "Integration of tracking tools (like Google Analytics) to monitor traffic, plus fast-tracked technical assistance from me."
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div class="modal-section">

                        <h3>
                            ⚙️ ${
                                isKa
                                    ? "სამუშაო პროცესი"
                                    : "The Process"
                            }
                        </h3>


                        <div class="process-steps">

                            <div class="step">

                                <span class="step-num">
                                    1
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "ანალიზი:"
                                                : "Deep Discovery & Tech Stack:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "CMS არქიტექტურისა და მონაცემთა ბაზის დაგეგმვა."
                                            : "Defining your CMS architecture and complex database needs."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    2
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "UI/UX პროტოტიპი:"
                                                : "Custom UI/UX & Prototyping:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "უნიკალური დიზაინ-სისტემის შექმნა."
                                            : "Crafting a premium, unique design system tailored for your scale."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    3
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "Full-Stack დეველოპმენტი:"
                                                : "Full-Stack Development:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "ინტერფეისისა და CMS-ის უსაფრთხო დაკავშირება."
                                            : "Building the front-end interface and connecting the Headless CMS securely."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    4
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "ინტეგრაციები:"
                                                : "Advanced Integrations:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "Google Analytics-ისა და SEO-ს სრული გამართვა."
                                            : "Setting up Google Analytics, tracking pixels, and advanced on-page SEO."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    5
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "QA ოპტიმიზაცია:"
                                                : "Rigorous QA & Performance:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "მაქსიმალური სიჩქარის ტესტირება Core Web Vitals-ზე."
                                            : "Aggressive optimization to guarantee a 90+ score on Core Web Vitals."
                                    }

                                </p>

                            </div>



                            <div class="step">

                                <span class="step-num">
                                    6
                                </span>

                                <p>

                                    <strong>
                                        ${
                                            isKa
                                                ? "სწავლება:"
                                                : "Training & Handover:"
                                        }
                                    </strong>

                                    ${
                                        isKa
                                            ? "გაშვება, პრიორიტეტული მხარდაჭერა და დოკუმენტაცია."
                                            : "Final launch, priority support setup, and providing custom documentation."
                                    }

                                </p>

                            </div>

                        </div>

                    </div>



                    <div class="modal-cta-box">

                        <h4>
                            ${
                                isKa
                                    ? "მზად ხართ მასშტაბირებისთვის?"
                                    : "Ready to scale your business?"
                            }
                        </h4>


                        <p>
                            ${
                                isKa
                                    ? "დავგეგმოთ ციფრული სტრატეგია თქვენი გრძელვადიანი მიზნებისთვის."
                                    : "Let's map out a custom digital strategy tailored precisely to your long-term goals."
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



// ინახავს ამჟამად გახსნილ პაკეტს
let activeModalPlan = null;



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

            <h2>
                ${data.title}
            </h2>


            <p>
                <strong>
                    ${data.description}
                </strong>
            </p>


            <hr
                style="
                    margin: 20px 0;
                    border: 0;
                    border-top: 1px solid #eee;
                "
            >


            ${data.content}


            <a
                href="cont.html"
                class="primary-btn"
                style="
                    display: inline-block;
                    margin-top: 20px;
                    text-decoration: none;
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

    detailsButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

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

            }
        );

    });


    const closeModal = () => {

        modalOverlay.classList.add(
            "hidden"
        );

        activeModalPlan = null;

    };


    if (closeModalBtn) {

        closeModalBtn.addEventListener(
            "click",
            closeModal
        );

    }


    modalOverlay.addEventListener(
        "click",
        (e) => {

            if (
                e.target === modalOverlay
            ) {

                closeModal();

            }

        }
    );

}



// ==========================================
// Mailto: საკონტაქტო ფორმის გაგზავნა
// ==========================================

const contactForm =
    document.getElementById(
        "contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "user_name"
                ).value;


            const email =
                document.getElementById(
                    "user_email"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value;


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



// ==========================================
// Translation Logic
// ==========================================

const translations = {

    en: {

        // Navigation

        nav_about: "About",

        nav_services: "Services",

        nav_contact: "Contact",

        nav_home: "Home",

        nav_work: "Approach",

        btn_back: "Back",



        // Index Hero

        hero_title:
            "Hello, I am KOKO",

        hero_subtitle:
            "Frontend developer creating modern, responsive, and user-centric websites.",



        // Services

        service_web_title:
            "Web Development",

        service_web_desc:
            "Creating modern, responsive, and high-performance websites.",

        service_3d_title:
            "3D Visualization",

        service_3d_desc:
            "Creating realistic 3D product models and immersive visualizations.",

        service_3d_badge:
            "reconstructing",



        // Testimonials

        testimonials_title:
            "What Clients Say",

        review_1:
            '"Tornike completely transformed our online presence. The web interface he built is not only visually stunning but perfectly optimized. His frontend skills and attention to detail are on another level."',

        review_2:
            '"We needed hyper-realistic 3D models for our new product launch. Tornike delivered assets that looked better than real life. The lighting and textures were flawless, saving us thousands on photography."',

        review_3:
            '"Working with Tornike was a seamless experience. He translated our complex ideas into a responsive, pixel-perfect website in record time. His communication is as impressive as his coding."',

        review_4:
            '"Tornike optimized our web application, reducing load times by 60%. The UI is now incredibly fast, and our users are loving the seamless experience. Truly top-tier frontend optimization."',

        review_5:
            '"I wanted a modern, glassmorphism UI with complex interactions, and he nailed it perfectly. The CSS animations are buttery smooth and don\'t affect browser performance at all."',

        review_6:
            '"Finally, a frontend developer who understands mobile-first design! The website he built looks and works flawlessly on every device, browser, and screen size we tested."',

        review_7:
            '"Clean, maintainable, and highly scalable frontend architecture. Tornike stepped in and refactored our messy JavaScript into a beautifully structured, modern codebase."',


        role_startup_founder:
            "Tech Startup Founder",

        role_product_manager:
            "Product Manager",

        role_creative_director:
            "Creative Director",

        role_tech_lead:
            "Technical Lead",

        role_uiux_designer:
            "UI/UX Designer",

        role_ecommerce_manager:
            "E-commerce Manager",

        role_software_engineer:
            "Senior Software Engineer",



        // Web Page

        web_section_kicker:
            "WEB DEVELOPMENT",

        web_hero_title:
            "Modern Websites <br> Built to Grow Your Business",

        web_hero_desc:
            "I create fast, responsive, and modern websites that combine clean design with reliable performance. Every project is crafted to help your business stand out online.",

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

        btn_view_details:
            "View Details",

        btn_lets_talk:
            "Let's Talk",

        badge_popular:
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
            "Analytics & Priority Support",

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
            "Personalized UI/UX",

        feat_complex_int:
            "Complex Integrations",

        feat_everything_premium:
            "Everything in Premium",

        target_startups:
            "Startups",

        target_unique_proj:
            "Unique Projects",

        target_your_designs:
            "Everything at your designs",



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



        // Process

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



        // CTA

        cta_kicker:
            "READY TO START?",

        cta_title:
            "Let's build your website.",

        cta_desc:
            "Tell me about your project and I'll help you choose the right approach.",



        // Home

        home_eyebrow:
            "KOKOS-LAB · DIGITAL STUDIO",

        home_hero_title:
            "Digital experiences<br>built to <span>stand out.</span>",

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

        home_web_long_desc:
            "Modern, responsive, high-performance websites built around your goals, your content, and your audience.",

        home_view_service:
            "View service",

        home_3d_badge:
            "3D SERVICE",

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



        // Consultation

        consult_kicker:
            "FREE CONSULTATION",

        consult_back:
            "Back to Web Development",

        consult_brand:
            "KOKOS-LAB",

        consult_title:
            "Free Consultation",

        consult_desc:
            "Book a free, no-obligation call to discuss your project. Read the FAQs below to prepare, then reach out!",

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



        // Contact

        cont_back_home:
            "Back to Home",

        cont_get_in_touch:
            "GET IN TOUCH",

        cont_talk_title:
            "Let's talk <br><span>about your project</span>",

        cont_talk_desc:
            "Whether you have a specific project in mind or just want to explore options, I'm here to help you build something great.",

        cont_create_title:
            "Let's create <span>something.</span>",

        cont_follow_connect:
            "Follow & Connect",

        cont_send_message:
            "Send a Message",

        cont_form_desc:
            "Tell me a little about your project and I'll get back to you.",

        cont_email_label:
            "EMAIL",

        cont_phone_label:
            "PHONE",

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

        cont_placeholder_name:
            "John Doe",

        cont_placeholder_email:
            "john@example.com",

        cont_placeholder_message:
            "Tell me about your project...",



        // Footer

        footer_rights:
            "© 2026 KOKOS-LAB. All rights reserved.",

        footer_contact:
            "Contact",

        footer_consultation:
            "Consultation"

    },



    // =====================================================
    // GEORGIAN
    // =====================================================

    ka: {

        // Navigation

        nav_about:
            "ჩემ შესახებ",

        nav_services:
            "სერვისები",

        nav_contact:
            "კონტაქტი",

        nav_home:
            "მთავარი",

        nav_work:
            "მიდგომა",

        btn_back:
            "უკან",



        // Index Hero

        hero_title:
            "გამარჯობა, მე ვარ თორნიკე",

        hero_subtitle:
            "Front-end დეველოპერი, ვქმნი თანამედროვე, ადაპტირებად და მომხმარებელზე მორგებულ ვებსაიტებს.",



        // Services

        service_web_title:
            "ვებ დეველოპმენტი",

        service_web_desc:
            "თანამედროვე, სწრაფი და ყველა მოწყობილობაზე მორგებული საიტების დამზადება.",

        service_3d_title:
            "3D ვიზუალიზაცია",

        service_3d_desc:
            "რეალისტური 3D პროდუქტის მოდელები და ინტერაქტიული ვიზუალიზაცია.",

        service_3d_badge:
            "რეკონსტრუქცია",



        // Testimonials

        testimonials_title:
            "რას ამბობენ კლიენტები",

        review_1:
            '"თორნიკემ სრულიად შეცვალა ჩვენი ონლაინ იმიჯი. ვებ-ინტერფეისი, რომელიც მან შექმნა, არა მხოლოდ ვიზუალურად არის შთამბეჭდავი, არამედ იდეალურად ოპტიმიზირებულიც. მისი უნარები ახალ დონეზეა."',

        review_2:
            '"ახალი პროდუქტისთვის გვჭირდებოდა ჰიპერ-რეალისტური 3D მოდელები. თორნიკემ იმაზე უკეთესი შედეგი დადო, ვიდრე ველოდით. განათება და ტექსტურები უნაკლო იყო."',

        review_3:
            '"თორნიკესთან მუშაობა ძალიან კომფორტული იყო. მან ჩვენი რთული იდეები რეკორდულ დროში აქცია ადაპტირებად, პიქსელებამდე დახვეწილ ვებსაიტად."',

        review_4:
            '"თორნიკემ გააუმჯობესა ჩვენი ვებ-აპლიკაცია და ჩატვირთვის დრო 60%-ით შეამცირა. UI ახლა საოცრად სწრაფია. ნამდვილად უმაღლესი დონის ოპტიმიზაციაა."',

        review_5:
            '"მინდოდა თანამედროვე Glassmorphism დიზაინი რთული ინტერაქციებით და მან იდეალურად შეასრულა. CSS ანიმაციები ძალიან რბილია და ბრაუზერს საერთოდ არ ტვირთავს."',

        review_6:
            '"ბოლოს და ბოლოს ვიპოვეთ დეველოპერი, ვისაც კარგად ესმის mobile-first დიზაინი! საიტი იდეალურად მუშაობს ყველა მოწყობილობასა და ეკრანის ზომაზე."',

        review_7:
            '"სუფთა, მოწესრიგებული და მასშტაბირებადი არქიტექტურა. თორნიკემ ჩვენი არეული JavaScript კოდი გარდაქმნა ულამაზესად სტრუქტურირებულ ბაზად."',


        role_startup_founder:
            "ტექ სტარტაპის დამფუძნებელი",

        role_product_manager:
            "პროდუქტის მენეჯერი",

        role_creative_director:
            "კრეატიული დირექტორი",

        role_tech_lead:
            "ტექნიკური ლიდი",

        role_uiux_designer:
            "UI/UX დიზაინერი",

        role_ecommerce_manager:
            "E-commerce მენეჯერი",

        role_software_engineer:
            "უფროსი პროგრამული ინჟინერი",



        // Web Page

        web_section_kicker:
            "ვებ დეველოპმენტი",

        web_hero_title:
            "თანამედროვე ვებსაიტები <br> თქვენი ბიზნესის გასაზრდელად",

        web_hero_desc:
            "ვქმნი სწრაფ, ადაპტირებად და თანამედროვე ვებსაიტებს, რომლებიც აერთიანებს დახვეწილ დიზაინსა და საიმედო წარმადობას. თითოეული პროექტი შექმნილია იმისთვის, რომ თქვენი ბიზნესი გამოირჩეოდეს ონლაინ სივრცეში.",

        btn_get_consultation:
            "უფასო კონსულტაცია",


        pricing_title:
            "აირჩიეთ თქვენთვის შესაფერისი პაკეტი",

        pricing_subtitle:
            "თითოეული ვებსაიტი იქმნება მაღალი წარმადობის, ადაპტირებადობისა და სუფთა დიზაინის გათვალისწინებით.",


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

        btn_view_details:
            "დეტალურად",

        btn_lets_talk:
            "დავიწყოთ",

        badge_popular:
            "ყველაზე პოპულარული",



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
            "მუქი და განათებული თემები",

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
            "CMS ინტეგრაცია (მართვის სისტემა)",

        feat_adv_seo:
            "გაფართოებული SEO",

        feat_perf_opt:
            "სრული წარმადობის ოპტიმიზაცია",

        feat_docs:
            "მართვის დოკუმენტაცია",

        feat_analytics:
            "ანალიტიკა და პრიორიტეტული მხარდაჭერა",

        target_large_companies:
            "დიდი კომპანიებისთვის",

        target_ecommerce:
            "ონლაინ მაღაზიებისთვის",



        // Custom

        feat_figma:
            "Figma დიზაინის აწყობა",

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
            "ნებისმიერი დიზაინის მიხედვით",



        // Why KOKOS-LAB

        why_kicker:
            "რატომ KOKOS-LAB",

        why_title:
            "ვებსაიტი მხოლოდ არსებობისთვის არ უნდა იყოს.",

        why_desc:
            "მან უნდა გადმოსცეს თქვენი ღირებულება, სწორად წარმართოს ვიზიტორი და ონლაინ სივრცეშიც ისეთივე პროფესიონალურად წარმოაჩინოს თქვენი ბიზნესი, როგორც რეალურ ცხოვრებაში.",

        why_performance_title:
            "წარმადობა",

        why_performance_desc:
            "სწრაფი ჩატვირთვა, ოპტიმიზირებული რესურსები, ადაპტირებადი განლაგება და სუფთა front-end კოდი.",

        why_responsive_title:
            "ადაპტირებული დიზაინი",

        why_responsive_desc:
            "ვებსაიტი შექმნილია ისე, რომ სწორად იმუშაოს ტელეფონებზე, ტაბლეტებზე, ლეპტოპებსა და დესკტოპებზე.",



        // Process

        process_kicker:
            "პროცესი",

        process_title:
            "იდეიდან გაშვებამდე.",

        process_discovery_title:
            "კვლევა",

        process_discovery_desc:
            "განვიხილავთ თქვენს ბიზნესს, მიზნებს, აუდიტორიას, სასურველ მაგალითებსა და პროექტის მოთხოვნებს.",

        process_structure_title:
            "სტრუქტურა",

        process_structure_desc:
            "ვადგენთ გვერდებს, კონტენტის იერარქიას, მომხმარებლის გზას და ვიზუალურ მიმართულებას.",

        process_development_title:
            "დეველოპმენტი",

        process_development_desc:
            "დამტკიცებული მიმართულება გარდაიქმნება დახვეწილ, ადაპტირებად და ფუნქციურ ვებსაიტად.",

        process_launch_title:
            "გაშვება",

        process_launch_desc:
            "საბოლოო ტესტირება, ოპტიმიზაცია, განთავსება და პროექტის ჩაბარება.",



        // CTA

        cta_kicker:
            "მზად ხართ დასაწყებად?",

        cta_title:
            "შევქმნათ თქვენი ვებსაიტი.",

        cta_desc:
            "მომიყევით თქვენი პროექტის შესახებ და დაგეხმარებით სწორი მიდგომის არჩევაში.",



        // Home

        home_eyebrow:
            "KOKOS-LAB · ციფრული სტუდია",

        home_hero_title:
            "ციფრული გამოცდილებები<br>რომლებიც <span>გამოირჩევა.</span>",

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
            "ინტერფეისიდან, რომელსაც თქვენი მომხმარებელი იყენებს, ვიზუალებამდე, რომლებიც მას დაამახსოვრდება.",

        home_web_long_desc:
            "თანამედროვე, ადაპტირებადი და მაღალი წარმადობის ვებსაიტები, რომლებიც თქვენს მიზნებზე, კონტენტსა და აუდიტორიაზეა მორგებული.",

        home_view_service:
            "სერვისის ნახვა",

        home_3d_badge:
            "3D სერვისი",

        home_3d_long_desc:
            "რეალისტური პროდუქტის მოდელები და ვიზუალიზაციები, რომლებიც პროდუქტს კამერის წინ გამოჩენამდეც წარმოაჩენს.",

        home_talk_about_3d:
            "განვიხილოთ თქვენი პროექტი",

        home_position_kicker:
            "რატომ KOKOS-LAB",

        home_position_title:
            "არა მხოლოდ დასრულებული ეკრანი. დასრულებული გამოცდილება.",

        home_position_desc:
            "თითოეულ პროექტს მთლიან გამოცდილებად ვუდგები — პირველი იდეიდან და სტრუქტურიდან საბოლოო ადაპტირებად შედეგამდე.",

        home_point_one_title:
            "მიზანი პირველ ადგილზე",

        home_point_one_desc:
            "სტრუქტურა იწყება იმით, თუ რისი მიღწევა სჭირდება პროექტს.",

        home_point_two_title:
            "სუფთა შესრულება",

        home_point_two_desc:
            "ადაპტირებადი განლაგება, სუფთა კოდი და ყურადღება მცირე დეტალების მიმართ.",

        home_point_three_title:
            "პირდაპირი თანამშრომლობა",

        home_point_three_desc:
            "პირდაპირ იმ ადამიანთან მუშაობთ, რომელიც თქვენს პროექტს ქმნის.",

        home_process_kicker:
            "მიდგომა",

        home_process_title:
            "იდეიდან საბოლოო შედეგამდე.",

        home_process_one_title:
            "კვლევა",

        home_process_one_desc:
            "განვიხილავთ თქვენს ბიზნესს, მიზნებს, აუდიტორიას, სასურველ მაგალითებსა და პროექტის მოთხოვნებს.",

        home_process_two_title:
            "სტრუქტურა",

        home_process_two_desc:
            "ვადგენთ გვერდებს, კონტენტის იერარქიას, მომხმარებლის გზას და ვიზუალურ მიმართულებას.",

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
            "შევქმნათ რაღაც, რაც დაამახსოვრდებათ.",

        home_cta_desc:
            "მომიყევით თქვენი პროექტის შესახებ და ერთად ვიპოვოთ სწორი მიმართულება.",

        home_cta_button:
            "დავიწყოთ საუბარი",



        // Consultation

        consult_kicker:
            "უფასო კონსულტაცია",

        consult_back:
            "უკან ვებ დეველოპმენტზე",

        consult_brand:
            "KOKOS-LAB",

        consult_title:
            "უფასო კონსულტაცია",

        consult_desc:
            "დაჯავშნეთ უფასო ზარი თქვენი პროექტის განსახილველად. გაეცანით ხშირად დასმულ კითხვებს და დამიკავშირდით!",

        faq_kicker:
            "დაწყებამდე",

        faq_main_title:
            "ხშირად დასმული კითხვები",

        faq_q1:
            "რამდენ ხანს გრძელდება კონსულტაცია?",

        faq_a1:
            "ჩვეულებრივ 15-დან 30 წუთამდე. განვიხილავთ თქვენს მიზნებს, სამიზნე აუდიტორიას და დიზაინის სტილს.",

        faq_q2:
            "რა უნდა მოვამზადო წინასწარ?",

        faq_a2:
            "მხოლოდ ზოგადი იდეა იმისა, თუ რისი მიღწევა გსურთ საიტით. თუ მოგწონთ კონკრეტული საიტები, მათი ლინკების მომზადება დიდი პლუსი იქნება!",

        faq_q3:
            "მართლა უფასოა?",

        faq_a3:
            "დიახ! საწყისი კონსულტაცია 100%-ით უფასოა იმის დასადგენად, რამდენად შევესაბამებით თქვენს პროექტს.",

        consult_contact_kicker:
            "ვისაუბროთ",

        consult_contact_ready:
            "მზად ხართ დასაწყებად? დამიკავშირდით:",

        consult_email_label:
            "ელ. ფოსტა",

        consult_phone_label:
            "ტელეფონი",

        consult_messaging_label:
            "შეტყობინებები",

        consult_messaging_value:
            "WhatsApp / Telegram",



        // Contact

        cont_back_home:
            "მთავარზე დაბრუნება",

        cont_get_in_touch:
            "დამიკავშირდით",

        cont_talk_title:
            "ვისაუბროთ <br><span>თქვენს პროექტზე</span>",

        cont_talk_desc:
            "გაქვთ კონკრეტული იდეა თუ უბრალოდ ვარიანტების განხილვა გსურთ, მე მზად ვარ დაგეხმაროთ რაღაც დიდებულის შექმნაში.",

        cont_create_title:
            "შევქმნათ <span>რაღაც განსაკუთრებული.</span>",

        cont_follow_connect:
            "გამომყევით და დამიკავშირდით",

        cont_send_message:
            "გამომიგზავნეთ შეტყობინება",

        cont_form_desc:
            "მომიყევით ცოტა თქვენი პროექტის შესახებ და დაგიკავშირდებით.",

        cont_email_label:
            "ელ. ფოსტა",

        cont_phone_label:
            "ტელეფონი",

        cont_lbl_name:
            "თქვენი სახელი",

        cont_lbl_email:
            "ელ. ფოსტის მისამართი",

        cont_lbl_message:
            "რით შემიძლია დაგეხმაროთ?",

        cont_btn_send:
            "გაგზავნა ელ.ფოსტით",

        cont_form_note:
            "თქვენი შეტყობინება პირდაპირ გაიხსნება თქვენს ელფოსტის პროგრამაში.",

        cont_placeholder_name:
            "მაგ. გიორგი",

        cont_placeholder_email:
            "მაგ. giorgi@example.com",

        cont_placeholder_message:
            "მომიყევით თქვენი პროექტის შესახებ...",



        // Footer

        footer_rights:
            "© 2026 KOKOS-LAB. ყველა უფლება დაცულია.",

        footer_contact:
            "კონტაქტი",

        footer_consultation:
            "კონსულტაცია"

    }

};



// ==========================================
// Current Language
// ==========================================

let currentLang =
    localStorage.getItem("site_lang") || "ka";



// ==========================================
// Translation Function
// ==========================================

function updateLanguage(lang) {

    const dictionary =
        translations[lang];


    if (!dictionary) {
        return;
    }



    // -----------------------------------------
    // Normal text / HTML translations
    // -----------------------------------------

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

                const value =
                    dictionary[key];


                /*
                 * If translation contains HTML,
                 * preserve the HTML structure.
                 */

                if (
                    value.includes("<br>") ||
                    value.includes("<span>") ||
                    value.includes("<b>")
                ) {

                    element.innerHTML =
                        value;

                } else {

                    element.textContent =
                        value;

                }

            }

        });



    // -----------------------------------------
    // Placeholder translations
    // -----------------------------------------

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

                element.setAttribute(
                    "placeholder",
                    dictionary[key]
                );

            }

        });



    // -----------------------------------------
    // ARIA label translations
    // -----------------------------------------

    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-aria-label"
                );


            if (
                Object.prototype.hasOwnProperty.call(
                    dictionary,
                    key
                )
            ) {

                element.setAttribute(
                    "aria-label",
                    dictionary[key]
                );

            }

        });



    // -----------------------------------------
    // Language button
    // -----------------------------------------

    const langBtn =
        document.getElementById(
            "lang-toggle"
        );


    if (langBtn) {

        langBtn.textContent =
            lang === "en"
                ? "GE"
                : "EN";

    }



    // -----------------------------------------
    // Re-render active pricing modal
    // -----------------------------------------

    if (
        typeof activeModalPlan !==
            "undefined" &&
        activeModalPlan &&
        typeof renderModalContent ===
            "function"
    ) {

        renderModalContent(
            activeModalPlan
        );

    }



    // -----------------------------------------
    // Save language
    // -----------------------------------------

    localStorage.setItem(
        "site_lang",
        lang
    );



    // -----------------------------------------
    // Refresh icons
    // -----------------------------------------

    if (window.lucide) {

        lucide.createIcons();

    }

}