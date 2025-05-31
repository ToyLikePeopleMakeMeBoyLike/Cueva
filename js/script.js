document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links'); // Corrected: Ensure this targets the <ul> with class "nav-links"

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('active');

            const isExpanded = navLinks.classList.contains('nav-active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Optional: Placeholder Event Listeners for Hero Buttons
    // Using specific selectors for hero buttons
    const watchNowButton = document.querySelector('.hero-content button:first-of-type');
    const addToListButton = document.querySelector('.hero-content button:last-of-type');

    if (watchNowButton) {
        watchNowButton.addEventListener('click', () => {
            console.log('Watch Now clicked! (Hero Placeholder)');
        });
    }

    if (addToListButton) {
        addToListButton.addEventListener('click', () => {
            console.log('Add to My List clicked! (Hero Placeholder)');
        });
    }

    // Placeholder for the search button
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input[type="text"]');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', (e) => {
            // e.preventDefault(); // Only if it's a submit button inside a form
            if (searchInput.value.trim() !== '') {
                console.log(`Search initiated for: "${searchInput.value.trim()}" (Placeholder)`);
            } else {
                console.log('Search button clicked with empty input. (Placeholder)');
            }
        });
    }
});
