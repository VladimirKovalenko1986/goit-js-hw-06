const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if ((spanEl.textContent = event.currentTarget.value)) {
    } else {
        spanEl.textContent = 'Anonymous';
    }
}
