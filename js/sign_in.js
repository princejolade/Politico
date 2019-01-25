let user = document.getElementById('user').parentNode;
let pass = document.getElementById('pass').parentNode;
let sign_in_button = document.getElementById('sign-in');
let form_container = document.getElementsByClassName('form-container')[0];
let status = '';
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
let back_button = document.createElement('span');
back_button.innerText = "<";
back_button.setAttribute('id', 'back');
back_button.addEventListener("click", () => {
    if (status !=="") {
        pass.style.display = 'none';
        user.style.display = 'block';
        status = "";
        back_button.remove();
    }
} );
//let {sport} = user.myHubby[0];

pass.style.display = 'None';
sign_in_button.value = 'Next';


let input = document.getElementsByClassName('input');
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

sign_in_button.addEventListener("click", () => {

    if (status === "") {
        user.style.display ="none";
        pass.style.display = "block";
        status = 'password';
        form_container.appendChild(back_button);
    }
});


