const input = document.querySelector('.num')
const submit = document.querySelector('.submit')
const boxRandom1 = document.querySelector('.box')
let arryRandomText = ['متن 1', 'متن2', 'متن3', 'متن4', 'متن5']


function showRandomText() {


    if (input.value < 0 || input.value > 5 || input.value === '' || isNaN(input.value)) {

        let newDivElem1 = document.createElement('div')
        boxRandom1.append(newDivElem1)

        newDivElem1.innerHTML = 'مقدار وارد شده نامعتبر است'

        setTimeout(function () {

            newDivElem1.innerHTML = ''

        }, 1000)

    } else {


        for (let i = 0; i < input.value; i++) {

            let randomText = arryRandomText[Math.floor(Math.random() * arryRandomText.length)]
            let newDivElem = document.createElement('div')
            newDivElem.innerHTML = randomText
            boxRandom1.append(newDivElem)

        }

        input.value = ''

    }





}

submit.addEventListener('click', showRandomText)

