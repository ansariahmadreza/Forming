let userInfo = document.querySelector('.userInfo')/// فراخوانی عنصر html
let resultSearch = location.search /// گرفتن قسمت
let searchParams = new URLSearchParams(resultSearch)
let userIdParam = searchParams.get('id')




let nameUser = [

   { id: 1, name: 'ahmadreza', age: 12 },
   { id: 2, name: 'hasan', age: 52 },
   { id: 3, name: 'ali', age: 21 },
   { id: 4, name: 'arman', age: 34 },
   { id: 5, name: 'akbar', age: 18 },
]


let mainUser = nameUser.find(function (users) {
   return users.id == userIdParam
})

if (mainUser) {

   userInfo.textContent = "Name:" + mainUser.name + '|Age:' + mainUser.age

} else {
   userInfo.textContent = 'user is not definde :('
}

