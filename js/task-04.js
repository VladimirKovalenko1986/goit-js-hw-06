const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBTN = document.querySelector('[ data-action="decrement"]');
const incrementBTN = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');

decrementBTN.addEventListener('click', onDecrement);
incrementBTN.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
}

function onIncrement() {
    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
}
