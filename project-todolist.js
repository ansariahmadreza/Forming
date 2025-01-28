const boxList = document.querySelector('.box-list') /// فراخوانی ul از dom
const newToDo = document.getElementById('newToDo')/// فراخوانی input
const modal = document.querySelector('.modal')



newToDo.addEventListener('keydown', function (event) {

    if (event.key === 'Enter' && event.target.value === '') {  /// اگر خالی بود input مقدار زیر رو نشون بده

        modal.style.display = 'block'



        event.preventDefault()

        setTimeout(function () {

            modal.style.display = 'none'

        }, 2000)

    } else if (event.key === 'Enter') {


        event.preventDefault()// چلوگیری از رفتار پیش فرض


        const liItem = document.createElement('li') /// ساخت element Li
        const span = document.createElement('span') /// ساخت element Span
        const iItem = document.createElement('i')// ساخت element i
        iItem.classList.add('group-i', 'fa-solid', 'fa-trash-can') /// اضافه کردن class به element i

        span.textContent = event.target.value  /// برابر قرار دادن مقدار تگ span با مقدار ورودی input
        liItem.append(span)  // add کردن تگ span به element i
        liItem.append(iItem) /// add کردن المنت i به li
        boxList.append(liItem)  // اد کردن li به ul
        event.target.value = ''  /// خالی کردن مقدار input بعد از add کردن مقدار ورودی کاربر



        iItem.addEventListener('click', function (event) {   /// تنظیم event برای مقدار ورودی کاربر به جهت حذف ان در صورت کلیک بر روی سطل زباله


            event.target.parentElement.remove()

        })
    }

})
