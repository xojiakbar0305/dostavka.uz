const elModalButton = document.querySelector('#button-modal__open')
const elModal = document.querySelector('.modal')

const elModalDialog = elModal.querySelector('.modal__dialog')
const elModalClose = elModal.querySelector('.button__close')
let onModalClick = function (evt) {
  if(evt.target.matches('.modal')) {
    closeModal()
  }
}
let addModalEventListerens = function () {
    elModal.addEventListener('click', onModalClick)
    elModalClose.addEventListener('click', onModalCloseClick)
    document.addEventListener('keyup', onDocumentKeyUp)
}
let removeModalEventListerens = function () {
    elModal.removeEventListener('click', onModalClick)
    elModalClose.removeEventListener('click', onModalCloseClick)
}



let openModal = function () {
    elModal.classList.add('modal--open')
    
    addModalEventListerens()
  }

let closeModal = function () {
    elModal.classList.remove('modal--open');

    removeModalEventListerens()
  }

let onDocumentKeyUp = function(evt) {
    if (evt.keyCode === 27) {
      closeModal()
    }
  }

let onOpenModalButtonClick = function () {
    openModal()
  }

let onModalCloseClick = function () {
    closeModal()
  }

elModalButton.addEventListener('click', onOpenModalButtonClick)