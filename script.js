// ================= MOBILE NAV TOGGLE =================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= CONTACT FORM SUBMIT =================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    form.reset();
});

const track = document.getElementById("sliderTrack");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// Scroll amount = width of one card
const scrollAmount = 320;

rightBtn.addEventListener("click", () => {
    track.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

leftBtn.addEventListener("click", () => {
    track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});