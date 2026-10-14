
const quoteForm = document.querySelector("#quote-form");

const serviceCheckboxes = document.querySelectorAll('.service-option input[type="checkbox"]');

// Enable or disable the fields associated with each service
function updateServiceOption(checkbox) {
    const serviceOption = checkbox.closest(".service-option");

    const quantityInput = serviceOption.querySelector(
        'input[type="number"]'
    );

    const descriptionInput = serviceOption.querySelector("textarea");

    // Handle the quantity field
    if (quantityInput) {
        quantityInput.disabled = !checkbox.checked;

        // Quantity is optional for "Other"
        quantityInput.required =
            checkbox.checked && checkbox.value !== "other";

        if (!checkbox.checked) {
            quantityInput.value = "";
        }
    }

    // Handle the description field for "Other"
    if (descriptionInput) {
        descriptionInput.disabled = !checkbox.checked;
        descriptionInput.required = checkbox.checked;

        if (!checkbox.checked) {
            descriptionInput.value = "";
        }
    }
}

// Require at least one selected service
function updateServiceValidation() {
    const hasSelectedService = [...serviceCheckboxes].some(
        checkbox => checkbox.checked
    );

    if (serviceCheckboxes.length > 0) {
        serviceCheckboxes[0].setCustomValidity(
            hasSelectedService
                ? ""
                : "Please select at least one service."
        );
    }
}

// Listen for changes to each service
serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        updateServiceOption(checkbox);
        updateServiceValidation();
    });

    // Initialize the fields
    updateServiceOption(checkbox);
});

// Initialize the service validation
updateServiceValidation();

// Handle form submission
quoteForm.addEventListener("submit", event => {
    event.preventDefault();

    updateServiceValidation();

    if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
    }
});
