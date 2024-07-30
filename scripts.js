document.addEventListener("DOMContentLoaded", function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeBtn = document.querySelector('.close');

    document.querySelectorAll('.portfolio-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            lightboxImage.src = this.href;
            lightbox.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
