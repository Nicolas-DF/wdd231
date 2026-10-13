
const serviceCheckboxes = document.querySelectorAll(
    '.service-option input[type="checkbox"]'
);

serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const serviceOption = checkbox.closest('.service-option');
        const quantityInput = serviceOption.querySelector(
            'input[type="number"]'
        );

        quantityInput.disabled = !checkbox.checked;
        quantityInput.required = checkbox.checked;

        if (!checkbox.checked) {
            quantityInput.value = '';
        }
    });
});
