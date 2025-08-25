document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const consentInput = document.getElementById('consent');
    const emailError = document.getElementById('email-error');
    const consentError = document.getElementById('consent-error');

    form.addEventListener('submit', function (e) {
        let valid = true;
        emailError.textContent = '';
        consentError.textContent = '';

        // Email validation
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = 'Please enter your email address.';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Consent validation
        if (!consentInput.checked) {
            consentError.textContent = 'You must agree before subscribing.';
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    emailInput.addEventListener('input', function () {
        emailError.textContent = '';
    });

    consentInput.addEventListener('change', function () {
        consentError.textContent = '';
    });