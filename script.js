import user from "./User"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const addFunctional = () => {
    const form = { 
        login: document.querySelector('#form-login'),
        password: document.querySelector('#form-password'),
        btn: document.querySelector('#form-btn')
    }
    form.btn.addEventListener('click', () => { 
        if (form.login.value.length == 0 || form.password.value.length == 0){
                Notify.warning('Please enter login or password')
            } else { 
                if (form.login.value == user.login){ 
                    if(form.password.value == user.password){
                        Notify.success(`Welcome, ${user.name}!`)
                        setTimeout(successAuth(), 2000)
                    } else  {
                        Notify.failure(`Password is incorrect`)
                    }
                } else { 
                    Notify.failure(`Login is incorrect`)
                }
            }
    })
}

export default addFunctional