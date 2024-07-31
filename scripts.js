// Lightbox functionality
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".portfolio-image");
    var lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener("click", e => {
            lightbox.classList.add("active");
            var img = document.createElement("img");
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            var close = document.createElement("span");
            close.classList.add("close");
            close.innerHTML = "&times;";
            lightbox.appendChild(close);
            close.addEventListener("click", () => {
                lightbox.classList.remove("active");
            });
        });
    });

    lightbox.addEventListener("click", e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove("active");
    });

    // Dropdown functionality
    var dropdown = document.querySelectorAll(".dropdown");
    dropdown.forEach(menu => {
        menu.addEventListener("mouseenter", e => {
            menu.querySelector(".dropdown-content").classList.add("show");
        });
        menu.addEventListener("mouseleave", e => {
            menu.querySelector(".dropdown-content").classList.remove("show");
        });
    });
});

// Ensure dropdown-content class 'show' is removed on mobile devices
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        var dropdownContent = document.querySelectorAll('.dropdown-content');
        dropdownContent.forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
