const inputName = document.querySelector('#validation-input');
inputName.addEventListener("blur", () => {
    inputName.className = Number(inputName.dataset.length) === inputName.value.length ?
    'valid' : 'invalid';
});