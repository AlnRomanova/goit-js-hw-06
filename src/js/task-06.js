const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', (event) => {
      if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
       event.currentTarget.classList.add('valid')

    } else {
        event.currentTarget.classList.add('invalid')
    };

});


   
  
