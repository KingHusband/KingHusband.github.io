let hideText_Icon = document.getElementById('hideText_Icon');

let hideText = document.getElementById('hideText');

hideText_Icon.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('Show');
}