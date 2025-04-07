/// لیست اسامی
let list_items = [
    { id: 1, name: 'ali', family: 'rezazade' },
    { id: 2, name: 'mohammad', family: 'ahmadi' },
    { id: 3, name: 'reza', family: 'karimi' },
    { id: 4, name: 'hossein', family: 'ebrahimi' },
    { id: 5, name: 'sara', family: 'mousavi' },

    { id: 6, name: 'mahdi', family: 'jalali' },
    { id: 7, name: 'zahra', family: 'mohammadi' },
    { id: 8, name: 'navid', family: 'taheri' },
    { id: 9, name: 'fatemeh', family: 'salari' },
    { id: 10, name: 'amir', family: 'hosseini' },

    { id: 11, name: 'armin', family: 'goudarzi' },
    { id: 12, name: 'shima', family: 'fatahi' },
    { id: 13, name: 'kian', family: 'soleimani' },
    { id: 14, name: 'parisa', family: 'sharifi' },
    { id: 15, name: 'vahid', family: 'moradi' },

    { id: 16, name: 'behnam', family: 'naderi' },
    { id: 17, name: 'mona', family: 'esmaili' },
    { id: 18, name: 'darya', family: 'bagheri' },
    { id: 19, name: 'sina', family: 'kamali' },
    { id: 20, name: 'arash', family: 'zarei' },

    { id: 21, name: 'mehran', family: 'jalali' },
    { id: 22, name: 'samira', family: 'farhadi' },
    { id: 23, name: 'nima', family: 'kazemi' },
    { id: 24, name: 'leila', family: 'bahrami' },
    { id: 25, name: 'hamed', family: 'akbari' }
]

const list_element = document.querySelector('.containerNamesUsers')/// فراخوانی باکس اسامی
const pagination_element = document.querySelector('.boxPage')/// فراخوانی باکس شماره های صفحه

let current_page = 1  // صفحه فعلی 
let rows = 5 // تعداد عناصر قابل نمایش در صفحه

function changePage() {

    let numberOfPages = Math.ceil(list_items.length / rows) // تعداد کلی صفحات

    pagination_element.innerHTML = ''  // خالی کردن باکس شماره های صفحه

    for (let i = 1; i <= numberOfPages; i++) {/// تنظیم حلقه for  از یک تا تعداد کل صفحات شماره مینوسه

        let newDivElemNumbers = document.createElement('div')// به تعداد شماره های صفحه element میسازه
        newDivElemNumbers.classList.add('box1')
        newDivElemNumbers.innerText = i // برابر قرار دادن  شماره های نوشته شده با محتوای داخلی div ساخته شده
    
        newDivElemNumbers.addEventListener('click', function (event) { // تنظیم event کلیک روی div ساخته شده
            
            if (event.target.innerText == i) {  /// شرط ایراد داره ولی کار میکنه
                current_page = event.target.innerText // اینجا مقدار صفحه فعلی با المنتی که کاربر روش کلیک میکنه برابر میشه
            }
            displayList()// فراخوانی یک تابع دیگه
        })
        pagination_element.append(newDivElemNumbers) // اضافه کردن div ساخته شده  به باکس شماره های صفحه
    }
}
function displayList(page) {

    list_element.innerHTML = '' /// خالی کردن باکس اسامی

    changePage() /// فراخوانی تابع
    page = current_page  // قرار دادن مقدار صفحه با مقدار صفحه فعلی

    let end = rows * page  /// تنظیم انتهای slice با ضربدر کردن مقدار عناصر در صفحه فعلی
    let start = end - rows /// تنظیم ابتدای slice  با کم کردن مقدار عناصر صفحه از end

    let sliceElem = list_items.slice(start, end)  ///slice

    sliceElem.forEach(function (item) {  // تنظیم foreach روی مقدار slice شده 

        let newDivElem = document.createElement('div')/// ساخت div به تعداد عناصر slice شده 
        newDivElem.innerHTML = item.name + ' ' + item.family  /// برابر قرار دادن مقدار div ساخته شده با اسم و فامیلی عناصر slice شده در ارایه
        newDivElem.classList.add('borderSolid')
        list_element.append(newDivElem) // اضافه کردن div اسامی به باکس 
    })
}
window.addEventListener('load', displayList)