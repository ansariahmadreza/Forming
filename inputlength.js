const input = document.getElementById('input')
const maxLength = input.getAttribute('maxlength')
//const ValueInput=input.getAttribute('value')
const span = document.querySelector('.span')


input.addEventListener('keyup', inputLength)

span.innerHTML = maxLength




function inputLength() {

    span.innerHTML = maxLength - input.value.length


   



}
