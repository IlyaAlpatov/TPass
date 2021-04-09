
const enjoyInput = document.querySelector('.enjoy__input');
const enjoyBtn = document.querySelector('.enjoy__btn');

enjoyBtn.addEventListener('click', () => {
    const re = /^\d[\d\(\)\ -]{4,14}\d$/;
    const valid = re.test(enjoyInput.value);

    if (valid) {
        enjoyInput.setCustomValidity('');
        alert(`Допустим, что твой номер (${enjoyInput.value}) отправлен на сервер`);
    } else {
        enjoyInput.setCustomValidity('Не верный номер');
    }

    return valid;
});