const form = document.querySelector('.form')
const bgBack = document.querySelector('.bg-back')/// addBook
const titleBook = document.querySelector('.titleBook')//عنوان کتاب
const AuthorBook = document.querySelector('.AuthorBook')// نویسنده کتاب
const yearBook = document.querySelector('.yearBook')// سال نوشتن کتاب
const boxBook = document.querySelector('.boxBook')
let newBookList = []/// تنظیم ارایه
function addBookNew() {
    // اجبار به پر کردن مقادیر inputها
    if (!titleBook.value || !AuthorBook.value || !yearBook.value) {
        alert('لطفاً تمام فیلدها را پر کنید.');
        return;
    }
    let newBook = { id: newBookList.length + 1, Title: titleBook.value, Author: AuthorBook.value, Year: yearBook.value }
    newBookList.push(newBook)// اضافه کردن مقادیر جدید ابجکت ها به ارایه
    localStorage.setItem('listBooks', JSON.stringify(newBookList))// ثبت داده ها در localstorage
    createelement()/// فراخوان یک تابع دیگر
    titleBook.value = ''
    AuthorBook.value = ''
    yearBook.value = ''  
}
function createelement() {

    boxBook.innerHTML = ""// خالی کردن باکس قبل از پر کردن
    let getnewBookList = JSON.parse(localStorage.getItem('listBooks')) || []  // فراخوان داده از localstorage
    getnewBookList.forEach(function (item) {

        let newTrElem = document.createElement('tr')
        let newTdTitle = document.createElement('td')
        let newTdAuthor = document.createElement('td')
        let newTdYear = document.createElement('td')
        newTdTitle.textContent = item.Title
        newTdAuthor.textContent = item.Author
        newTdYear.textContent = item.Year
        newTrElem.append(newTdTitle, newTdAuthor, newTdYear);
        boxBook.append(newTrElem);
    })
}
// جلوگیری از رفتار پیش فرضform
form.addEventListener('submit', function (event) {
    event.preventDefault()
})  
// تنظیم تابع برای ماندن اطلاعات بعد از لود صفحه
window.addEventListener('load', function () {
    createelement()  
})
bgBack.addEventListener('click', addBookNew)