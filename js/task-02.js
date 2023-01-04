const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ulEl = document.getElementById('ingredients');
const list = [];

// Цикл для перебору масиву
ingredients.forEach(el => {
    // Створити li
    const itemEl = document.createElement('li');

    // Додаємо клас елементу li
    itemEl.classList.add('item');

    //Записуємо текст в li з масиву
    itemEl.textContent = el;

    // ulEl.append(itemEl);

    list.push(itemEl);
});

ulEl.append(...list);
