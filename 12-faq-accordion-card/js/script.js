// add eventListener to the document and listen for clicks on the faq__item
// reference for targeting selectors with event bubbling : https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
// toggle the active class on the faq__item to add or remove max-height to the element
// reference for animating the transition: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate

document.addEventListener('click', e => {
    if(!e.target.classList.contains('faq__item')) {
        const clickedElement = e.target.closest('.faq__item')
        const answerSection = clickedElement.querySelector('.faq__answer')
        const elementActive = clickedElement.classList.contains('active')

        clickedElement.classList.toggle('active')
        if(elementActive) {
            answerSection.style.maxHeight = null
        } else {
            answerSection.style.maxHeight = answerSection.scrollHeight + 'px'
        }
    }
})