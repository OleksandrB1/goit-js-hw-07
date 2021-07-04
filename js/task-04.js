const upBtn = document.querySelector('button[data-action="increment"]');
const downBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
let value = Number(counterValue.textContent);
upBtn.addEventListener("click", () => {
    value += 1;
    counterValue.textContent = value;
});
downBtn.addEventListener("click", () => {
    value -= 1;
    counterValue.textContent = value;
});