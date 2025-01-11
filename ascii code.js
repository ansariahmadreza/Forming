const $ = document
const keyDown = $.body
const titleEvent = $.querySelector('.title-event-box')
const eventKey = $.querySelector('.event-key')
const eventLocation = $.querySelector('.event-location')
const eventWhich = $.querySelector('.event-which')
const eventCode = $.querySelector('.event-code')
const wel = $.querySelector('.wel')
const bigCont = $.querySelector('.big-Cont')

console.log(eventWhich)

keyDown.addEventListener('keydown', function (event) {

    wel.style.display = 'none'
    bigCont.style.display = 'block'

    let selectWihch = event.which
    eventWhich.innerHTML = selectWihch
    titleEvent.innerHTML = selectWihch

    let selectKey = event.key
    eventKey.innerHTML = selectKey

    let selectLoc = event.location
    eventLocation.innerHTML = selectLoc

    let selectCode = event.code
    eventCode.innerHTML = selectCode

})


