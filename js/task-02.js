const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulElm = document.querySelector('#ingredients');
ingredients.map(function (ingredient) {
  const newList = document.createElement("li");
  newList.append(document.createTextNode(ingredient));
  ulElm.append(newList);
});