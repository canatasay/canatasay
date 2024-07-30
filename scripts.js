document.addEventListener("DOMContentLoaded", function() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const imgSrc = link.getAttribute('href');
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
