const form = document.querySelector('.ping-main__form')
const email = document.querySelector('.ping-main__input')

form.addEventListener('submit', (e) => { 
    e.preventDefault()
    const emailValue = email.value

    if(emailValue == '') {
        form.classList.add('empty')
    } else if(!validateEmail(emailValue)) {
        form.classList.add('error')
        form.classList.remove('empty')
    } else {
        form.classList.remove('error')
        form.classList.remove('empty')
        email.value = ''
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
