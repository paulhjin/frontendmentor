const submitBtn = document.querySelector('.rating-btn')
const start = document.querySelector('.rating-section')
const end = document.querySelector('.rating-thankyou')
const ratings = document.querySelectorAll('.rating-number')
const result = document.querySelector('.rating-thankyou__rating')

//loops through the rating-numbers -> listens for a click then loops through the ratings-numbers and removes any active classes and adds the active class to the rating number that was clicked

ratings.forEach((rating) => {
    rating.addEventListener('click', function() {
        ratings.forEach((e) => {
            e.classList.remove('active')
        })
        this.classList.add('active')
    })
})

//starts with the thank you page hidden then when the submit button is clicked, the initial ratings page is hidden and the thank you page is displayed via a utility class in the css

submitBtn.addEventListener('click', () => {
    start.classList.add('hidden')
    end.classList.remove('hidden')
})

// loops through the rating numbers 1 through 5 and adds an eventListener to the list items then displays the number that was clicked on the thank you page

ratings.forEach((rating) => {
    rating.addEventListener('click',() => {
        result.innerText = rating.innerText;
    })
})