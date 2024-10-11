document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


let currentSlide = 0;
let autoScrollTimer;

function showSlide(index, direction) {
    const slides = document.querySelectorAll('.intro-image');
    const totalSlides = slides.length;

    slides.forEach((slide) => {
        slide.classList.remove('active-slide', 'slide-in-left', 'slide-in-right');
        slide.style.left = '100%';
    });

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    if (direction === 'left') {
        slides[currentSlide].classList.add('slide-in-left');
        slides[currentSlide].style.left = '-100%';
    } else {
        slides[currentSlide].classList.add('slide-in-right');
        slides[currentSlide].style.left = '100%';
    }

    setTimeout(() => {
        slides[currentSlide].classList.add('active-slide');
        slides[currentSlide].style.left = '0';
    }, 20); 

    resetAutoScrollTimer();
}

function nextSlide() {
    showSlide(currentSlide + 1, 'right');
}

function prevSlide() {
    showSlide(currentSlide - 1, 'left');
}

function resetAutoScrollTimer() {
    clearTimeout(autoScrollTimer);
    autoScrollTimer = setTimeout(() => {
        nextSlide();
    }, 5000); 
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.intro-image');
    slides[currentSlide].classList.add('active-slide');
    slides[currentSlide].style.left = '0';

    resetAutoScrollTimer();
});

document.querySelector('.arrow-left').addEventListener('click', () => {
    prevSlide();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    nextSlide();
});

document.addEventListener("DOMContentLoaded", function() {
    const date = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const currentDate = date.getDate();
    const year = date.getFullYear();

    document.getElementById("month").textContent = month;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = currentDate;
    document.getElementById("year").textContent = year;
});

document.querySelectorAll('.sliding-dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active'); 

        let dropdownContent = this.nextElementSibling;

        if (dropdownContent && dropdownContent.classList.contains('sliding-dropdown-content')) {
            if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "flex";
            }
        }
    });
});


document.querySelector('.open-panel-btn').addEventListener('click', function() {
    document.querySelector('.sliding-panel').classList.add('open');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.sliding-panel').classList.remove('open');
});







