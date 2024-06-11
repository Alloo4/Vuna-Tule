// JavaScript for Vuna Tule project

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    let cartCount = 0;

    // Get cart count element
    const cartCountElement = document.querySelector('.cart-count');

    // Function to update cart count
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    // Function to handle adding items to cart
    function addToCart() {
        cartCount++;
        updateCartCount();
    }

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Function to handle farmer registration form submission
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        const formData = new FormData(registrationForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');

        // Perform validation
        if (name && email && phone) {
            // Send form data to server or perform desired action
            console.log('Registration form submitted successfully!');
        } else {
            console.log('Please fill out all required fields.');
        }
    });

    // Function to handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Perform validation
        if (name && email && message) {
            // Send form data to server or perform desired action
            console.log('Contact form submitted successfully!');
        } else {
            console.log('Please fill out all required fields.');
        }
    });
});
