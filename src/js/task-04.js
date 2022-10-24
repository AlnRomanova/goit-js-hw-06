const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const value = document.querySelector('#value');

let countValue = 0;


function handleCounterClickDecrementBtn (event) {
    countValue --;
    value.textContent = countValue;
};

decrementBtn.addEventListener('click', handleCounterClickDecrementBtn);

function handleCounterClickIncrementBtn (event) {
    countValue ++;
    value.textContent = countValue;
};

incrementBtn.addEventListener('click', handleCounterClickIncrementBtn);


// const counter = document.querySelector("#counter");
// const value = document.querySelector("#value");

// function handleCounterClick(event) {
//     if(event.target.dataset.action === "decrement") {
//         countValue --;
//       };
      
//     if(event.target.dataset.action === "increment") {
//         countValue ++;
//     };

//     value.textContent = countValue;

// };

// counter.addEventListener('click', handleCounterClick);

