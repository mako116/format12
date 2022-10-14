var content = document.getElementById("content")
var button = document.getElementById("show-more")


button.onclick = function() {
    if (content.className == "open") {
        content.className = "";
        button.innerHTML = "Show more";
    } else {
        content.className = "open";
        button.innerHTML = "show less";
    }
}

let opeBtn = document.getElementById('linked')
let modalContainer = document.getElementById('modal-container')
let closebtn = document.getElementById('close-btn')



opeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block'
})

closebtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'
})
window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})


const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
// const userlist = document.querySelector('#users')

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }

}