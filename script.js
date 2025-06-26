// Select the theme toggle button from the document
const themeToggle = document.querySelector('.theme-toggle');

// Check if a theme is already saved in the user's browser
const savedTheme = localStorage.getItem('theme');

// If a 'dark' theme is saved, apply it immediately when the page loads
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    // Change the icon to a sun
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Add an event listener for the click on the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Check if the body now has the 'dark-mode' class
    if (document.body.classList.contains('dark-mode')) {
        // If it's dark mode, change the icon to a sun
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        // Save the user's preference to their browser
        localStorage.setItem('theme', 'dark');
    } else {
        // If it's not dark mode, change the icon back to a moon
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        // Save the user's preference to their browser
        localStorage.setItem('theme', 'light');
    }
});