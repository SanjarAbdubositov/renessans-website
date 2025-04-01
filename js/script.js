document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const faqSection = document.querySelector(".faq-questions");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("open");

        if (navLinks.classList.contains("active")) {
            faqSection.style.display = "none"; 
        } else {
            faqSection.style.display = "block";
        }
    });

    menuBtn.addEventListener("click", function () {
        if (menuBtn.classList.contains("open")) {
            menuBtn.innerHTML = "✖"; 
            menuBtn.style.transform = "rotate(180deg)";
        } else {
            menuBtn.innerHTML = "&#9776;"; 
            menuBtn.style.transform = "rotate(0deg)";
        }
    });

    if (window.location.pathname.endsWith("index.html")) {
        window.history.pushState({}, "", "/home");
    }   
});

const developerName = 'Sanjar Abdubositov'
const developerPhone = 943560901
const developerNote = '#2025 Barcha huquqlar himoyalangan'
console.log('Dasturchi:', developerName);
console.log('Telefon raqami:', developerPhone);
console.log(developerNote);
