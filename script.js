document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const slideMenu = document.getElementById("slideMenu");
    const closeButton = document.getElementById("closeButton");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {  
            header.classList.remove("transparent");
            header.classList.add("solid");
        } else {
            header.classList.remove("solid");
            header.classList.add("transparent");
        }
    });

    hamburger.addEventListener('click', function() {
        slideMenu.style.top = '0';
    });

    closeButton.addEventListener('click', function() {
        slideMenu.style.top = '-100%';
    });
});
