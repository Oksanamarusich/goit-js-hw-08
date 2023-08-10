import throttle from 'lodash.throttle';

const KEY_TO_FORM = "feedback-form-state";

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

const elementsForm = { email: '', message: '', };


function handlerInput(evt) {
    
    localStorage.setItem(KEY_TO_FORM, JSON.stringify(elementsForm));
    
}


function handlerSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(KEY_TO_FORM)));// для сабміту виводить об'єкт зі значеннями в консоль

    localStorage.removeItem(KEY_TO_FORM);//видалення
}