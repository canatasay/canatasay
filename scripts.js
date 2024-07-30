document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var closeButton = document.querySelector('.close');
    
    document.querySelectorAll('.portfolio-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            lightbox.style.display = 'block';
            lightboxImage.src = this.href;
        });
    });
    
    closeButton.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    document.getElementById('language-selector').addEventListener('change', function () {
        var selectedLanguage = this.value;
        // Burada dil değiştirme işlemi yapılabilir.
        console.log('Seçilen dil:', selectedLanguage);
    });
});
