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
    else {
        navLinks.style.display = "none"; // Hide nav links on smaller screens by default
    }
});

// Fill the empty star ratings when radio buttons are selected
const ratingRadios = document.querySelectorAll('input[name="rating"]');
ratingRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        const ratingValue = parseInt(radio.value);
        const stars = document.querySelectorAll('#rating-section label');
        stars.forEach((star, index) => {
            const img = star.querySelector("img");
            if (index < ratingValue) {
                img.src = "images/star-filled.png";
            }
            else {
                img.src = "images/star-empty.png";
            }
        });
    });
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

    feedbackForm.addEventListener("reset", () => {
        const stars = document.querySelectorAll('#rating-section label');
        stars.forEach((star) => {
            const img = star.querySelector("img");
            img.src = "images/star-empty.png";
        });
    });
}


