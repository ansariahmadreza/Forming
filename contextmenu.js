const contextMenu = document.getElementById("contextmenu")


document.addEventListener('contextmenu', function (event) {   /// تنظیم event روی html برای پوشاندن کل صفحه

    event.preventDefault() /// جلوگیری از نشان دادن منو پیشفرض مرورگر

    // گرفتن مقدار کلیک روی صفحه به جهت افقی و عمودی و بعد برابر قرار دادن مقدار منو با مقدار کلیک
    const xAxis = event.pageX
    const yAxis = event.pageY

    contextMenu.style.top = yAxis + 'px'
    contextMenu.style.left = xAxis + 'px'
    contextMenu.style.display = 'block'

})


document.addEventListener('click', function () {  /// تنظیم event روی html برای پوشاندن کل صفحه


    contextMenu.style.display = 'none'  /// در صورت کلیک منو پنهان میشه
})

document.addEventListener('keydown', function (event) {  /// تنظیم event روی html برای پوشاندن کل صفحه


    if (event.key === 'Escape') {

        contextMenu.style.display = 'none'  /// در صورت فشار دادن دکمه esc منو پنهان میشه
    }

})