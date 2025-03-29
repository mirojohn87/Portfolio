// Select the hamburger and menu elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add click event to toggle the menu visibility
hamburger.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Show the menu
    } else {
        menu.style.display = 'none'; // Hide the menu
    }
});