document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const close = document.getElementsByClassName('close')[0];

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            lightbox.style.display = "block";
            lightboxImage.src = this.href;
        });
    });

    close.onclick = function() {
        lightbox.style.display = "none";
    }

    lightbox.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    }

    // Dil değiştirme işlevi
    window.changeLanguage = function() {
        const select = document.getElementById('language-select');
        const language = select.value;

        // Mevcut sayfa URL'sini alın
        const currentUrl = window.location.href;
        
        // Ana sayfa URL'sini belirleyin
        let newUrl;

        if (currentUrl.includes("portfolio.html")) {
            if (language === "tr") {
                newUrl = "portfolio.html";
            } else if (language === "en") {
                newUrl = "portfolio_en.html";
            } else if (language === "es") {
                newUrl = "portfolio_es.html";
            } else if (language === "it") {
                newUrl = "portfolio_it.html";
            } else if (language === "fr") {
                newUrl = "portfolio_fr.html";
            }
        } else if (currentUrl.includes("contact.html")) {
            if (language === "tr") {
                newUrl = "contact.html";
            } else if (language === "en") {
                newUrl = "contact_en.html";
            } else if (language === "es") {
                newUrl = "contact_es.html";
            } else if (language === "it") {
                newUrl = "contact_it.html";
            } else if (language === "fr") {
                newUrl = "contact_fr.html";
            }
        } else if (currentUrl.includes("copyright.html")) {
            if (language === "tr") {
                newUrl = "copyright.html";
            } else if (language === "en") {
                newUrl = "copyright_en.html";
            } else if (language === "es") {
                newUrl = "copyright_es.html";
            } else if (language === "it") {
                newUrl = "copyright_it.html";
            } else if (language === "fr") {
                newUrl = "copyright_fr.html";
            }
        } else {
            if (language === "tr") {
                newUrl = "index.html";
            } else if (language === "en") {
                newUrl = "index_en.html";
            } else if (language === "es") {
                newUrl = "index_es.html";
            } else if (language === "it") {
                newUrl = "index_it.html";
            } else if (language === "fr") {
                newUrl = "index_fr.html";
            }
        }

        window.location.href = newUrl;
    }
});
