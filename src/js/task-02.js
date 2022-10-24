const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');


function addElementsToList(list, elements) {
  const elementsToRender = elements.map(ingredient => {
    const ingredientsItems = document.createElement('li');
    ingredientsItems.classList.add('item__ingredients');
    ingredientsItems.textContent = ingredient;
    
    return ingredientsItems;
    });
    
    list.append(...elementsToRender);
};

addElementsToList(ingredientsList, ingredients);

