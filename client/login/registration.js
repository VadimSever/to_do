import {create} from './endpointsLog.js'



const email = document.querySelector('.input-email-regist')
const password = document.querySelector('.input-pass-regist')
const btnRegestration = document.querySelector('.btn-sign-in-reg')


btnRegestration.addEventListener('click', registration)


export async function registration(event) {
    event.preventDefault()
    const userData = await create(email.value, password.value)
    console.log(userData);
    

    if (userData.message) {
        alert(userData.message)
        return
    }




    location.href = 'http://127.0.0.1:5500/client/login/login.html'
}








