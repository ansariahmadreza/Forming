let convert = document.querySelector('.convert')  /// فراخوانی دکمه login
let valueBox = document.querySelector('.valueBox') /// فراخوانی input
let selectText = document.querySelector('.selectText') /// فراخوانی قسمت نشان دهنده پیام هشدار


convert.addEventListener('click', addName) /// تنظیم event

namesOfPeople = [{ name: 'ali', age: 23 }, ///باکس افراد ثبت نام شده
{ name: 'hasan', age: 20 },
{ name: 'arman', age: 28 }]


/// تابع تایید یا رد وجود اسم شخص 
function addName() {

    let resultName = namesOfPeople.find(function (item) {  /// تنظیم متد find

        if (item.name === valueBox.value) {  ///  اگر اسم وجود در باکس با اسم وارد شده برابر بود  کد های بعدی اجرا بشه

            return item = namesOfPeople /// در صورت تایید کد قبلی ایتمی رو برگردون که با کل باکس برابر باشه

        }

    });


    if (resultName) {  /// اگر اسم وارد شده موجود بود
        selectText.innerHTML = 'شما با موفقیت وارد سایت شده اید' /// این پیام نشان داده شود
        selectText.style.color = 'yellow' /// رنگ پیام زرد باشه

        /// بعد از 2 ثانیه پیام پنهان شود
        setTimeout(function () {

            selectText.style.display = 'none'

        }, 2000)

    } else {

        /// در صورتی که اسم وارد شده موجود نبود 
        selectText.innerHTML = 'شما هنوز در سایت ثبت نام نکرده اید'  //// این پیام نشان داده شود
        selectText.style.color = 'red' /// رنگ پیام زرد باشه
        /// بعد از 2 ثانیه پیام پنهان شود
        setTimeout(function () {

            selectText.style.display = 'none'

        }, 2000)
    }
}

