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
    loadPageAndToggleOverlay('Involved.html');
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




document.addEventListener("DOMContentLoaded", function () {
    const discoverElement = document.getElementById("discover");
    setInterval(() => {
        if (discoverElement.style.opacity === '1') {
            discoverElement.style.opacity = '0';
            discoverElement.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            discoverElement.style.opacity = '1';
            discoverElement.style.transform = 'translateX(-50%) translateY(0)';
        }
    }, 3000); 
});

function showInfo(infoIndex) {
    var infoBox = document.getElementById('infoBox');
    var content = '';

    // Clear the content of the infoBox
    infoBox.innerHTML = '';

    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add active class to the clicked button
    buttons[infoIndex - 1].classList.add('active');

    // Set the content based on the infoIndex
    switch (infoIndex) {
        case 1:
            content = `
                <h2>Founding of Alpha Phi Alpha</h2>
                <p>Alpha Phi Alpha was founded on December 4, 1906, at Cornell University by the "Seven Jewels".</p>
            `;
            break;
        case 2:
            content = `
                <h2>Early Years (1910s - 1940s)</h2>
                <p>The fraternity expanded to various universities and became involved in the civil rights movement.</p>
            `;
            break;
        case 3:
            content = `
                <h2>Post-War Growth (1950s - 1960s)</h2>
                <p>Alpha Phi Alpha's influence grew post-World War II, with members playing pivotal roles in civil rights actions.</p>
            `;
            break;
        case 4:
            content = `
                <h2>National Campaigns (1970s - 1980s)</h2>
                <p>Launched important programs like "Go to High School, Go to College" and "A Voteless People is a Hopeless People".</p>
            `;
            break;
        case 5:
            content = `
                <h2>Founding of the Kappa Pi Chapter (1975)</h2>
                <p>The Kappa Pi Chapter was established at the College of William & Mary on May 31, 1975.</p>
            `;
            break;
        case 6:
            content = `
                <h2>Modern Era (1990s - Present)</h2>
                <p>The Kappa Pi Chapter continues to excel in community service, academic achievement, and leadership development.</p>
            `;
            break;
        default:
            content = `
                <p>No information available</p>
            `;
            break;
    }

    infoBox.innerHTML = content;
}


  
  
  
  
  









