const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const second = document.querySelector('.second')



setInterval(function () {

    let myTime = new Date()
    timeHours = myTime.getHours()
    timeMin = myTime.getMinutes()
    timeSec = myTime.getSeconds()

    hours.innerHTML = timeHours + ' ' + ':'
    minutes.innerHTML = timeMin + ' ' + ':'


    if (timeSec < 10) {


        second.innerHTML = '0' + timeSec
    } else {

        second.innerHTML = timeSec
    }


    if (timeMin < 10) {


        second.innerHTML = '0' + timeMin
    } else {

        second.innerHTML = timeMin
    }


    if (timeHours < 10) {


        second.innerHTML = '0' + timeHours
    } else {

        second.innerHTML = timeHours
    }

    console.log('هر یک ثانیه')/// برای امتحان کردن درستی سینتکس setinterval

}, 1000)


//console.log(myTime)
// console.log(myTime.getFullYear())
// console.log(myTime.getMonth())
// console.log(myTime.getDate())
// console.log(myTime.getHours())
// console.log(myTime.getMinutes())
// console.log(myTime.getSeconds())
// console.log(myTime.getDay())