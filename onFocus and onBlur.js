let userNameGet = document.querySelector('.userName')
let passwordGet = document.querySelector('.password')
let userNameSmall = document.querySelector('.userNameSmall')
let passwordSmall = document.querySelector('.passwordSmall')




function userNameBlur() {


    if (userNameGet.value.length < 12) {

        userNameSmall.style.display = 'block'
        userNameSmall.style.color = 'black'

    } else {
        userNameSmall.style.display = 'block'
        userNameSmall.innerHTML = 'نام کاربری صحیح است'

    }


}





function passwordBlur() {


    if (passwordGet.value.length < 8) {

        passwordSmall.style.display = 'block'
    } else {
        passwordSmall.style.display = 'block'
        passwordSmall.innerHTML = 'رمز عبور کاملا صحیح وارد شده است'
    }

} 