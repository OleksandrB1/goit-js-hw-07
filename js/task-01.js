const listElm = document.querySelectorAll('.item');
console.log(`В списке ${listElm.length} категории.`);
for (const elem of listElm) {
    let nameCategory = elem.firstElementChild.textContent;
    let quantity = elem.lastElementChild.childElementCount;
    console.log('');
    console.log (`Категория: ${nameCategory}`);
    console.log(`Количество элементов: ${quantity}`);
    }
