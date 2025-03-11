/// code me defective
// const blueBtn = document.querySelector('.blue')/// دکمه add todo
// const inputTodo = document.querySelector('.inputTodo') /// input
// const footerTodo = document.querySelector('.footerTodo')/// todo های اضافه شده
// const btnRed = document.querySelector('.red')



// let arryTodo = [] // آرایه ای برای ذخیره کردن todo ها

// function MakingElements(todo) {

//     inputTodo.focus()// فوکوس روی input
//     let newSpan = document.createElement('span')/// ساخت span
//     let newDivBtn = document.createElement('div')// ساخت div برای دکمه ها
//     let newDivAll = document.createElement('div')// ساخت div کلی
//     let newBtn = document.createElement('button')/// ساخت btn تکمیل و عدم تکمیل todo
//     let newBtn2 = document.createElement('button')/// ساخت btn حذف todo

//     newBtn.setAttribute('class', 'btnTodo greenBtn') //   اضافه کردن کلاس به دکمه مورد نظر تکمیل و عدم تکمیل وظیفه
//     newBtn2.setAttribute('class', 'btnTodo redBtn')// اضافه کردن کلاس به دکمه حذف رویداد
//     newDivBtn.setAttribute('class', 'AddTodoMe')// کلاس دهی به div دکمه ها
//     newDivAll.setAttribute('class', 'AddedTodo')///کلاس دهی به div کلی رویداد و یادداشت   


//     if (inputTodo.value.trim()) {// فقط در صورتی که input حاوی محتوا باشد کد های بعدی رو اجرا کن

//         let arryNewTodo = ({ id: arryTodo.length + 1, content: inputTodo.value, status: 'Not completed' })// ذخیره کردن اطلاعات در آرایه
//         arryTodo.push(arryNewTodo)// ذخیره کردن اطلاعات در آرایه
//         localStorage.setItem('TodoList', JSON.stringify(arryTodo))// ذخیره کردن اطلاعات در localstorage
//         let getArryMe = JSON.parse(localStorage.getItem('TodoList'))// خواندن اطلاعات از localstorage

//         getArryMe.forEach(function (item) {

//             newBtn.innerHTML = item.status// مقدار دهی به دکمه تکمیل و عدم تکمیل وظیفه   
//             newBtn2.innerHTML = 'Delete'/// مقدار دهی به دکمه حذف وظیفه
//             newSpan.innerText = item.content // اضافه کردن مقدار input به span ساخته شده

//             // newBtn.addEventListener('click', function () {

//             //     getArryMe.forEach(function (item) {

//             //         if (newBtn.innerHTML === 'Not completed') {

//             //             item.status = 'completed'
//             //             newSpan.style.textDecoration = 'line-through' // خط کشیده شدن متن
//             //             newSpan.style.color = 'green' // رنگ متن
//             //             newBtn.innerHTML = item.status
//             //             localStorage.setItem('TodoList', JSON.stringify(getArryMe))
//             //         } 
//             //     })
//             // })
//         })


//         newBtn.addEventListener('click', function () {
//             todo.status = todo.status === 'Not completed' ? 'completed' : 'Not completed';
//             newSpan.style.textDecoration = todo.status === 'completed' ? 'line-through' : 'none';
//             newSpan.style.color = todo.status === 'completed' ? 'green' : 'black';
//             newBtn.textContent = todo.status;
//             localStorage.setItem('TodoList', JSON.stringify(arryTodo));
//         });
    

//         newDivBtn.append(newBtn, newBtn2)///اضافه کردن دکمه ها به div ساخته شده
//         inputTodo.value = ''// خالی کردن مقدار input
//         newDivAll.append(newSpan) /// اضافه کردن span ساخته شده به div ساخته شده
//         newDivAll.append(newDivBtn) // اضافه کردن div ساخته شده دکمه ها به div کلی
//         footerTodo.append(newDivAll)// اضافه کردن div کلی به والد اصلی
//     }



  

 

// }


// window.onload = function () {


//     inputTodo.focus()// فوکوس روی input

//     let getArryMe = (localStorage.getItem('TodoList')) // خواندن اطلاعات از localstorage

//     if (getArryMe && getArryMe !== null) {

//         let getLocal = JSON.parse(getArryMe)



//         getLocal.forEach(function (item) {



//             newSpan = document.createElement('span')/// ساخت span
//             newDivBtn = document.createElement('div')// ساخت div برای دکمه ها
//             newDivAll = document.createElement('div')// ساخت div کلی
//             newBtn = document.createElement('button')/// ساخت btn تکمیل و عدم تکمیل todo
//             newBtn2 = document.createElement('button')/// ساخت btn حذف todo

//             newBtn.setAttribute('class', 'btnTodo greenBtn') //   اضافه کردن کلاس به دکمه مورد نظر تکمیل و عدم تکمیل وظیفه
//             newBtn2.setAttribute('class', 'btnTodo redBtn')// اضافه کردن کلاس به دکمه حذف رویداد
//             newDivBtn.setAttribute('class', 'AddTodoMe')// کلاس دهی به div دکمه ها
//             newDivAll.setAttribute('class', 'AddedTodo')///کلاس دهی به div کلی رویداد و یادداشت

//             newBtn.innerHTML = item.status// مقدار دهی به دکمه تکمیل و عدم تکمیل وظیفه   
//             newBtn2.innerHTML = 'Delete'/// مقدار دهی به دکمه حذف وظیفه
//             newSpan.innerText = item.content // اضافه کردن مقدار input به span ساخته شده
//             newDivBtn.append(newBtn, newBtn2)///اضافه کردن دکمه ها به div ساخته شده
//             newDivAll.append(newSpan) /// اضافه کردن span ساخته شده به div ساخته شده

//             newDivAll.append(newDivBtn) // اضافه کردن div ساخته شده دکمه ها به div کلی
//             footerTodo.append(newDivAll)// اضافه کردن div کلی به والد اصلی


//             arryNewTodo = ({ id: arryTodo.length + 1, content: inputTodo.value, status: 'Not completed' })// ذخیره کردن اطلاعات در آرایه
//             arryTodo.push(arryNewTodo)// ذخیره کردن اطلاعات در آرایه



//         })
//     } else {
//         console.log("هیچ اطلاعاتی پیدا نشد");
//     }



// }

// blueBtn.addEventListener('click', function () { ///  تنظیم رویداد کلیک روی دکمه
//     MakingElements()
// })

// inputTodo.addEventListener('keyup', function (event) {/// تنظیم رویداد کلیک روی دکمه اینتر  

//     if (event.key === "Enter" && inputTodo.value.trim()) {/// تنظیم رویداد کلیک روی دکمه اینتر
//         MakingElements()
//     }
// })






///// code chatbat
const blueBtn = document.querySelector('.blue');
const inputTodo = document.querySelector('.inputTodo');
const footerTodo = document.querySelector('.footerTodo');
const btnRed = document.querySelector('.red');

let arryTodo = JSON.parse(localStorage.getItem('TodoList')) || []; // بازیابی اطلاعات از localStorage یا مقدار پیش‌فرض

function renderTodos() {
    footerTodo.innerHTML = '';
    arryTodo.forEach(todo => createTodoElement(todo));
}

function createTodoElement(todo) {
    let newSpan = document.createElement('span');
    let newDivBtn = document.createElement('div');
    let newDivAll = document.createElement('div');
    let newBtn = document.createElement('button');
    let newBtn2 = document.createElement('button');

    newBtn.classList.add('btnTodo', 'greenBtn');
    newBtn2.classList.add('btnTodo', 'redBtn');
    newDivBtn.classList.add('AddTodoMe');
    newDivAll.classList.add('AddedTodo');

    newBtn.textContent = todo.status;
    newBtn2.textContent = 'Delete';
    newSpan.innerText = todo.content;

    newBtn.addEventListener('click', function () {
        todo.status = todo.status === 'Not completed' ? 'completed' : 'Not completed';
        newSpan.style.textDecoration = todo.status === 'completed' ? 'line-through' : 'none';
        newSpan.style.color = todo.status === 'completed' ? 'green' : 'black';
        newBtn.textContent = todo.status;
        localStorage.setItem('TodoList', JSON.stringify(arryTodo));
    });

    newBtn2.addEventListener('click', function () {
        deleteTodo(todo.id);
    });

    newDivBtn.append(newBtn, newBtn2);
    newDivAll.append(newSpan, newDivBtn);
    footerTodo.append(newDivAll);
}

function deleteTodo(todoId) {
    arryTodo = arryTodo.filter(item => item.id !== todoId);
    localStorage.setItem('TodoList', JSON.stringify(arryTodo));
    renderTodos();
}

function addTodo() {
    if (!inputTodo.value.trim()) return;
    
    let newTodo = {
        id: Date.now(),
        content: inputTodo.value,
        status: 'Not completed'
    };

    arryTodo.push(newTodo);
    localStorage.setItem('TodoList', JSON.stringify(arryTodo));
    createTodoElement(newTodo);
    inputTodo.value = '';
    inputTodo.focus();
}

window.onload = renderTodos;
blueBtn.addEventListener('click', addTodo);
inputTodo.addEventListener('keyup', event => { if (event.key === 'Enter') addTodo(); });
btnRed.addEventListener('click', function () {
    arryTodo = [];
    localStorage.removeItem('TodoList');
    footerTodo.innerHTML = '';
});
