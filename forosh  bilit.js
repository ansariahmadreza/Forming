///////////   I wrote the code explanation myself.   /////////////////
const boxBilit = {

    fars: ['shiraz', 'fasa', 'noorabad', 'eqlid', 'jahrom'],
    kerman: ['kerman', 'bam', 'jiroft', 'rafsanjan'],
    tehran: ['theran', 'varamin', 'damavand']
}

let cityMe = document.querySelector('.cityMe') /// فراخوانی اسم استان ها از کد html
let destination = document.querySelector('.destination') /// فراخوانی اسم شهر ها از کد html


cityMe.addEventListener('change', changeCity) // تنظیم انجام رویداد و نوع ان

function changeCity() {

    let selectCity = cityMe.value /// اسم استان درون متغییر ریخته میشه

    if (selectCity === "please select") {
        destination.innerHTML = '<option>Please select a city</option>'
        return /// در صورت انجام مراحل قبل کد متوقف میشه
    } else {

        let cities = boxBilit[selectCity] /// با انتخاب استان اسم شهر ها مشخص میشه 

        destination.innerHTML = '' /// خالی کردن لیست بعد از تغییر اسم شهر

        cities.forEach(function (city) {
            destination.innerHTML += '<option>' + city + '</option>';  // اضافه کردن شهرها به لیست
        });

    }

}