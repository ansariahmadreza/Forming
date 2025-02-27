const dropElem = document.getElementsByClassName('drop')
const taskMe = document.getElementsByClassName('taskMe')
const pizza = document.getElementById('pizza')/// todo
const learnJs = document.getElementById('learn')/// todo
const deleteElem = document.getElementsByClassName('delete')
const todoElem = document.querySelector('.todo') /// فراخوانی عنصر Add Todo+
const todoHeader = document.getElementById('todoHeader')
const todoInput = document.getElementById('todoInput')
const btn = document.getElementById('btn')// دکمه  خذف قسمت ثبت todo
const boxTodo = document.querySelector('.boxTodo')/// والد todo ها



let elemId;// تعریف متغیر 
let arryDrop = Array.from(dropElem) /// arry تبدیل به  HTMLCollection 
let arryTask = Array.from(taskMe)/// arry تبدیل به  HTMLCollection 
let arryTaskMe = Array.from(deleteElem)/// arry تبدیل به  HTMLCollection 


/// تنظیم event برای ظاهر و پنهان شدن قشمت ثبت todo
btn.addEventListener('click', function (event) {


    if (event.target === btn) {

        todoHeader.style.display = 'none'
    }
})


/// در صورت کلیک قسمت Add Todo  ظاهر شده و کد های زیر رو انجام بده
todoElem.addEventListener('click', function (event) {


    if (event.target === todoElem) {  /// اگر کلیک برابر با همان عنصر Add Todo بود 

        todoHeader.style.display = 'block'  /// display رو برابر با بلاک قرار بده


        todoInput.addEventListener('keyup', function (event) { /// تنظیم event روی input 

            if (event.code === 'Enter') { /// اگر کاربر enter رو کلیک کرد


                let newBtnElem = document.createElement('button')  /// ساخت المنت btn
                let newDivElem = document.createElement('div') /// ساخت المنت div 
                let uniqueId = crypto.randomUUID() /// تنظیم ایدی رندوم


                newBtnElem.setAttribute('class', 'taskMe delete flex')  /// تنظیم کلاس دهی به btn ساخته شده
                newBtnElem.textContent = "X" // نسبت دهی مقدار x به btn در html
                newDivElem.setAttribute('class', 'taskMe flex')  /// تنظیم کلاس دهی به div ساخته شده
                newDivElem.id = uniqueId  // دادن ایدی رندوم به div ساخته شده
                newDivElem.setAttribute('draggable', 'true')  /// draggable کردن عنصر div


                newDivElem.textContent = event.target.value  ///  مقدار div رو با  input برابر قرار بده 

                if (event.key === 'Enter' && event.target.value.trim()) {  /// حذف فضای خالی  input و برابری دکمه با enter 

                    newDivElem.append(newBtnElem)  /// اضافه کردن دکمه ساخته شده به div ساخته شده 
                    boxTodo.append(newDivElem)   /// اضافه کردن  div ساخته شده والد todo ها به 

                }

                event.target.value = ''  /// خالی کردن مقدار input

                newBtnElem.addEventListener('click', function () {  /// تنظیم event روی btn

                    newBtnElem.parentElement.remove() // در صورت کلیک والد دکمه رو حذف کن

                })

                newDivElem.addEventListener('dragstart', function (event) {  // تنظیم شروع دراگ روی div ساخته شده

                    event.dataTransfer.setData('elemId', event.target.id) // شناسه عنصر را در datatransfer برای بازیابی در رویداد drop ذخیره کن
                    elemId = event.dataTransfer.getData('elemId')  /// فراخوانی مقدار id ذخیره شده در datatransfer با عنوان elemId


                })


                arryDrop.forEach(function (itemsDropNew) {   /// تنظیم forEach روی  arryDrop


                    itemsDropNew.addEventListener('dragover', function (event) { /// تنظیم event dragover


                        event.preventDefault() /// جلوگیری از رفتار پیش فرض 

                        let targetId = elemId  ///فراخوانی مقدار id تنظیم شده با data transfer
                        let targetElem = document.getElementById(targetId)// مرجعی از عنصر todo اضافه شده
                        event.target.append(targetElem) /// اد کردن todo به مکانی که event روش تنظیم شده

                    })

                })



            }

        })

    }

})
//// تنظیم event روی عنصر های موچود در html 

/// حذف عنصر
arryTaskMe.forEach(function (itemsTaskMe) { /// تنظیم foreach چون یک html کالکشن هست که به ارایه تبدیل شده 


    itemsTaskMe.addEventListener('click', function () {


        itemsTaskMe.parentElement.remove() // در صورت کلیک والد حذف میشه


    })

})

/// کشیدن
arryTask.forEach(function (itemTask) {/// تنظیم foreach چون یک html کالکشن هست که به ارایه تبدیل شده 



    itemTask.addEventListener('dragstart', function (event) {

        event.dataTransfer.setData('elemId', event.target.id)// شناسه عنصر را در datatransfer برای بازیابی در رویداد drop ذخیره کن
        elemId = event.dataTransfer.getData('elemId')/// فراخوانی مقدار id ذخیره شده در datatransfer با عنوان elemId

    })

})

/// رها کردن
arryDrop.forEach(function (itemsDrop) {/// تنظیم foreach چون یک html کالکشن هست که به ارایه تبدیل شده 


    itemsDrop.addEventListener('dragover', function (event) {


        event.preventDefault() /// جلوگیری از رفتار پیش فرص

        let targetId = elemId ///فراخوانی مقدار id تنظیم شده با data transfer
        let targetElem = document.getElementById(targetId)// مرجعی از عنصر todo اضافه شده
        event.target.append(targetElem)/// اد کردن todo به مکانی که event روش تنظیم شده



    })
})