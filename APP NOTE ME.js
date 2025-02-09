const itemColor = document.querySelectorAll('.itemColor') ///رنگ ها
const input = document.querySelector('.input')/// input
const plus = document.querySelector('.plus') //ایکون به اضافه
const eraser = document.querySelector('.eraser')///ایکون پاک کن
const ContainerNote = document.querySelector('.Container')
const form = document.querySelector('.form')/// فراخوانی تگ form
const modal = document.querySelector('.modal')

/// تغییر رنگ پس زمینه input
itemColor.forEach(function (color) {

    color.addEventListener('click', function (event) {

        input.style.background = event.target.style.color

    })

})

eraser.addEventListener('click', function () {/// در صورت کلیک روی پاک کن مقدار اینپوت و رنگ رو در صورتی که انتخاب شده پاک کن
    input.value = ''
    input.style.background = 'none'
})


form.addEventListener('submit', function (event) {/// جلوگیری از حالت پیش فرض فرم
    event.preventDefault()
})


///با تنظیم event روی دکمه enter یادداشت رو اضافه میکنه
input.addEventListener('keydown', function (event) {

    const p = document.createElement('p')
    const boxNote = document.createElement('div')



    if (event.key === 'Enter' && event.target.value.trim()) {


        p.textContent = event.target.value
        boxNote.append(p)
        ContainerNote.append(boxNote)
        p.style.background = event.target.style.background


        input.value = ''

    }


})

/// تنظیم event روی دکمه plus برای اضافه کردن یادداشت
plus.addEventListener('click', function (event) {


    if (input.value === '') {  /// با فشار دادن plus در صورت خالی بودن input پیام زیر نمایش داده شود

         modal.innerHTML = 'لطفا مقدار مناسب را وارد کنید'
        modal.style.display = 'block'


        setTimeout(function () {

            modal.style.display = 'none'



        }, 3000)
       

    } else {/// اگر خالی نبود با ظرف اضافه بشه یادداشت


        const p = document.createElement('p')
        const boxNote = document.createElement('div')
        p.textContent = input.value
        boxNote.append(p)
        ContainerNote.append(boxNote)
        p.style.background = input.style.background


        input.value = ''

    }
})


/// event حذف عنصر
ContainerNote.addEventListener('click', function (event) {



    const alarmConfirm = confirm('آیا می‌خواهید یادداشت را حذف کنید؟')

    if (alarmConfirm) {
        event.target.parentElement.remove()
    } else if (!alarmConfirm) {

        modal.style.display = 'block'
        modal.innerHTML = 'یادداشت حذف نشد'
        modal.style.background = 'black'
        modal.style.color = 'white'


        setTimeout(function () {

            modal.style.display = 'none'

        }, 3000)
       
    }


})