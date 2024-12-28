//cod me

// let idText = document.getElementById('text')

// let idPassWord = document.getElementById('password')

// function clickFunc() {

//     if (idPassWord.value.length >= 8 && idText.value.length >= 12) {

//         alert('مقدار گذرواژه به درستی وارد شده است')

//     } else {

//         alert('مقدار صحیح وارد نشده است')
//     }


// }



//code teacher

let userNameInput = document.querySelector('#userName')
let passWordInput = document.querySelector('#password')
let modal = document.querySelector('.modal')



function dataValidation() {



    if (userNameInput.value.length < 12 || passWordInput.value.length < 8) {
        //alert('مقدار وارد شده کمتر از حد مجاز است')
        modal.style.display = 'inline'

    } else {
        modal.innerHTML = 'ثبت نام موفقیت امیز بود'
        modal.style.display = 'inline'
        modal.style.background=' rgba(32, 218, 209, 0.8) '


    }

    setTimeout(function() {


        modal.style.display = 'none'

    },3000)
}
