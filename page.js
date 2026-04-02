/*
    page.js
    Handles section switching for the single page site.
*/

function showSection(sectionId) {
    const sections = document.querySelectorAll(".page-section");

    sections.forEach(function(section) {
        section.classList.remove("active-section");
        section.classList.add("hidden-section");
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove("hidden-section");
        selectedSection.classList.add("active-section");
    }
}
