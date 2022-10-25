const bodyEl = document.body;
const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', getRandomHexColor);


function getRandomHexColor(event) {
  const colorBodyEl = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  if (event.currentTarget) {
    textColor.textContent = colorBodyEl;
  return bodyEl.style.backgroundColor = colorBodyEl; 
  };

 };

