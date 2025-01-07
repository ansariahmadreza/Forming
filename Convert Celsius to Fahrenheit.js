const convert = document.querySelector('.convert') //فراخوانی عنصر  تبدیل
const reset = document.querySelector('.reset')// فراخوانی عنصر ریست
const change = document.querySelector('.change')// فراخوانی عنصر مبانی تغیر دما
const valueBox = document.getElementById('valueBox')// فرخوانی مقدار input
const title = document.querySelector('.title')// فراخوانی متن هدر
const selectText = document.querySelector('.selectText')//فراخوانی متن  پیغام مقدار داده


/// تنظیم event روی 3 عنصر convert,reset,change
convert.addEventListener('click', selectConvert)
reset.addEventListener('click', selectReset)
change.addEventListener('click', selectChange)

//تابع reset
function selectReset() {
    valueBox.value = ''//اگر input مقدار داشته باشد خالی میشود
    selectText.innerHTML = ''// اگر متن هشداری ظاهر باشد پنهان میشود
}


/// تابع تغییر تبدیل دما
function selectChange() {

    if (valueBox.placeholder === 'C') { // اگر placeholder برابر با c بود کد های بعدی اجرا بشن
        valueBox.placeholder = 'F'/// placeholder برابر با F شود
        document.title = 'converter F to C'  /// تیتر صفحه به متن روبرو تغییر کند
        title.innerHTML = 'converter F to C ' /// متن بالای input به نوشته روبرو تغییر کند
    } else {
        valueBox.placeholder = 'C' /// نوشته placeholder با c برابر شود
        document.title = 'converter C to F' /// تیتر صفحه با متن روبرو برابر شود
        title.innerHTML = 'converter C to F ' /// متن بالایی input با نوشته روبرو برابر شود

    }
}

/// تابع تبدیل دما
function selectConvert() {

    selectText.style.color = 'yellow'/// رنگ متن زرد باشه

    if (valueBox.placeholder === 'C') { /// اگر placeholder برابر با c باشد کدهای بعدی اجرا شود
        let resultC = ((valueBox.value * 9 / 5) + 32).toFixed(2) /// فرمول تبدیل دما از سلسیوس به فارنهایت
        selectText.innerHTML = valueBox.value + ' C to ' + resultC + ' F '  ///پیغامی با متن روبرو زیر input نشون بده

    } else if (valueBox.placeholder === 'F') {  /// اگر placeholder با F برابر بود کد های بعدی اجرا شود

        let resultF = ((valueBox.value - 32) * 5 / 9).toFixed(2) /// فرمول تبدیل دما از فارنهایت به سلسیوس
        selectText.innerHTML = valueBox.value + ' F to ' + resultF + ' C ' /// پیغامی با متن روبرو
    }

    if (valueBox.value === '') { /// اگر مقدار input خالی بود کدهای بعدی اجرا بشه

        selectText.innerHTML = 'مقدار داده وارد شده نامعتبر است' /// پیغامی با متن روبرو نمایش داده بشه
        selectText.style.color = 'brown' /// رنگ متن

     } // }  else if(isNaN(valueBox.value)){

    //     selectText.innerHTML = 'مقدار داده وارد شده نامعتبر است' /// پیغامی با متن روبرو نمایش داده بشه
    //     selectText.style.color = 'brown' /// رنگ متن

    // }

}