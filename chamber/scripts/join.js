// Forms Actions


// Membership Cards Section
const modalLinks = document.querySelector(".membership-card a");
const modals = document.querySelector("dialog");
const closeButtons = document.querySelector(".close-modal");

modalLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const modalID = link.getAttribute("href");
        const modal = document.querySelector(modalID);

        modal.showModal();
    });
});