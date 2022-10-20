// var content = document.getElementById("content")
// var button = document.getElementById("show-more")


// button.onclick = function() {
//     if (content.className == "open") {
//         content.className = "";
//         button.innerHTML = "Show more";
//     } else {
//         content.className = "open";
//         button.innerHTML = "show less";
//     }
// }

// let opeBtn = document.getElementById('linked')
// let modalContainer = document.getElementById('modal-container')
// let closebtn = document.getElementById('close-btn')



// opeBtn.addEventListener('click', function() {
//     modalContainer.style.display = 'block'
// })

// closebtn.addEventListener('click', function() {
//     modalContainer.style.display = 'none'
// })
// window.addEventListener('click', function(e) {
//     if (e.target === modalContainer) {
//         modalContainer.style.display = 'none'
//     }
// })
const form = document.getElementById('my-form')
const nameInput = document.querySelector('input[name="name"]')
const lastInput = document.querySelector('input[name="lastname"]')
const userInput = document.querySelector('input[name="username"]')
const gendInput = document.querySelector('input[name="gender"]')
const headInput = document.querySelector('input[name="headline"]')
const messInput = document.querySelector('input[name="messaging"]')


const validateInputs = () => {
    nameInput.classList.remove("invalid")
    nameInput.nextElementSibling.classList.add("hidden")
        // space 
    lastInput.classList.remove("invaild")
    lastInput.nextElementSibling.classList.add("hidden")
        // space
    userInput.classList.remove("invalid")
    userInput.nextElementSibling.classList.add("hidden")
        // space
        // gendInput.classList.remove("invalid")
        // gendInput.nextElementSibling.classList.add("hidden")
        //space
    headInput.classList.remove("invalid")
    headInput.nextElementSibling.classList.add("hidden")
        // space
        // messInput.classList.remove("invalid")
        // messInput.nextElementSibling.classList.add("hidden")
        // space
    if (!nameInput.value) {
        nameInput.classList.add("invalid")
        nameInput.nextElementSibling.classList.remove("hidden")

    }
    if (!lastInput.value) {
        lastInput.classList.add("invalid")
        lastInput.nextElementSibling.classList.remove("hidden")
    }
    if (!userInput.value) {
        userInput.classList.add("invalid")
        userInput.nextElementSibling.classList.remove("hidden")
    }
    // if (!gendInput.value) {
    //     gendInput.classList.add("invalid")
    //     gendInput.nextElementSibling.classList.remove("hidden")
    // }
    if (!headInput.value) {
        headInput.classList.add("invalid")
        headInput.nextElementSibling.classList.remove("hidden")
    }
    if (!messInput.value) {
        messInput.classList.add("invalid")
        messInput.nextElementSibling.classList.remove("hidden")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInputs()

})
nameInput.addEventListener("input", () => {
    validateInputs()

})
lastInput.addEventListener("input", () => {
    validateInputs()
})
userInput.addEventListener("input", () => {
        validateInputs()
    })
    // gendInput.addEventListener("input", () => {
    //     validateInputs()
    // })
headInput.addEventListener("input", () => {
    validateInputs()
})
messInput.addEventListener("input", () => {
    validateInputs()
})