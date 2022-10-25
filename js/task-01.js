const countCategories = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${countCategories}`);

const allCategoriesEl = document.querySelectorAll('.item')
allCategoriesEl.forEach(el => console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.childElementCount}`))

