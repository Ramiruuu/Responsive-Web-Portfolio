// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('dark-mode-toggle');  // Select the dark mode toggle button

// Load the saved theme preference from localStorage
const currentTheme = localStorage.getItem('theme');

// If the theme is light, apply the light mode styles
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    toggleButton.textContent = "🌙";  // Set the icon to the dark mode icon
} else {
    document.body.classList.remove('light-mode');
    toggleButton.textContent = "🌙";  // Default to dark mode icon
}

// Event listener to toggle dark and light modes
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');  // Toggle light mode class
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');  // Save light theme preference
        toggleButton.textContent = "🌙";  // Dark mode icon for the button
    } else {
        localStorage.setItem('theme', 'dark');  // Save dark theme preference
        toggleButton.textContent = "🌕";  // Light mode icon for the button
    }
});
