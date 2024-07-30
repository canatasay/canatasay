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
});
