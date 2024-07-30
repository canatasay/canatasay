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

        if (language === "tr") {
            window.location.href = "index.html"; // Türkçe ana sayfa URL'si
        } else if (language === "en") {
            window.location.href = "index_en.html"; // İngilizce ana sayfa URL'si
        } else if (language === "es") {
            window.location.href = "index_es.html"; // İspanyolca ana sayfa URL'si
        } else if (language === "it") {
            window.location.href = "index_it.html"; // İtalyanca ana sayfa URL'si
        } else if (language === "fr") {
            window.location.href = "index_fr.html"; // Fransızca ana sayfa URL'si
        }
    }
});
