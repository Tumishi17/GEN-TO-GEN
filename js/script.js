/* =========================================================
   GEN TO GEN FOUNDATION WEBSITE
   Main JavaScript File: js/script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. ACCORDION FUNCTIONALITY
       ===================================================== */

    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const content = button.nextElementSibling;

            if (!content || !content.classList.contains("accordion-content")) {
                return;
            }

            const isExpanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));
            content.hidden = isExpanded;

            button.classList.toggle("active", !isExpanded);

        });

    });


    /* =====================================================
       2. SERVICE SEARCH AND FILTERING
       ===================================================== */

    const serviceSearch = document.getElementById("serviceSearch");
    const serviceCards = document.querySelectorAll(".service-card");
    const searchMessage = document.getElementById("searchMessage");

    if (serviceSearch && serviceCards.length > 0) {

        serviceSearch.addEventListener("input", function () {

            const searchTerm = serviceSearch.value.trim().toLowerCase();
            let visibleCards = 0;

            serviceCards.forEach(function (card) {

                const cardText = card.textContent.toLowerCase();
                const matches = cardText.includes(searchTerm);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCards++;
                }

            });

            if (searchMessage) {

                if (searchTerm === "") {
                    searchMessage.textContent = "";
                } else if (visibleCards === 0) {
                    searchMessage.textContent = "No matching services found. Please try another search.";
                } else {
                    searchMessage.textContent = visibleCards + " service(s) found.";
                }

            }

        });

    }


    /* =====================================================
       3. IMAGE GALLERY AND LIGHTBOX
       ===================================================== */

    const galleryImages = document.querySelectorAll(
        ".gallery img, .image-gallery img, [data-lightbox]"
    );

    if (galleryImages.length > 0) {

        let currentImageIndex = 0;

        const lightbox = document.getElementById("lightbox") || createLightbox();
        const lightboxImage = lightbox.querySelector("#lightboxImage");
        const closeButton = lightbox.querySelector(".lightbox-close");
        const previousButton = lightbox.querySelector(".lightbox-prev");
        const nextButton = lightbox.querySelector(".lightbox-next");

        function createLightbox() {

            const overlay = document.createElement("div");

            overlay.id = "lightbox";
            overlay.className = "lightbox";
            overlay.setAttribute("role", "dialog");
            overlay.setAttribute("aria-modal", "true");
            overlay.setAttribute("aria-label", "Image gallery");
            overlay.hidden = true;

            overlay.innerHTML = `
                <button type="button" class="lightbox-close" aria-label="Close image gallery">&times;</button>
                <button type="button" class="lightbox-prev" aria-label="Previous image">&#10094;</button>
                <img id="lightboxImage" src="" alt="">
                <button type="button" class="lightbox-next" aria-label="Next image">&#10095;</button>
            `;

            document.body.appendChild(overlay);

            return overlay;

        }

        function showImage(index) {

            if (index < 0) {
                index = galleryImages.length - 1;
            }

            if (index >= galleryImages.length) {
                index = 0;
            }

            currentImageIndex = index;

            const selectedImage = galleryImages[currentImageIndex];

            lightboxImage.src = selectedImage.src;
            lightboxImage.alt = selectedImage.alt || "Gallery image";

        }

        function openLightbox(index) {

            showImage(index);

            lightbox.hidden = false;
            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

            if (closeButton) {
                closeButton.focus();
            }

        }

        function closeLightbox() {

            lightbox.hidden = true;
            lightbox.classList.remove("active");

            document.body.style.overflow = "";

            galleryImages[currentImageIndex].focus?.();

        }

        function showNextImage() {
            showImage(currentImageIndex + 1);
        }

        function showPreviousImage() {
            showImage(currentImageIndex - 1);
        }

        galleryImages.forEach(function (image, index) {

            image.setAttribute("tabindex", "0");
            image.style.cursor = "pointer";

            image.addEventListener("click", function () {
                openLightbox(index);
            });

            image.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openLightbox(index);
                }

            });

        });

        if (closeButton) {
            closeButton.addEventListener("click", closeLightbox);
        }

        if (nextButton) {
            nextButton.addEventListener("click", showNextImage);
        }

        if (previousButton) {
            previousButton.addEventListener("click", showPreviousImage);
        }

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        document.addEventListener("keydown", function (event) {

            if (lightbox.hidden) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

        });

    }


    /* =====================================================
       4. INTERACTIVE LEAFLET MAP
       ===================================================== */

    const mapElement = document.getElementById("map");

    if (mapElement) {

        const latitude = Number(mapElement.dataset.lat);
        const longitude = Number(mapElement.dataset.lng);

        if (
            typeof L !== "undefined" &&
            Number.isFinite(latitude) &&
            Number.isFinite(longitude) &&
            latitude >= -90 &&
            latitude <= 90 &&
            longitude >= -180 &&
            longitude <= 180
        ) {

            const map = L.map("map").setView(
                [latitude, longitude],
                15
            );

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19
                }
            ).addTo(map);

            L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup("Gen to Gen Foundation")
                .openPopup();

        } else if (typeof L === "undefined") {

            console.error("Leaflet could not be loaded. Check the Leaflet script link.");

        } else {

            console.warn(
                "Map coordinates are missing or invalid. Add verified data-lat and data-lng values to the map element."
            );

        }

    }


    /* =====================================================
       5. FORM VALIDATION
       ===================================================== */

    const forms = document.querySelectorAll(
        "#enquiryForm, #contactForm, form[name='enquiry'], form[name='contact']"
    );

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            let isValid = true;
            let errorMessages = [];

            const nameField = form.querySelector(
                "input[name='name'], input[name='fullName'], input[name='full-name']"
            );

            const emailField = form.querySelector("input[type='email']");

            const phoneField = form.querySelector(
                "input[type='tel'], input[name='phone']"
            );

            const messageField = form.querySelector(
                "textarea[name='message'], textarea[name='details'], textarea"
            );

            const requiredFields = form.querySelectorAll("[required]");

            requiredFields.forEach(function (field) {

                if (!field.value.trim()) {

                    isValid = false;

                    field.setCustomValidity("Please complete this field.");

                } else {

                    field.setCustomValidity("");

                }

            });

            if (nameField && nameField.value.trim().length < 2) {

                isValid = false;

                nameField.setCustomValidity(
                    "Please enter a valid name."
                );

                errorMessages.push("Please enter your full name.");

            }

            if (emailField && emailField.value.trim() !== "") {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(emailField.value.trim())) {

                    isValid = false;

                    emailField.setCustomValidity(
                        "Please enter a valid email address."
                    );

                    errorMessages.push("Please enter a valid email address.");

                }

            }

            if (phoneField && phoneField.value.trim() !== "") {

                const phonePattern = /^[0-9+\s()-]{7,20}$/;

                if (!phonePattern.test(phoneField.value.trim())) {

                    isValid = false;

                    phoneField.setCustomValidity(
                        "Please enter a valid telephone number."
                    );

                    errorMessages.push("Please enter a valid telephone number.");

                }

            }

            if (messageField && messageField.value.trim().length < 10) {

                isValid = false;

                messageField.setCustomValidity(
                    "Please provide at least 10 characters."
                );

                errorMessages.push(
                    "Please provide a message containing at least 10 characters."
                );

            }

            if (!form.checkValidity() || !isValid) {

                event.preventDefault();

                form.reportValidity();

                const formMessage = form.querySelector(".form-message");

                if (formMessage) {

                    formMessage.textContent = errorMessages.length > 0
                        ? errorMessages.join(" ")
                        : "Please complete all required fields correctly.";

                    formMessage.classList.add("error");

                }

                return;

            }

            const formMessage = form.querySelector(".form-message");

            if (formMessage) {

                formMessage.textContent = "Your information is being submitted.";

                formMessage.classList.remove("error");

            }

        });

        form.querySelectorAll("input, textarea, select").forEach(function (field) {

            field.addEventListener("input", function () {
                field.setCustomValidity("");
            });

            field.addEventListener("change", function () {
                field.setCustomValidity("");
            });

        });

    });


    /* =====================================================
       6. GENERAL WEBSITE INTERACTIONS
       ===================================================== */

    const currentYearElements = document.querySelectorAll(".current-year");

    currentYearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* =====================================================
       7. CONSOLE CONFIRMATION
       ===================================================== */

    console.log("Gen to Gen Foundation website JavaScript loaded successfully.");

});