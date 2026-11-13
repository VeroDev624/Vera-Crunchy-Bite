/* =========================================
   MOBILE MENU
========================================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
/* =========================================
   MENU FILTER
========================================= */
const filters = document.querySelectorAll(".filter");
const menuItems = document.querySelectorAll(".menu-card");
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(btn => {
            btn.classList.remove("active");
        });
        filter.classList.add("active");
        const selectedCategory =
            filter.getAttribute("data-filter");
        menuItems.forEach(item => {
            const itemCategory =
                item.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {
                item.style.display = "block";
            } else {

                item.style.display = "none";
            }
        });
    });
});
/* =========================================
   CONTACT FORM
========================================= */
const contactForm = document.querySelector("form");
if (contactForm) {
        contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        alert(
            "Thank you! Your message has been received."
        );
        contactForm.reset();
    }
        }
