/*
    main.js
    Changes addressed:
    - Added DOMContentLoaded entry point
    - Calls initValidation from validation.js
    - Added single-page navigation support using hidden sections
    - Added Log Visit button behavior

    Code written by Reynaldo Moros Spoy for course project use.
*/

document.addEventListener("DOMContentLoaded", function () {
    initValidation("#myform");

    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const sectionId = button.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    const heroVisitBtn = document.getElementById("heroVisitBtn");

    if (heroVisitBtn) {
        heroVisitBtn.addEventListener("click", function () {
            showSection("visitSection");
        });
    }
});
