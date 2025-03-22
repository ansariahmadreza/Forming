const textInput = document.querySelector(".textInput")
const valueDiv = document.querySelector('.valueAdded')


document.addEventListener('keyup', function (event) {

    appendValueTodo(event)

    textInput.focus()

    let userEventKey = event.key

    let keyboard = document.getElementById(userEventKey.toUpperCase())

    keyboard.addEventListener("animationend", animationendHandler)
    function animationendHandler() {
        keyboard.classList.remove('k')
    }

    keyboard.classList.add("k");



})


function appendValueTodo(event) {

    valueDiv.innerHTML = textInput.value

    if (event.key === "Backspace") {
        textInput.value === textInput.value.slice(0, -1);////حذف عنصر از input
        return
    }



}


