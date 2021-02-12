      ///////////tanlash form
    const additionallyBoxItem = document.querySelector('.additionally-box__item')
    const additionallyBoxItemBox = document.querySelector('.additionally-box__item-box')
    const additionallyBoxText = document.querySelector('.additionally-box__text')
    const additionallyBoxText2 = document.querySelector('.additionally-box__text2')
    const summaInputBox = document.querySelector('.summa-input__box')
    const rTooltipTarget = document.querySelector('.r-tooltip__target')
    const boxItem = document.querySelector('.box-item')
    const additionallyBoxContainer = document.querySelector('.additionally-box__container')
  


    additionallyBoxItem.addEventListener('click', function () {
      additionallyBoxItemBox.classList.toggle('display-block')
})

    additionallyBoxText.addEventListener('click', function () {
      summaInputBox.classList.remove('site__section')
      rTooltipTarget.classList.remove('site__section')
      additionallyBoxText.classList.add('font-weight')
      additionallyBoxText2.classList.remove('font-weight')
      additionallyBoxItemBox.classList.remove('display-block')
    })

    additionallyBoxText2.addEventListener('click', function () {
      summaInputBox.classList.add('site__section')
      rTooltipTarget.classList.add('site__section')
      additionallyBoxText2.classList.add('font-weight')
      additionallyBoxText.classList.remove('font-weight')
      additionallyBoxItemBox.classList.remove('display-block')
    })
  ////////////////////////
  const additionallySpan = document.querySelector('.additionally__span')
  const boxAdditionally = document.querySelector('.box__additionally')
  const additionallySpan2 = document.querySelector('.additionally-span2')
  const additionallyBox = document.querySelector('.additionally-box')


additionallySpan.addEventListener('click', function () {
    additionallyBox.classList.add('display-add')
    boxAdditionally.classList.add('remove')
    additionallySpan2.classList.add('display-add')
})

additionallySpan2.addEventListener('click', function () {
    additionallyBox.classList.remove('display-add')
    boxAdditionally.classList.remove('remove')
    additionallySpan2.classList.remove('display-add')
})

// 

////////////////


  const span = document.querySelector('.span')
  const addBoxs = document.querySelector('.add-boxs')
  const span2 = document.querySelector('.span2')
  const boxs = document.querySelector('.boxs')
  const additionallyBoxItem2 = document.querySelector('.additionally-box__item2')
  const additionallyBoxItemBox2 = document.querySelector('.additionally-box__item-box2')
  const additionallyBoxTexts = document.querySelector('.additionally-box__texts')
  const additionallyBoxTexts1 = document.querySelector('.additionally-box__texts1')
  const additionallyBoxTexts2 = document.querySelector('.additionally-box__texts2')
  const summaInputBox2 = document.querySelector('.summa-input__box2')
  const additionallyBoxInput2Box = document.querySelector('.additionally-box__input2-box')
  const rTooltipTarget2 = document.querySelector('.r-tooltip__target2')


additionallyBoxItem2.addEventListener('click', function () {
  additionallyBoxItemBox2.classList.toggle('display-block')
  
})

span.addEventListener('click', function () {
    boxs.classList.add('display-block')
    addBoxs.classList.add('remove')
    span2.classList.add('display-add')
})

span2.addEventListener('click', function () {
    boxs.classList.remove('display-block')
    addBoxs.classList.remove('remove')
    span2.classList.remove('display-add')
})

additionallyBoxTexts.addEventListener('click', function () {
  summaInputBox2.classList.remove('site__section')
  rTooltipTarget.classList.remove('site__section')
  additionallyBoxItemBox2.classList.remove('display-block')
  additionallyBoxTexts1.classList.remove('font-weight')
  additionallyBoxTexts2.classList.remove('font-weight')
  additionallyBoxTexts.classList.add('font-weight')
  additionallyBoxInput2Box.classList.remove('display-block')
  rTooltipTarget2.classList.remove('site__section')
}) 

additionallyBoxTexts1.addEventListener('click', function () {
  summaInputBox2.classList.add('site__section')
  additionallyBoxItemBox2.classList.remove('display-block')
  additionallyBoxTexts.classList.remove('font-weight')
  additionallyBoxTexts2.classList.remove('font-weight')
  additionallyBoxTexts1.classList.add('font-weight')
  additionallyBoxInput2Box.classList.remove('display-block')
  rTooltipTarget2.classList.add('site__section')
})

additionallyBoxTexts2.addEventListener('click', function () {
  summaInputBox2.classList.remove('site__section')
  rTooltipTarget.classList.remove('site__section')
  additionallyBoxItemBox2.classList.remove('display-block')
  additionallyBoxTexts.classList.remove('font-weight')
  additionallyBoxTexts1.classList.remove('font-weight')
  additionallyBoxTexts2.classList.add('font-weight')
  additionallyBoxInput2Box.classList.add('display-block')
  rTooltipTarget2.classList.remove('site__section')
})