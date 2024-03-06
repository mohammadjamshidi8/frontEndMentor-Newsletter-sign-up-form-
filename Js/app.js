const emailRegexValidation = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/

let emailElem = document.querySelector('#email')
let submitBtn = document.querySelector('#submit-btn')
let emailError = document.querySelector('#error-email')
let succesMassege = document.querySelector('#succes-massege')
let newsLetter = document.querySelector('#newsletter')
let dissmissBtn = document.querySelector('#dismiss-btn')
let userEmail = document.querySelector('#user-email')

let emailValue = null
let emailValidate = null

emailElem.addEventListener('input', (e) => {
    emailValue = e.target.value
    emailValidate = emailRegexValidation.test(emailValue)

})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (emailValidate) {

        userEmail.innerHTML = emailValue
        newsLetter.classList.add('hidden')
        succesMassege.classList.toggle('hidden')


    } else {
        emailError.className = 'hidden'
        emailError.innerHTML = 'Enter a valid email! 😑'
        emailError.classList.toggle('text-rose-400')
        emailError.classList.remove('hidden')
        setTimeout(() => {
            emailError.classList.add('hidden')
        }, 4000);

    }
})

dissmissBtn.addEventListener('click', () => {
    succesMassege.classList.toggle('hidden')
    newsLetter.classList.remove('hidden')

})