// JavaScript for Vuna Tule project

document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');

    const updateCartCount = () => {
        cartCountElement.textContent = cartCount;
    };

    const addToCart = () => {
        cartCount++;
        updateCartCount();
    };

    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const handleFormSubmission = (formId, successMessage) => {
        const form = document.getElementById(formId);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const allFieldsFilled = [...formData.values()].every(value => value.trim() !== '');

            if (allFieldsFilled) {
                console.log(successMessage);
            } else {
                console.log('Please fill out all required fields.');
            }
        });
    };

    handleFormSubmission('registration-form', 'Registration form submitted successfully!');
    handleFormSubmission('contact-form', 'Contact form submitted successfully!');
});
