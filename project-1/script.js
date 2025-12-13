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
    if (window.innerWidth > 800) {
        navLinks.style.display = "flex";
    }
});

// Feedback form submission handling
const feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) { // Check if feedbackForm exists on the page
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Show feedback banner
        const feedbackBanner = document.getElementById("feedback-banner");
        feedbackBanner.style.display = "flex";
    
        // Clear form fields
        feedbackForm.reset();
    });

    // Close button handling for feedback banner
    const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", () => {
        const feedbackBanner = document.getElementById("feedback-banner");
        feedbackBanner.style.display = "none";
    });
}