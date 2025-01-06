/// code me
// let cityDatas = [{ id: 1, city: 'tehran', temp: 40, des: 'sunny', windspeed: 32, humidity: 26 },
// { id: 2, city: 'shiraz', temp: 25, des: 'sunny', windspeed: 20, humidity: 34 },
// { id: 3, city: 'tabriz', temp: -15, des: 'sunny', windspeed: 11, humidity: 20 },
// ]

// let inp = document.querySelector('.inp')//فراخوانی input
// let btn = document.querySelector('.btn')//فراخوانی دکمه



///فراخوانی معیار های وضعیت اب و هوا
// let temp = document.querySelector('.temp')
// let des = document.querySelector('.des')
// let windspeed = document.querySelector('.windspeed')
// let humidity = document.querySelector('.humidity')
// let city = document.querySelector('.city')


//تنظیم event
// btn.addEventListener('click', CityTemperature)



// function CityTemperature() {
//     console.log(inp.value)
//     let result = cityDatas.find(function (item) {


// if (item.city === inp.value) {   //اگر اسم شهر وارد شده از طرف کاربر با اسم شهر موجود در پایگاه داده برابر بود داده های موجود از شهر وارد شده را طبق کد بعد فراخوانی کن  
//     return item = cityDatas
// }
// })

// if (!result) {///اگر اسم شهر وارد شده موجود نبود بنویس شهر یافت نشد و تابع را متوقف کن
//     console.log('شهر مورد نظر یافت نشد')
//     return
// }


///درون ریزی داده های اب و هوا در متغیر
// let selectCity = 'city' + '  ' + result.city
// let selectTemp = 'temp' + '  ' + result.temp
// let selectDes = 'des' + '  ' + result.des
// let selectWindspeed = 'windspeed' + '  ' + result.windspeed
// let selectHumidity = 'humidity' + '  ' + result.humidity


///برابر کردن متغیر ها با کد های html
//     city.innerHTML = selectCity
//     temp.innerHTML = selectTemp
//     des.innerHTML = selectDes
//     windspeed.innerHTML = selectWindspeed
//     humidity.innerHTML = selectHumidity
// }



////code teacher ///////



const boxCity = {
    tehran: { city: 'tehran', temp: 40, des: 'sunny', windspeed: 32, humidity: 26 },
    shiraz: { city: 'shiraz', temp: 25, des: 'sunny', windspeed: 20, humidity: 34 },
    tabriz: { city: 'tabriz', temp: -15, des: 'sunny', windspeed: 11, humidity: 20 },
    mashhad: { city: 'mashhad', temp: 2, des: 'windy', windspeed: 12, humidity: 13 }
}




let $ = document
let searchBtn = $.getElementById('search')
let searchBar = $.querySelector('.search-Bar')
let selectCity = $.querySelector('.city')


searchBtn.addEventListener('click', changeCity)


let imgBack = document.querySelector('.imgBack')

imgBack.addEventListener('click', changeImg)

function changeImg() {

    imgBox = ['images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
    ]

    let randomImg = imgBox[Math.floor(Math.random() * imgBox.length)]
    imgBack.src = randomImg
    imgBack.style.background =`url(${randomImg})`
}




function changeCity() {

    let searchBarValue = searchBar.value
    let mainBoxCity = boxCity[searchBarValue]

    if (mainBoxCity) {
        selectCity.innerHTML = mainBoxCity.city
        $.querySelector('.temp').innerHTML = mainBoxCity.temp + 'C'
        $.querySelector('.description').innerHTML = mainBoxCity.des
        $.querySelector('.humidity').innerHTML = 'humidity:' + mainBoxCity.humidity
        $.querySelector('.windspeed').innerHTML = 'windSpeed:' + mainBoxCity.humidity + 'km/h'
    } else {

        alert('شهر مورد نظر را به درستی وارد کنید')
    }
}