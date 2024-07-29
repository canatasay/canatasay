document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImg');
    var images = document.querySelectorAll('.portfolio-image');

    images.forEach(function (img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    var span = document.getElementsByClassName('close')[0];

    span.onclick = function () {
        modal.style.display = 'none';
    }
});
