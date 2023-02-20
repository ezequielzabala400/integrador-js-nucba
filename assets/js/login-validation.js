

const form = document.getElementById('form');
const textInput = document.getElementById('text-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar');
const overlay = document.getElementById('overlay')


// funciones para validar

const isEmpty = value => !value.length;

const isBetween = (min, max, length) => length > min && length < max;



// funciones de error y exito

const showError = (input, message) => {
    input.classList.add('error');
    input.classList.remove('success');
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = message;
}

const showSuccess = input => {
    input.classList.add('success');
    input.classList.remove('error');
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = '';
}


// funciones para comprobar

const checkUser = () => {
    let valid = false;
    const textValue = textInput.value.trim();
    if(isEmpty(textValue)){
        showError(textInput, '*El nombre es obligatorio')
    }else{
        showSuccess(textInput)
        valid = true
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();
    if(isEmpty(emailValue)){
        showError(emailInput, '*El correo es obligatorio');
    }else{
        showSuccess(emailInput)
        valid = true;
    }
    return valid
}

const checkPassword = () => {
    let valid = false;
    const passwordValue = passwordInput.value.trim();
    if(isEmpty(passwordValue)){
        showError(passwordInput, '*La contraseña es obligatoria')
    }else if(passwordValue !== repeatPasswordInput.value.trim()){
        showError(passwordInput, '*Las contraseñas no son iguales')
    }else{
        showSuccess(passwordInput)
        valid = true;
    }
    return valid;
}

const checkRepeatPassword = () => {
    let valid = false;
    const repeatPasswordValue = repeatPasswordInput.value.trim();
    if(isEmpty(repeatPasswordValue)){
        showError(repeatPasswordInput, '*La contraseña es obligatoria')
    } else if(repeatPasswordValue !== passwordInput.value.trim()){
        showError(repeatPasswordInput, '*Las contraseñas no son iguales')
    }else{
        showSuccess(repeatPasswordInput)
        valid = true;
    }
    return valid;
}

// debounce

const debounce = (funcion, delay = 500) => {
    let timeout;
    
    return (...args) => {
        if(timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            funcion.apply(null, args)
        }, delay)
    }
}


const init = () =>{
    toggleMenu.addEventListener('click', (() => {
        navbar.classList.toggle('navbar--active')
        overlay.classList.toggle('overlay')
    }))
    overlay.addEventListener('click', ((e) => {
        if(!e.target.classList.contains('overlay')) return;
        overlay.classList.remove('overlay')
        navbar.classList.remove('navbar--active')
    }))
    
    
    form.addEventListener('submit', ((e) => {
        e.preventDefault();
        checkUser();
        checkEmail();
        checkPassword();
        checkRepeatPassword();
        const isFormValid = checkUser() && checkPassword() && checkEmail() && checkRepeatPassword();
        if(isFormValid){
            alertify.alert().set('message', 'Se inició sesión con éxito!').show();
            setTimeout(() => {
                window.location.replace('../index.html')
            }, 2000)
        }
    }))
    form.addEventListener('input', debounce((e) => {
        switch (e.target.id) {
            case 'text-input':
                checkUser();
                break;
            case 'email-input':
                checkEmail();
                break;
            case 'password-input':
                checkPassword();
                break;
            case 'repeat-password-input':
                checkRepeatPassword();
                break;
            default:
                break;
        }
    }))
}

init()
