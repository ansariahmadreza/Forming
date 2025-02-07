const span = document.querySelector('.x')
const btn = document.querySelector('.btn')
const parents = document.querySelector('.parents')

btn.addEventListener('click', btnshow)
span.addEventListener('click', spanshow)


function btnshow() {

    parents.style.display = 'block'
    document.body.style.backdropFilter = 'blur(10px)'
    btn.blur()
    

}

function spanshow() {

    parents.style.display = 'none'
    span.style.cursor = 'pointer'
    document.body.style.backdropFilter = 'none'

}


document.addEventListener('keydown', function (event) {


    if (event.key === 'Escape') {
        parents.style.display = 'none'
        document.body.style.backdropFilter = 'none'
    }

})