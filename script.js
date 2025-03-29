function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (menu.style.right === '0px') {
    menu.style.right = '-200px'; // Hide menu
  } else {
    menu.style.right = '0px'; // Show menu
  }
}