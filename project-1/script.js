menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
    const navLinks = document.querySelector("nav ul");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    }
    else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    }
});