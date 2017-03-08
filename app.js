
// check input - Username
function checkUsername() {

    var userText = el.value;
    if (userText.length < 4) {
        elMsg.textContent = 'Username is too short';
        elMsg.className ='wrong';
    }
    else {
        elMsg.textContent = '';
        elMsg.className='feedback';
    }
}
function usernamePrompt() {
        elMsg.className = 'right';
        elMsg.textContent = 'Username must contain 4 letters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('username_fed');

el.addEventListener('blur', checkUsername, false);
el.addEventListener('focus', usernamePrompt, false);

// Check input - E-mail
function checkMail() {

    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    var out = regex.test(el2.value);
    if (!out) {
        elMsg2.textContent = 'This is incorrect e-mail';
        elMsg2.className ='wrong';
    }
    else {
        elMsg2.textContent = '';
        elMsg2.className='feedback';
    }
}
function mailPrompt() {

    elMsg2.className = 'right';
    elMsg2.textContent = 'Example: abc@gmail.com';
}
var el2 = document.getElementById('mailInput');
var elMsg2 = document.getElementById('mailFeedback');

el2.addEventListener('blur', checkMail, false);
el2.addEventListener('focus', mailPrompt, false);

// Calculations remained signs - Textarea

function check() {
    var maxLenght = 700;
    var userTextarea = el3.value;
    var calculation = maxLenght-(userTextarea.length);

    elMsg3.textContent = (calculation +'/700 signs remained');
}

var el3 = document.getElementById('input2');
var elMsg3 = document.getElementById('message');

el3.addEventListener('keyup', check, false);



