const activeLeftBorder = document.querySelector('.active-left__border')
const activeDiv = document.querySelector('.active-div')
const activesDivs = document.querySelector('.actives-divs')
const activeBorder = document.querySelector('.active-border') 

const carToSend = document.querySelector('.car-tosend')
const carSendMore = document.querySelector('.car-send-more')
const carAgain = document.querySelector('.car-again')
const carDispatch = document.querySelector('.car-dispatch')

////////on foot////

activeLeftBorder.addEventListener('click', function () {
    activeLeftBorder.classList.add('bg-color')
    activeLeftBorder.classList.add('text--color')

    activeDiv.classList.remove('bg-color')
    activeDiv.classList.remove('text--color')

    activesDivs.classList.remove('bg-color')
    activesDivs.classList.remove('text--color')

    activeBorder.classList.remove('bg-color')
    activeBorder.classList.remove('text--color')
})

activeDiv.addEventListener('click', function () {
    activeDiv.classList.add('bg-color')
    activeDiv.classList.add('text--color')

    activeLeftBorder.classList.remove('bg-color')
    activeLeftBorder.classList.remove('text--color')

    activesDivs.classList.remove('bg-color')
    activesDivs.classList.remove('text--color')

    activeBorder.classList.remove('bg-color')
    activeBorder.classList.remove('text--color')
})

activesDivs.addEventListener('click', function () {
    activesDivs.classList.add('bg-color')
    activesDivs.classList.add('text--color')

    activeLeftBorder.classList.remove('bg-color')
    activeLeftBorder.classList.remove('text--color')

    activeBorder.classList.remove('bg-color')
    activeBorder.classList.remove('text--color')

    activeDiv.classList.remove('bg-color')
    activeDiv.classList.remove('text--color')
})
activeBorder.addEventListener('click', function () {
    activeBorder.classList.add('bg-color')
    activeBorder.classList.add('text--color')

    activeLeftBorder.classList.remove('bg-color')
    activeLeftBorder.classList.remove('text--color')

    activesDivs.classList.remove('bg-color')
    activesDivs.classList.remove('text--color')

    activeDiv.classList.remove('bg-color')
    activeDiv.classList.remove('text--color')
})

/////////////////on foot////

/////////////car dispatch////

carToSend.addEventListener('click', function () {
   	carToSend.classList.add('bg-color')
    carToSend.classList.add('text--color')

    carSendMore.classList.remove('bg-color')
    carSendMore.classList.remove('text--color')

   	carAgain.classList.remove('bg-color')
    carAgain.classList.remove('text--color')

    carDispatch.classList.remove('bg-color')
    carDispatch.classList.remove('text--color')
})

carSendMore.addEventListener('click', function () {
    carSendMore.classList.add('bg-color')
    carSendMore.classList.add('text--color')

    carToSend.classList.remove('bg-color')
    carToSend.classList.remove('text--color')

    carAgain.classList.remove('bg-color')
    carAgain.classList.remove('text--color')

    carDispatch.classList.remove('bg-color')
    carDispatch.classList.remove('text--color')
})

carAgain.addEventListener('click', function () {
    carAgain.classList.add('bg-color')
    carAgain.classList.add('text--color')

    carSendMore.classList.remove('bg-color')
    carSendMore.classList.remove('text--color')

    carToSend.classList.remove('bg-color')
    carToSend.classList.remove('text--color')

    carDispatch.classList.remove('bg-color')
    carDispatch.classList.remove('text--color')
})
carDispatch.addEventListener('click', function () {
    carDispatch.classList.add('bg-color')
    carDispatch.classList.add('text--color')

    carToSend.classList.remove('bg-color')
    carToSend.classList.remove('text--color')

    carSendMore.classList.remove('bg-color')
    carSendMore.classList.remove('text--color')

    carAgain.classList.remove('bg-color')
    carAgain.classList.remove('text--color')
})


// ///car dispatch///