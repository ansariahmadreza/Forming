const span = document.querySelector('.x')
const btn = document.querySelector('.btn')
const parents = document.querySelector('.parents')

btn.addEventListener('click', btnshow)
span.addEventListener('click', spanshow)


function btnshow() {/// نشان دادن modal با دکمه

    parents.style.display = 'block'
    document.body.style.backdropFilter = 'blur(10px)'
    btn.blur()/// از بین بردن  حالت فوکوس و توجه به عنصر
    

}

function spanhide() { //// پنهان کردن modal با ضربدر

    parents.style.display = 'none'
    span.style.cursor = 'pointer'
    document.body.style.backdropFilter = 'none'

}


document.addEventListener('keydown', function (event) { /// پنهان کردن modal با دکمهEsc


    if (event.key === 'Escape') {
        parents.style.display = 'none'
        document.body.style.backdropFilter = 'none'
    }

})