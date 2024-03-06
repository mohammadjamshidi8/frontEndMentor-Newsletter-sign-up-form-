const emailRegexValidation = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/

let emailElem = document.querySelector('#email')
let submitBtn = document.querySelector('#submit-btn')
let emailError = document.querySelector('#error-email')
let emailValidate = null

emailElem.addEventListener('input', (e) => {
    let emailValue = e.target.value
    emailValidate = emailRegexValidation.test(emailValue)

})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (emailValidate) {
        emailError.className = 'hidden'
        emailError.innerHTML = 'Email is valid ☺️'
        emailError.classList.toggle('text-green-400')
        emailError.classList.remove('hidden')

        setTimeout(() => {
            emailError.classList.add('hidden')
        }, 4000);
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