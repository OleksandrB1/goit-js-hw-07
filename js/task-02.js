const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulElm = document.querySelector('#ingredients'); 
ingredients.forEach(function (ingredient) {
  const newList = document.createElement("li");
  newList.appendChild(document.createTextNode(ingredient));
  ulElm.appendChild(newList);
});