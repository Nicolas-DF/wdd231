// FORM ACTIONS

   //Timestamp
   const timestamp = document.querySelector("#timestamp");
   timestamp.value = new Date().toISOString();

    //thankyou.html display

// MEMBERSHIP CARDS SECTION
const modalLinks = document.querySelectorAll(".membership-card a");
const modals = document.querySelectorAll("dialog");
const closeButtons = document.querySelectorAll(".close-modal");

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