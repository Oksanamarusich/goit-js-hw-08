import throttle from 'lodash.throttle';

const KEY_TO_FORM = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const { email, message } = form.elements;
let elementsForm = JSON.parse(localStorage.getItem(KEY_TO_FORM)) ?? {};

function onInput(evt) {
   elementsForm = { email: email.value, message: message.value };
    
    localStorage.setItem(KEY_TO_FORM, JSON.stringify(elementsForm));
}


function pageReload() {
    if (elementsForm) {
        email.value = elementsForm.email ?? '';
        message.value = elementsForm.message ?? '';
    } 
    
}
pageReload();



function onSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_TO_FORM)));    

    localStorage.removeItem(KEY_TO_FORM);  
    evt.currentTarget.reset();
}



