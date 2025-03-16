const spanValueKg = document.querySelector('.spanValueKg')/// ابزار نشون دادن کیلوگرم
const spanValueCm = document.querySelector('.spanValueCm')// ابزار نشون دادن قد
const inputValueKg = document.querySelector('.inputValueKg')/// مقدار وزن
const inputValueCm = document.querySelector('.inputValueCm')/// مقدار قد 
const valueKgBmi = document.querySelector('.valueKgBmi')/// مقدار bmi
const valueBmi = document.querySelector('.valueBmi')/// وضعیت سلامتی

spanValueCm.textContent = 'Cm' + ' ' + inputValueCm.value
spanValueKg.innerHTML = 'Kg' + ' ' + inputValueKg.value

function changeCm() {
    spanValueCm.textContent = 'Cm' + ' ' + inputValueCm.value
    changeBmi()
}

function changeKg() {
    spanValueKg.innerHTML = 'Kg' + ' ' + inputValueKg.value
    changeBmi()

}

function changeBmi() {

    let changeCmInput = inputValueCm.value / 100

    let Bmi = inputValueKg.value / (changeCmInput ** 2)
    valueKgBmi.innerHTML = Bmi.toFixed(2)

    if (Bmi < 18.5) {
        valueBmi.innerHTML = 'Underweight'
        valueBmi.style.color = 'rgb(225, 248, 20)'
    } else if (Bmi >= 18.5 && Bmi < 24.5) {
        valueBmi.innerHTML = 'Healthy weight'
        valueBmi.style.color = 'green'
    } else if (Bmi >= 25 && Bmi < 29.9) {
        valueBmi.innerHTML = 'Overweight'
        valueBmi.style.color = 'rgba(255,136,77,0.8)'
    } else {
        valueBmi.innerHTML = 'Obesity'
        valueBmi.style.color = 'red'
    }
}

inputValueCm.addEventListener('input', changeCm)
inputValueKg.addEventListener('input', changeKg)