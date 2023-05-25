const form = { 
    name: document.querySelector('input[form-name]'),
    email: document.querySelector('input[form-email]'),
    btnClean: document.querySelector('button[form-btn]')
}

let dataForm 
if (localStorage.getItem('form')){
    dataForm = JSON.parse(localStorage.getItem('form'))
    if (dataForm.name) { 
        form.name.value = dataForm.name
    }
} else { 
    dataForm = {}
}

form.name.addEventListener('input', () => {
   dataForm = { 
    ...dataForm,
    name: form.name.value
   }
   localStorage.setItem('form', JSON.stringify(dataForm))
})

form.btnClean.addEventListener('click', () => {
    localStorage.removeItem('form')
    location.reload()
})