const form = document.getElementById('form');

    form.addEventListener('submit',  (e) => {
        e.preventDefault();
        let isValid = true;

        const inputs = [
            {
                element: document.getElementById('first-name'),
                message: 'First Name cannot be empty'
            },
            {
                element: document.getElementById('last-name'),
                message: 'Last Name cannot be empty'
            },
            {
                element: document.getElementById('email'),
                message: 'Email Address cannot be empty'
            },
            {
                element: document.getElementById('password'),
                message: 'Password cannot be empty'
            }
        ];

        inputs.forEach(input => {
            const errorIcon = input.element.parentElement.querySelector('.error-icon img');
            const errorMessage = input.element.parentElement.querySelector('.error-message');

            if (input.element.value.trim() === '') {
                errorIcon.classList.remove('hidden');
                errorMessage.textContent = input.message;
                isValid = false;
            } else {
                errorIcon.classList.add('hidden');
                errorMessage.textContent = '';
            }
        });

        if (isValid) {
            form.submit();
        }
});
