const collectionEl = document.querySelector('#controls input');
const addcollectionEl = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

console.log(collectionEl.value)
createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = Number(collectionEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
 
   for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    addcollectionEl.append(box);
    width += 10;
    height += 10;
    };   
};

function destroyBoxes() {
  addcollectionEl.innerHTML = '';
  collectionEl.value = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


