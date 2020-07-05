const elSpanModals = document.querySelector('#modal-password2')
const elModalItems = document.querySelector('.modalItems')

const elModalDialogsItem = elModalItems.querySelector('.modal__dialoglists')
const elModalClosesItem = elModalItems.querySelector('#modalItem__closes')
const elModalClosesItems1 = elModalItems.querySelector('#modal__closesbutton')



let onModalItemClicks = function (evt) {
  if(evt.target.matches('.modalItems')) {
    closeModalsItems()
  }
}

let addModalEventListerensItem = function () {
	  elModalItems.addEventListener('click', onModalItemClicks)
    elModalClosesItem.addEventListener('click', onModalCloseClickLists)
    elModalClosesItems1.addEventListener('click', onModalCloseClickLists)
    document.addEventListener('keyup', onDocumentKeyUpsItem)
}


let removeModalEventListerensItem = function () {
  	elModalItems.removeEventListener('click', onModalItemClicks)
    elModalClosesItems1.removeEventListener('click', onModalCloseClickLists)
    elModalClosesItem.removeEventListener('click', onModalCloseClickLists)
}

let openModalsItems = function () {
    elModalItems.classList.add('modal--showns')
    addModalEventListerensItem()
  }

let closeModalsItems = function () {
    elModalItems.classList.remove('modal--showns');
    removeModalEventListerensItem()
  }
let onDocumentKeyUpsItem = function(evt) {
    if (evt.keyCode === 27) {
      closeModalsItems()
    }
  }

let onOpenModalButtonClickListItem = function () {
    openModalsItems()
  }

let onModalCloseClickLists = function () {
    closeModalsItems()
  }

elSpanModals.addEventListener('click', onOpenModalButtonClickListItem)

/////////////////////////////////////


const elSpanModal = document.querySelector('#modal-password')
const elModalItem = document.querySelector('.modalItem')

const elModalDialogs = elModalItem.querySelector('.modal__dialoglist')
const elModalCloses = elModalItem.querySelector('#modalItem__close')
const elModalClosesItems = elModalItem.querySelector('#modal__closesbutton')



let onModalItemClick = function (evt) {
  if(evt.target.matches('.modalItem')) {
    closeModals()
  }
}

let addModalItemEventListerens = function () {
  elModalItem.addEventListener('click', onModalItemClick)
  elModalCloses.addEventListener('click', onModalCloseClickList)
  elModalClosesItems.addEventListener('click', onModalCloseClickList)
  document.addEventListener('keyup', onDocumentKeyUps)
}


let removeModalItemEventListerens = function () {
  elModalItem.removeEventListener('click', onModalItemClick)
  elModalClosesItems.removeEventListener('click', onModalCloseClickList)
  elModalCloses.removeEventListener('click', onModalCloseClickList)
}

let openModals = function () {
    elModalItem.classList.add('modal--shown')
    addModalItemEventListerens()
  }

let closeModals = function () {
    elModalItem.classList.remove('modal--shown');
    removeModalItemEventListerens()
  }

let onDocumentKeyUps = function(evt) {
    if (evt.keyCode === 27) {
      closeModals()
    }
  }

let onOpenModalButtonClickList = function () {
    openModals()
  }

let onModalCloseClickList = function () {
    closeModals()
  }

elSpanModal.addEventListener('click', onOpenModalButtonClickList)