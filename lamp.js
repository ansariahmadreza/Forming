//let bodyElem = document.getElementById('body')
//let imgNew = document.createElement('img')
//imgNew.src = 'images/pic03.jpg'
//h1Elem.append(imgNew)


let imgNew=document.getElementById('image')

let lamp = true

let btn=document.getElementById('btn')

function clickfunc() {

    if (lamp) {
        lamp = false
        imgNew.setAttribute('src','images/pic07.jpg ')
        btn.innerHTML='turnOff'



    } else {

        lamp = true
        btn.innerHTML='turnOn'
        imgNew.setAttribute('src','images/pic03.jpg ')


    }


}
