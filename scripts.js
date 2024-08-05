// JavaScript kodu
document.addEventListener('DOMContentLoaded', function() {
    const portfolioLink = document.querySelector('nav a[href="#portfolio"]');
    const submenu = portfolioLink.nextElementSibling;
    
    if (submenu && submenu.classList.contains('submenu')) {
        portfolioLink.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';
        });
        
        portfolioLink.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';
        });
        
        submenu.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';
        });
        
        submenu.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';
        });
    }
});
