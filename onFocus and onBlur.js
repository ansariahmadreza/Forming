//code teacher,only onBlur

let $  = document


let userNameInput = $.querySelector('.userName')//فراخوانی نام کاربری
let passwordInput = $.querySelector('.password')//فراخوانی رمز عبور
let userNameSmall = $.querySelector('.userNameSmall')//فراخوانی پیام نام کاربری از کد html
let passwordSmall = $.querySelector('.passwordSmall')//فراخوانی پیام رمز عبور از کد html




function userNameBlur() {//تعیین حد نام کاربری


    if (userNameInput.value.length < 12) {

        userNameSmall.style.display = 'block'
        userNameSmall.style.color = 'red'

    } else {
        userNameSmall.style.display = 'block'
        userNameSmall.innerHTML = 'نام کاربری صحیح است'

    }


}


function passwordBlur() {//تعیین حد رمز عبور


    if (passwordInput.value.length < 8) {
        passwordSmall.style.color = 'red'
        passwordSmall.style.display = 'block'
    } else {
        passwordSmall.style.color = 'red'
        passwordSmall.style.display = 'block'
        passwordSmall.innerHTML = 'رمز عبور کاملا صحیح وارد شده است'
    }

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