// FORM ACTIONS


// MEMBERSHIP CARDS SECTION
const modalLinks = document.querySelector(".membership-card a");
const modals = document.querySelector("dialog");
const closeButtons = document.querySelector(".close-modal");

//Show modals
modalLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const modalID = link.getAttribute("href");
        const modal = document.querySelector(modalID);

        modal.showModal();
    });
});

//Close modals
closeButtons.forEach(button => {
    button.addEventListener("click", function() {
        const modal = button.closest("dialog");
        modal.close();
    });
});