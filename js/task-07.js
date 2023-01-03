const inputElFontSize = document.getElementById('font-size-control');
const textSpanEl = document.getElementById('text');

inputElFontSize.addEventListener('input', onControlelText);

function onControlelText(event) {
    textSpanEl.style.fontSize = event.currentTarget.value + 'px';
}
