let hideTextEmail_Icon = document.getElementById('hideTextEmail_Icon');

let hideTextEmail = document.getElementById('hideTextEmail');

hideTextEmail_Icon.addEventListener('click', toggleEmailText);

function toggleEmailText() {
    hideTextEmail.classList.toggle('emailShow');
}