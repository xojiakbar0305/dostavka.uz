const signUpButton2 = document.querySelector('.sign-up__button2')

const signUpModal2 = document.querySelector('.sign-up__modal2')

const signUpContainer2 = signUpModal2.querySelector('.sign-up__container2')

const signUpCloseButton2 = signUpModal2.querySelector('.sign-up__closebutton2')

const signUpBackButton2 = signUpModal2.querySelector('.sign-up__backbutton2')



let onModalSignClick2 = function (evt) {
  if(evt.target.matches('.sign-up__modal2')) {
    onModalSignCloseClick2()
  }
}
let addSignModalEventListerens2 = function () {

    signUpModal2.addEventListener('click', onModalSignClick2)
    signUpButton2.addEventListener('click', onModalSignCloseClicks)
    signUpCloseButton2.addEventListener('click', onModalSignCloseClicks)
    signUpBackButton2.addEventListener('click', onModalSignCloseClicks)
    document.addEventListener('keyup', onDocumentSignKeyUps)
}
let removeSignModalEventListerens2 = function () {

    signUpModal2.removeEventListener('click', onModalSignClick2)
    signUpButton2.removeEventListener('click', onModalSignCloseClicks)
    signUpCloseButton2.removeEventListener('click', onModalSignCloseClicks)
    signUpBackButton2.removeEventListener('click', onModalSignCloseClicks)
}



let onOpenModalSignButtons = function () {
    signUpModal2.classList.add('modal--open')
    
    addSignModalEventListerens2()
  }

let onModalSignCloseClicks = function () {
    signUpModal2.classList.remove('modal--open');

    removeSignModalEventListerens2()
  }

let onDocumentSignKeyUps = function(evt) {
    if (evt.keyCode === 27) {
      onModalSignCloseClicks()
    }
  }

let onOpenModalSignButton2 = function () {
    onOpenModalSignButtons()
  }

let onModalSignCloseClick2 = function () {
    onModalSignCloseClicks()
  }

signUpButton2.addEventListener('click', onOpenModalSignButton2)