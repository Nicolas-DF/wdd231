/*********** CHECKBOXES ***********/
const serviceCheckboxes = document.querySelectorAll(
    '.service-option input[type="checkbox"]'
);

serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const serviceOption = checkbox.closest('.service-option');

        const quantityInput = serviceOption.querySelector(
            'input[type="number"]'
        );

        const descriptionInput = serviceOption.querySelector(
            'textarea'
        );

        // Enable or disable the quantity field
        if (quantityInput) {
            quantityInput.disabled = !checkbox.checked;

            // Quantity is required for regular services, but optional for "Other".
            quantityInput.required =
                checkbox.checked && checkbox.value !== 'other';

            if (!checkbox.checked) {
                quantityInput.value = '';
            }
        }

        // Handle the description field for "Other"
        if (descriptionInput) {
            descriptionInput.disabled = !checkbox.checked;
            descriptionInput.required = checkbox.checked;

            if (!checkbox.checked) {
                descriptionInput.value = '';
            }
        }
    });
});
