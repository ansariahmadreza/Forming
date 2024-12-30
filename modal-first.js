let userName = document.querySelector('.userName')//فراخوانی نام کاربری از html
let passWord = document.querySelector('.password')//فراخوانی رمز عبور از html
let modal = document.querySelector('.modal')//تایید یا عدم تایید ثبت نام
let userNameSmall = document.querySelector('.userNameSmall')//پیام تایید یا عدم تایید نام کاربری
let passwordSmall = document.querySelector('.passwordSmall')//پیام تایید یا عدم تایید رمز عبور
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    userNameValue();
    passWordValue();
    dataValidation();

})





function userNameValue() {//تایید رعایت حد نساب نام کاربری

    if (userName.value.length < 12) {
        userNameSmall.style.color = 'red'
        userNameSmall.style.display = 'block'
        userNameSmall.innerHTML = 'لطفا مقدار صحیح را وارد کنید'

    } else {


        userNameSmall.style.display = 'block'
        userNameSmall.style.color = 'blue'
        userNameSmall.innerHTML = 'حد نصاب رعایت شده است'
    }


}


function passWordValue() {//تایید رعایت حد نساب رمز عبور


    if (passWord.value.length < 8) {

        passwordSmall.style.display = 'block'
        passwordSmall.style.color = 'red'
        passwordSmall.innerHTML = 'لطفا مقدار صحیح را وارد کنید'


    } else {


        passwordSmall.style.display = 'block'
        passwordSmall.style.color = 'blue'
        passwordSmall.innerHTML = 'حد نصاب رعایت شده است'


    }

}

function dataValidation() {// تایید ثبت نام یا عدم ثبت نام


    if (userName.value.length < 12 || passWord.value.length < 8) {

        modal.style.display = 'inline'
        modal.innerHTML = 'لطفا اطلاعات لازم را به درستی وارد کنید'


    } else {


        modal.style.display = 'inline'
        modal.innerHTML = 'ثبت نام شما موفقیت امیز بود'

    }



    setTimeout(function () {

        modal.style.display = 'none'
        userNameSmall.style.display = 'none'
        passwordSmall.style.display = 'none'

    }, 3000)
}



