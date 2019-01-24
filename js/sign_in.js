user = document.getElementById('user').parentNode;
pass = document.getElementById('pass').parentNode;
sign_in_button = document.getElementById('sign-in');
form_container = document.getElementsByClassName('form-container')[0];
status = '';

pass.style.display = 'None';
form_container.style.margin = '25% auto';
sign_in_button.value = 'Next';

let input = document.getElementsByTagName('input');
Array.prototype.slice.call(input).forEach( e => {
    e.addEventListener('focus', () => {
        e.previousElementSibling.style.visibility = 'visible';
    });
    e.addEventListener('blur', () => {
        e.previousElementSibling.style.visibility = 'hidden';
    });
});

sign_in_button.addEventListener("click", () => {

    if (status === "") {
        user.style.display ="none";
        pass.style.display = "block"
    }
});


