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

// Gallery Modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var images = document.querySelectorAll(".gallery-image-cont img");

images.forEach(function(img, index) {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});


// to close the modal
span.onclick = function() {
  modal.style.display = "none";
};



// google translate code
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: "en,fr,ar,es", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}