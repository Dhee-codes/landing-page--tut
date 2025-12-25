const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-icon");
const menuIconClosed = document.querySelector(".bi-list")
const menuIconOpen = document.querySelector(".bi-x-lg")

menuBtn.addEventListener('click', ()=> {
    let visibility = navBar.getAttribute('data-visible');
    if (visibility === "false") {
        navBar.setAttribute('data-visible', true);
        menuBtn.setAttribute('aria-expanded', true);
        menuIconOpen.classList.add("active");
        menuIconClosed.classList.remove("active");
        navBar.classList.remove("closed");
        navBar.classList.add("open");
        navBar.inert = false;
    } else if (visibility === "true") {
        navBar.setAttribute('data-visible', false);
        menuBtn.setAttribute('aria-expanded', false);
        menuIconOpen.classList.remove("active");
        menuIconClosed.classList.add("active");
        navBar.classList.add("closed");
        navBar.classList.remove("open");
        navBar.inert = true;
    }
});