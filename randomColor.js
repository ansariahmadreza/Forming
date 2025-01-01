let body = document.body
body.addEventListener('click', clss)


function clss() {




    // let colorRandom = ['green', 'blue', 'red']
    // let colorMe







    let redValue, greenValue, blueValue
    setInterval(function () {



        redValue = Math.floor(Math.random() * 255)
        greenValue = Math.floor(Math.random() * 255)
        blueValue = Math.floor(Math.random() * 255)

        console.log('rgb(' + redValue + ',' + greenValue + ',' + blueValue + ');')

        document.body.style.background = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

        colorMe = Math.floor(Math.random() * colorRandom.length)
        //document.body.style.background = colorRandom[colorMe]

    }, 2000)

}