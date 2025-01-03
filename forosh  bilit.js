const boxBilit = {

    fars: ['shiraz', 'fasa', 'noorabad', 'eqlid', 'jahrom'],
    kerman: ['kerman', 'bam', 'jiroft', 'rafsanjan'],
    tehran: ['theran', 'varamin', 'damavand']
}

let cityMe = document.querySelector('.cityMe')
let destination = document.querySelector('.destination')


cityMe.addEventListener('change', changeCity)

function changeCity() {

    let selectCity = cityMe.value

    if (selectCity === "please select") {
        destination.innerHTML = '<option>Please select a city</option>'
        return
    } else {

        let cities = boxBilit[selectCity]

        destination.innerHTML = ''

        cities.forEach(function (city) {
            destination.innerHTML += '<option>' + city + '</option>';  // اضافه کردن شهرها به لیست
        });

    }

}