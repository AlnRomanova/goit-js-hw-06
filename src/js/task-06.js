const inputText = document.querySelector('#validation-input');


inputText.addEventListener('blur', (event) => {
      if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
       inputText.classList.add('valid')

    } else {
        inputText.classList.add('invalid')
    }


    

    console.log(inputText)
});

   
  
