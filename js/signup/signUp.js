const signUpButton = document.querySelector('.sign-up__button')

const signUpModal = document.querySelector('.sign-up__modal')

const signUpContainer = signUpModal.querySelector('.sign-up__container')

const signUpCloseButton = signUpModal.querySelector('.sign-up__closebutton')

const signUpBackButton = signUpModal.querySelector('.sign-up__backbutton')



let onModalSignClick = function (evt) {
  if(evt.target.matches('.sign-up__modal')) {
    onModalSignCloseClick1()
  }
}
let addSignModalEventListerens = function () {

    signUpModal.addEventListener('click', onModalSignClick)
    signUpButton.addEventListener('click', onModalSignCloseClick)
    signUpCloseButton.addEventListener('click', onModalSignCloseClick)
    signUpBackButton.addEventListener('click', onModalSignCloseClick)
    document.addEventListener('keyup', onDocumentSignKeyUp)
}
let removeSignModalEventListerens = function () {

    signUpModal.removeEventListener('click', onModalSignClick)
    signUpButton.removeEventListener('click', onModalSignCloseClick)
    signUpCloseButton.removeEventListener('click', onModalSignCloseClick)
    signUpBackButton.removeEventListener('click', onModalSignCloseClick)
}



let onOpenModalSignButton1 = function () {
    signUpModal.classList.add('modal--open')
    
    addSignModalEventListerens()
  }

let onModalSignCloseClick1 = function () {
    signUpModal.classList.remove('modal--open');

    removeSignModalEventListerens()
  }

let onDocumentSignKeyUp = function(evt) {
    if (evt.keyCode === 27) {
      onModalSignCloseClick1()
    }
  }

let onOpenModalSignButton = function () {
    onOpenModalSignButton1()
  }

let onModalSignCloseClick = function () {
    onModalSignCloseClick1()
  }

signUpButton.addEventListener('click', onOpenModalSignButton)