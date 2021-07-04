const listElm = document.querySelectorAll('.item');
console.log(`В списке ${listElm.length} категории.`);
listElm.forEach(function (elem) {
    console.log(''); // --- разделитель
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.childElementCount}`);
});