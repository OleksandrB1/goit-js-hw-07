const newNum = document.querySelector('input');
const create = document.querySelector('button[data-action="render"]');
const clean = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const amount = newNum.valueAsNumber;
let size = 30;
create.addEventListener("click", () => {
    createBoxes(newNum.valueAsNumber);
});
clean.addEventListener('click', () => {
    boxes.innerHTML = '';
    size = 30;
  });  
function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        function newRGB() {
            return Math.floor(Math.random() * 256);
        }
        const newBox = document.createElement('div');
        newBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba(${newRGB()} , ${newRGB()} , ${newRGB()})`;
        size += 10;
        boxes.appendChild(newBox);
        }
    
}



