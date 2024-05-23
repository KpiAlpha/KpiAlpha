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

function toggleMenu() {
    const menu = document.getElementById('slideMenu');
    if (menu.style.left === '0px') {
        menu.style.left = '-100%';
    } else {
        menu.style.left = '0';
    }
}

document.getElementById('alphaBtn').addEventListener('click', function() {
    hideOtherButtons('alphaBtn');
    loadPageAndToggleOverlay('alpha.html');
});

document.getElementById('kappaBtn').addEventListener('click', function() {
    hideOtherButtons('kappaBtn');
    loadPageAndToggleOverlay('kappa.html');
});

document.getElementById('brotherhoodBtn').addEventListener('click', function() {
    hideOtherButtons('brotherhoodBtn');
    loadPageAndToggleOverlay('brotherhood.html');
});

document.getElementById('involvedBtn').addEventListener('click', function() {
    hideOtherButtons('involvedBtn');
    loadPageAndToggleOverlay('involved.html');
});

document.getElementById('scholarshipBtn').addEventListener('click', function() {
    hideOtherButtons('scholarshipBtn');
    loadPageAndToggleOverlay('scholarship.html');
});

function hideOtherButtons(clickedBtnId) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        if (button.id !== clickedBtnId) {
            button.style.display = 'none';
        }
    });
}

function loadPageAndToggleOverlay(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('overlayPage').innerHTML = this.responseText;
            toggleSlideMenu();
        }
    };
    xhr.send();
    document.getElementById('').addEventListener('click', function() {
        toggleSlideMenu(); 
    });
}





function toggleSlideMenu() {
    document.getElementById('slideMenu').classList.toggle('hidden');
    document.getElementById('overlayPage').classList.toggle('active');
}

document.getElementById('back-Button').addEventListener('click', function() {
    console.log("Back button clicked"); 
    toggleSlideMenu();
});

function goBack() {
    window.history.back();
}







