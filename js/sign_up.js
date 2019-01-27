let input = document.getElementsByTagName('input');
let sign_in_button = document.getElementById('sign-in');
let form_container = document.getElementsByClassName('form-container')[0];
let eye_icons = document.getElementsByClassName('eye-icon');

Array.prototype.slice.call(eye_icons).forEach( e => {
    e.addEventListener('click', () => {
        if (getComputedStyle(e).content.endsWith('eye-show.svg")')) {
            e.style.content = "url( '../img/eye-hide.svg' )";
        } else {
            e.style.content = "url( '../img/eye-show.svg' )";
        }

    });
});

Array.prototype.slice.call(input).forEach( e => {
    let placeholder;
    e.addEventListener('focus', () => {
        e.previousElementSibling.style.visibility = 'visible';
        placeholder = e.getAttribute('placeholder');
        e.removeAttribute('placeholder');
    });
    e.addEventListener('blur', () => {
        e.previousElementSibling.style.visibility = 'hidden';
        e.setAttribute('placeholder', placeholder);
    });
});

