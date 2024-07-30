document.addEventListener("DOMContentLoaded", function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeBtn = document.querySelector('.close');

    document.querySelectorAll('.portfolio-image').forEach(function (image) {
        image.addEventListener('click', function (event) {
            event.preventDefault();
            lightboxImage.src = this.src;
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

    // Mobile menu fix
    document.querySelectorAll('nav ul li').forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            if (this.querySelector('.dropdown-content')) {
                event.stopPropagation();
                this.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });

    document.addEventListener('click', function (event) {
        document.querySelectorAll('.dropdown-content').forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    });
});
