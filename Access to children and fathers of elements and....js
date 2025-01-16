const head1 = document.getElementById('head1')
const head2 = document.getElementById('head2')
const head3 = document.getElementById('head3')
const head4 = document.getElementById('head4')
const head5 = document.getElementById('head5')
const head6 = document.getElementById('head6')

console.log(head3.parentNode)
console.log(head3.parentElement)
console.log(head3.previousElementSibling.previousElementSibling)/// نود های قبلی المنت رو بر میگردونه و هربار تکرار شه یکی میره عقب
console.log(head3.nextElementSibling.nextElementSibling)////فقط نود های المنت رو برمیگردونه البته بعدیاش

//// اموزش تفاوت بین پریویس المنت سیبلینگ و المینت سیبلنگ صرفا

const listItems = document.getElementsByClassName('list-item')



console.log(listItems[1].nextSibling)/// هر نوع نود بعدی رو بر میگردونه
console.log(listItems[1].previousSibling.previousSibling)/// هر نوع نود قبلی رو برمیگردونه





const list = document.getElementById('list')

console.log(list.childElementCount)  /// فقط فرزاندان مستقیم رو میشماره زیر مجموعه های فرزندان رو نمیشماره
console.log(list.children[2])// فقط بچه های که المنت هستن رو برمیگردونه
console.log(list.childNodes)  /// تمام نود های زیر مجموعه رو برمیگردونه
console.log(list.hasChildNodes) 

console.log(list.firstChild)
console.log(list.lastChild)

console.log(list.firstElementChild)
console.log(list.lastElementChild.style.color='red')

console.log(list.lastElementChild.firstElementChild.style.color='red')
