var myNav = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".navbar__link")
window.onscroll = function () {
    "use strict";
    if (window.scrollY >= 100 ) {
        myNav.classList.add("navbar-colored");
        myNav.classList.remove("navbar-transparent");
        navLinks.forEach(element => {
            element.classList.add("navbar__link-colored");
        });
    }
    else {
        myNav.classList.add("navbar-transparent");
        myNav.classList.remove("navbar-colored");
        navLinks.forEach(element => {
            element.classList.remove("navbar__link-colored");
        });
    }
};