// const rangeColor = document.querySelector('.rangeColor')
// const inputchange = document.querySelector('.inputchange')
// let atriElem=getComputedStyle(rangeColor)
// console.log(atriElem.height)
// console.log(atriElem.width)

let number = 12
const pElem = document.querySelector('.pElem')
const inputElem = document.querySelector('.inputElem')
const btnElem = document.querySelector('button')
const h1Elem = document.querySelector('.h1Elem')





// try {
//     console.log(x)

// } catch (err) {

//     pElem.innerHTML = err.message
// }

function checkValue() {

    h1Elem.style.cssText = 'color: red; background-color: green; font-size: 50px;'

    try {

        if (inputElem.value.length > 8) {
            throw 'Too High'

        } else {

            throw 'Too Low'

        }

    } catch (err) {

        pElem.innerHTML = err

    } finally {
        inputElem.value = ''
    }
}

btnElem.addEventListener('click', checkValue)