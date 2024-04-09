// JavaScript for Menu Button
const menuBtn = document.querySelector('.menu-btn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// JavaScript for Submenu
const submenuItems = document.querySelectorAll('.has-submenu');

submenuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});
