function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanTextColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
    const color = getRandomHexColor();
    spanTextColorEl.textContent = color;
    bodyEl.style.backgroundColor = color;
}
