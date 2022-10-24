const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
const ingredientsItems = document.createElement('li');
ingredientsItems.classList.add('item__ingredients');
ingredientsItems.textContent = ingredient;

return ingredientsItems;
});

ingredientsList.append(...elements);
