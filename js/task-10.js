const divFormEl = document.getElementById('controls');
const inputNumber = document.querySelector('#controls>input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divCreatEl = document.getElementById('boxes');

// Додаємо на кнопки клік

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

// Створюємо функцію яка додає елементи

function createBoxes() {
    const amount = inputNumber.value;

    const elAddToDiv = [];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.height = `${30 + 10 * i}px`;
        div.style.width = `${30 + 10 * i}px`;
        div.style.backgroundColor = getRandomHexColor();
        elAddToDiv.push(div);
    }
    console.log('🚀 ~ createBoxes ~ elAddToDiv', elAddToDiv);
    divCreatEl.append(...elAddToDiv);
}

// Створюємо функцію яка очіщає вміст елементів
function destroyBoxes() {
    divCreatEl.innerHTML = '';
}

// Функція яка генерує випалковий колір
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
