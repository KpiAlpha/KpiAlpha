
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {  
            header.classList.remove("transparent");
            header.classList.add("solid");
        } else {
            header.classList.remove("solid");
            header.classList.add("transparent");
        }
    });
});

