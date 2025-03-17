const btn = document.querySelector('.btn')
const h1 = document.querySelector('h1')


function changeCssVariable() {

    document.documentElement.style.setProperty('--color', 'green')
    console.log(document.documentElement.style.getPropertyValue('--color'))
}

btn.addEventListener('click', changeCssVariable)