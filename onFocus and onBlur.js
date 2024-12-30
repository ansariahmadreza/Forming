let userNameGet = document.querySelector('.userName')
let passwordGet = document.querySelector('.password')


function userNameFocus() {

    if (userNameGet.value.length < 12 ) {

        console.log('مقدار وارد شده کمتر از حد مجاز است')
    }


}



function userNameBlur() {


    if (userNameGet.value.length > 12) {

        console.log('مقدار لازم رعایت شده است')
        
    }


}


function passwordFocus() {


    if (passwordGet.value.length < 8) {

        console.log('مقدار لازم رعایت نشده است')
    }

}


function passwordBlur() {


    if (passwordGet.value.length > 8) {

        console.log('مقدار لازم رعایت شده است')
    }

} 