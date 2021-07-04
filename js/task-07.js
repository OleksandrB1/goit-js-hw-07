const sizeCtrl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
sizeCtrl.addEventListener("input", () => {
    textSize.style.fontSize = `${Number(sizeCtrl.value)}px`;
});