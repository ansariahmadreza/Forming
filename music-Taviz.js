const $ = document
const img = $.querySelector('.img')/// تصویر
const btnPer = $.querySelector('.btnPer')/// دکمه قبلی
const nextElemBtn = $.querySelector('.nextElem')/// دکمه بعدی

let arryImg = [
    'images/Surge-Select-Still-1024x806.webp',
    'images/OIP.jpg',
    'images/OIP.jpeg',
    'images/4.jpg'
]

let currentIndex = 0;

function previousElem() {

    if (currentIndex > 0) {
        currentIndex--
    } else {
        currentIndex = arryImg.length - 1
    }


    updateImage();
}

function nextElem() {
    if (currentIndex < arryImg.length - 1) {
        currentIndex++
    } else {
        currentIndex = 0
    }


    updateImage();
}

// تابع برای به‌روزرسانی تصویر
function updateImage() {
    let currentImg = arryImg[currentIndex]

    console.log(currentImg)
    
    img.src = currentImg
    img.style.backgroundImage = `url(${currentImg})`

}


btnPer.addEventListener('click', previousElem)
nextElemBtn.addEventListener('click', nextElem)
