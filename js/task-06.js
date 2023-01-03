const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onInputValidAndInvilid);

function onInputValidAndInvilid(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
}
