
export const validateClientContact = (contactType, contactInput) => {

    const writeValue = document.getElementById('writeName');

    const onlyNumbers = /[^0-9]+$/g;

    const onlyEmail = /[^a-zA-Z|@|.]+$/g;

    const onInputValue = input => {
        input.addEventListener('input', () => {
            input.style.borderColor = 'var(--color-gray-border)';
            writeValue.textContent = '';
        });

        input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = 'var(--color-gray-border)';
            writeValue.textContent = '';
        };
    };

    const showErrorMessage = (message, block, input) => {
        block.textContent = message;
        input.style.borderColor = 'var(--color-burnt-sienna)';
    }

    onInputValue(contactInput);

    if (!contactInput.value) {
        showErrorMessage('Заполните все поля контактов!', writeValue, contactInput);
        return false;
    }

    switch (contactType.innerHTML) {
        case 'Телефон': 
            if (onlyNumbers.test(contactInput.value)) {
                showErrorMessage('Допустимы только цифры!', writeValue, contactInput);
                return false;
            } else if (contactInput.value.length !== 13) {
                showErrorMessage('Номер телефона должен начинаться с +375 и иметь 12 цифр!', writeValue, contactInput);
                return false;
            }

            return true;
        case 'Email': 
            if (onlyEmail.test(contactInput.value)) {
                showErrorMessage('Неправильный Email!', writeValue, contactInput);
                return false;
            }

            return true;
        default:
            return true;
    }
};