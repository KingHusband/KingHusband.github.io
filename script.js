let hideTextWs_Icon = document.getElementById('hideTextWs_Icon');

let hideTextWs = document.getElementById('hideTextWs');

hideTextWs_Icon.addEventListener('click', toggleWsText);

function toggleWsText() {
    hideTextWs.classList.toggle('wsShow');
}

let hideTextEmail_Icon = document.getElementById('hideTextEmail_Icon');

let hideTextEmail = document.getElementById('hideTextEmail');

hideTextEmail_Icon.addEventListener('click', toggleEmailText);

function toggleEmailText() {
    hideTextEmail.classList.toggle('emailShow');
}