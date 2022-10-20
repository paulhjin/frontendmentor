const cardSocials = document.querySelector('.card__socials')
const shareBtn = document.querySelector('.card__share-btn')

shareBtn.addEventListener('click', () => {
    cardSocials.classList.toggle('active')
})