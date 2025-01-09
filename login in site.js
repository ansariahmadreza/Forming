let convert = document.querySelector('.convert')
let valueBox = document.querySelector('.valueBox')
let selectText = document.querySelector('.selectText')


convert.addEventListener('click', addName)

namesOfPeople = [{ name: 'ali', age: 23 },
{ name: 'hasan', age: 20 },
{ name: 'arman', age: 28 }]



function addName() {

    let resultName = namesOfPeople.find(function (item) {

        if (item.name === valueBox.value) {

            return item = namesOfPeople

        }

    });


    if (resultName) {
        selectText.innerHTML = 'شما با موفقیت وارد سایت شده اید'
        selectText.style.color = 'yellow'
        setTimeout(function () {

            selectText.style.display = 'none'

        }, 2000)

    } else {


        selectText.innerHTML = 'شما هنوز در سایت ثبت نام نکرده اید'
        selectText.style.color = 'red'
        setTimeout(function () {

            selectText.style.display = 'none'

        }, 2000)
    }
}

