const itemEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.length);

itemEl.forEach(el => {
    const title = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;

    console.log('Category:', title);
    console.log('Elements:', elements);
});
