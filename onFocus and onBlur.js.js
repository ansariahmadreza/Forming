//code teacher,only onBlur
let $ = document
let userNameInput = $.querySelector('.userName')//فراخوانی نام کاربری
let passwordInput = $.querySelector('.password')//فراخوانی رمز عبور
let userNameSmall = $.querySelector('.userNameSmall')//فراخوانی پیام نام کاربری از کد html
let passwordSmall = $.querySelector('.passwordSmall')//فراخوانی پیام رمز عبور از کد html
let btn = $.querySelector('.btn')
let modal = $.querySelector('.modal')


userNameInput.addEventListener('blur', userNameBlur)
passwordInput.addEventListener('blur', passwordBlur)
btn.addEventListener('focus', modalUse)


function userNameBlur() {//تعیین حد نام کاربری


    if (userNameInput.value.length < 12) {

        userNameSmall.style.display = 'block'
        userNameSmall.style.color = 'red'
        userNameSmall.innerHTML = 'لطفا مقدار صحیح را وارد کنید'


    } else {
        userNameSmall.style.display = 'block'
        userNameSmall.innerHTML = 'نام کاربری صحیح است'
        userNameSmall.style.color = 'blue'
    }
}


function passwordBlur() {//تعیین حد رمز عبور


    if (passwordInput.value.length < 8) {

        passwordSmall.innerHTML = 'لطفا مقدار صحیح را وارد کنید'
        passwordSmall.style.color = 'red'
        passwordSmall.style.display = 'block'

    } else {
        passwordSmall.style.color = 'blue'
        passwordSmall.style.display = 'block'
        passwordSmall.innerHTML = 'رمز عبور کاملا صحیح وارد شده است'
    }
}

function modalUse() {
    if (userNameInput.value.length < 12 || passwordInput.value.length < 8) {

        modal.innerHTML = 'لطفا اطلاعات لازم را به درستی وارد کنید '
        modal.style.display = 'inline'

    } else {

        modal.innerHTML = 'اطلاعات وارد شده صحیح است'
        modal.style.display = 'inline'
    }
    setTimeout(function(){

        modal.style.display='none'
        userNameSmall.style.display='none'
        passwordSmall.style.display='none'

    },3000)
}



//code me,onFocus and onBlur





// let userNameGet = $.querySelector('.userName')
// let passwordGet = $.querySelector('.password')


// function userNameFocus() {

//     if (userNameGet.value.length < 12) {

//         console.log('مقدار وارد شده کمتر از حد مجاز است')
//     }


// }



// function userNameBlur() {


//     if (userNameGet.value.length > 12) {

//         console.log('مقدار لازم رعایت شده است')

//     }


// }


// function passwordFocus() {


//     if (passwordGet.value.length < 8) {

//         console.log('مقدار لازم رعایت نشده است')
//     }

// }


// function passwordBlur() {


//     if (passwordGet.value.length > 8) {

//         console.log('مقدار لازم رعایت شده است')
//     }

// } 