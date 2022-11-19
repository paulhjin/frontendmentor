const form = document.querySelector('.signup-section__form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

// showError ➡️ displays the red border, error icon, and error text
const showError = (input, message) => {
    const formField = input.parentElement
    const error = formField.querySelector('small')
    formField.classList.add('error')
    error.textContent = message;
}

// removeError ➡️ removes the red border, error icon, and error text
const removeError = (input) => {
    const formField = input.parentElement
    const error = formField.querySelector('small')
    if(formField.classList.contains('error')){
        formField.classList.remove('error')
        error.style.display = 'none'
    }
}

// checkFirstName, checkLastName, and checkPassword checks input to see if value is empty. If the value is empty, it throws an error, otherwise it will change the valid to true and removes any previous errors. checkEmail validates email address format.

const checkFirstName = () => {
    let valid = false

    if(firstName.value == '') {
        showError(firstName, 'First name cannot be empty')
        firstName.placeholder = ''
    } else {
        removeError(firstName)
        valid = true
    }
    return valid
}

const checkLastName = () => {
    let valid = false

    if(lastName.value == '') {
        showError(lastName, 'Last name cannot be empty')
        lastName.placeholder = ''
    } else {
        removeError(lastName)
        valid = true
    }
    return valid
}

const checkEmail = () => {
    let valid = false
    const emailValue = email.value

    if(!validateEmail(emailValue)) {
        showError(email, 'Looks like this is not an email')
        email.placeholder = ''
    } else {
        removeError(email)
        valid = true
    }
    return valid
}

const checkPassword = () => {
    let valid = false

    if(password.value == '') {
        showError(password, 'Password cannot be empty')
        password.placeholder = ''
    } else {
        removeError(password)
        valid = true
    }
    return valid;
}

// Email validation regex
const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

// Reloads page after successful entry
const resetForm = () => {
    location.reload()
}

form.addEventListener('submit', (e) => {
    //prevents the page from submitting when there are any errors
    e.preventDefault()

    let isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
    // checks to see that all valids are true
    let isFormValid = isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPasswordValid;
    // if they are all true, form resets
    if(isFormValid) {
        resetForm()
    }
 })