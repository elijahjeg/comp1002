menuIcon = document.getElementById("menu-icon");

// Toggle navigation links on menu icon click
menuIcon.addEventListener("click", () => {
    const navLinks = document.querySelector("nav ul");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    }
    else {
        navLinks.style.display = "flex";
    }
});

// Ensure nav links are shown when resizing to larger screens
window.addEventListener("resize", () => {
    menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector("nav ul");
    if (window.innerWidth >= 776) {
        navLinks.style.display = "flex";
    }
});