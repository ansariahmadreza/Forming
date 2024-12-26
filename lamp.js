//let bodyElem = document.getElementById('body')
//let imgNew = document.createElement('img')
//imgNew.src = 'images/pic03.jpg'
//h1Elem.append(imgNew)


let imgNew=document.getElementById('image')

let lamp = true

function clickfunc() {

    if (lamp) {
        lamp = false
        imgNew.setAttribute('src','images/pic07.jpg ')



    } else {

        lamp = true
        imgNew.setAttribute('src','images/pic03.jpg ')


    }


}
