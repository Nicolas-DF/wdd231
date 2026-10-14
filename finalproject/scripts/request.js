
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

/*** Form Confirmation Info ***/
function addSummaryItem(container, label, value) {
    if (!value) {
        return;
    }

    const item = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = `${label}: `;
    item.append(strong, document.createTextNode(value));

    container.appendChild(item);
}

function displayConfirmation() {
    const confirmation = document.querySelector("#confirmation");
    const customerSummary = document.querySelector("#customer-summary");
    const servicesSummary = document.querySelector("#services-summary");
    const projectSummary = document.querySelector("#project-summary");

    // Clear previous summaries
    customerSummary.replaceChildren();
    servicesSummary.replaceChildren();
    projectSummary.replaceChildren();

    // Customer information
    addSummaryItem(
        customerSummary,
        "Full Name",
        quoteForm.elements.fullname.value.trim()
    );

    addSummaryItem(
        customerSummary,
        "Email",
        quoteForm.elements.email.value.trim()
    );

    addSummaryItem(
        customerSummary,
        "Phone Number",
        quoteForm.elements.phone.value.trim()
    );

    addSummaryItem(
        customerSummary,
        "Company Name",
        quoteForm.elements.company.value.trim()
    );

    // Selected services and quantities
    const selectedServices = quoteForm.querySelectorAll(
        '.service-option input[type="checkbox"]:checked'
    );

    selectedServices.forEach(checkbox => {
        const serviceOption = checkbox.closest(".service-option");
        const quantityInput = serviceOption.querySelector('input[type="number"]');
        const descriptionInput = serviceOption.querySelector("textarea");

        const serviceName = checkbox.value === "other"
            ? descriptionInput.value.trim()
            : checkbox.parentElement.textContent.trim();

        const quantity = quantityInput?.value;

        const item = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = serviceName;
        item.appendChild(strong);

        if (quantity) {
            item.appendChild(
                document.createTextNode(` — Quantity: ${quantity}`)
            );
        }

        servicesSummary.appendChild(item);
    });

    // Project details
    addSummaryItem(
        projectSummary,
        "Preferred Completion Date",
        quoteForm.elements.deadline.value
    );

    addSummaryItem(
        projectSummary,
        "Project Description",
        quoteForm.elements.description.value.trim()
    );

    // Show confirmation and hide form
    quoteForm.hidden = true;
    confirmation.hidden = false;

    confirmation.scrollIntoView({ behavior: "smooth" });
}


// Handle form submission
quoteForm.addEventListener("submit", event => {
    event.preventDefault();

    updateServiceValidation();

    if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
    }
});
