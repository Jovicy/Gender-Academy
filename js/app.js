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


// google translate code
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: "en,fr,ar,es", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}