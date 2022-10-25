const inputText = document.querySelector('#validation-input');


inputText.addEventListener('blur', (event) => {
      if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
       event.currentTarget.classList.add('valid');
       event.currentTarget.classList.remove('invalid');
       
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    
    };

});




   
  
