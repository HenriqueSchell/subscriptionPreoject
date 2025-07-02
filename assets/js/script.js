/*1. Quando o botão for clicado
2. Pegue o valor do input de e-mail
3. Veja se esse valor inclui "@"
4. Se não incluir, mostre erro
5. Se incluir, aceite o formulário*/

//get values
var btn = document.getElementById('btn')
var email = document.getElementById('email')
var errorMessage = document.getElementById('errorMessage')
var hiddenMain = document.getElementById('hidden-main')
var thanks = document.getElementById('thanks')
var btnDismiss = document.getElementById('btn-dismiss')
var emailLabel = document.getElementById('email-label')

//validation
btn.addEventListener('click', () => {
    const emailValue = email.value 
    if (!emailValue.includes('@')){
        email.classList.add('bg-red-200', 'text-red-600', 'ring', 'focus:ring-red-600')
        email.classList.remove('focus:ring-[#242742]')
        errorMessage.classList.remove('hidden')
    }else{
        email.classList.remove('bg-red-200', 'text-red-600', 'ring', 'focus:ring-red-600')
        email.classList.add('focus:ring-[#242742]')
        errorMessage.classList.add('hidden')
        hiddenMain.classList.add('hidden')
        thanks.classList.remove('hidden')
        emailLabel.innerHTML = email.value
        emailLabel.classList.add('font-bold')
    }
})

btnDismiss.addEventListener('click', () => {
    hiddenMain.classList.remove('hidden')
    thanks.classList.add('hidden')
})





