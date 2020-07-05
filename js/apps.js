const dvOrderTabsTab = document.querySelector('.dv-order-tabs__tab')
const dvOrderTabsTabs = document.querySelector('.dv-order-tabs__tabs')
const dvOrderTabTab = document.querySelector('.dv-order-tab__tab')
const activ = document.querySelector('.activ')
const activs = document.querySelector('.activs')
const carActivs = document.querySelector('.car-activs')



dvOrderTabsTab.addEventListener('click', function () {
    dvOrderTabsTab.classList.add('bg-color')
    dvOrderTabsTab.classList.add('text--color')
    dvOrderTabsTabs.classList.remove('bg-color')
    dvOrderTabsTabs.classList.remove('text--color')
    dvOrderTabTab.classList.remove('bg-color')
    dvOrderTabTab.classList.remove('text--color')

    activ.classList.remove('div')
    activs.classList.remove('divs')
    carActivs.classList.remove('display-block')
})
dvOrderTabsTabs.addEventListener('click', function () {
    dvOrderTabsTabs.classList.add('bg-color')
    dvOrderTabsTabs.classList.add('text--color')
    dvOrderTabsTab.classList.remove('bg-color')
    dvOrderTabsTab.classList.remove('text--color')
    dvOrderTabTab.classList.remove('bg-color')
    dvOrderTabTab.classList.remove('text--color')

    activ.classList.add('div')
    activs.classList.add('divs')
    carActivs.classList.remove('display-block')
})
dvOrderTabTab.addEventListener('click', function () {
    dvOrderTabTab.classList.add('bg-color')
    dvOrderTabTab.classList.add('text--color')
    dvOrderTabsTabs.classList.remove('bg-color')
    dvOrderTabsTabs.classList.remove('text--color')
    dvOrderTabsTab.classList.remove('bg-color')
    dvOrderTabsTab.classList.remove('text--color')

    carActivs.classList.add('display-block')
    activ.classList.add('div')
    activs.classList.remove('divs')
})

/////////////////////////////////
const speed = document.querySelector('.speed')
const time = document.querySelector('.time')

const siteSectionBox = document.querySelector('#divRemove')
const siteSectionBox2 = document.querySelector('#divRemove2')

const siteFormOnfootText = document.querySelector('.site-form__onfoot-text')
const siteFormOnfootText2 = document.querySelector('.site-form__onfoot-text2')

const siteFormOnfootSpan = document.querySelector('.site-form__onfoot-span')
const siteFormOnfootSpan2 = document.querySelector('.site-form__onfoot-span2')

speed.addEventListener('click', function () {
    siteSectionBox.classList.add('section--open')
    siteSectionBox2.classList.add('section--open')

    speed.classList.add('onfoot-bg')
    time.classList.remove('onfoot-bg')

    siteFormOnfootSpan.classList.add('span-bg')
    siteFormOnfootSpan2.classList.remove('span-bg')

    siteFormOnfootText.classList.add('display-block')
    siteFormOnfootText2.classList.remove('display-block')
})

time.addEventListener('click', function () {
    siteSectionBox.classList.remove('section--open')
    siteSectionBox2.classList.remove('section--open')

    time.classList.add('onfoot-bg')
    speed.classList.remove('onfoot-bg')

    siteFormOnfootSpan2.classList.add('span-bg')
    siteFormOnfootSpan.classList.remove('span-bg')

    siteFormOnfootText2.classList.add('display-block')
    siteFormOnfootText.classList.add('display-none')
    siteFormOnfootText.classList.remove('display-block')

})

/////////////////////////////