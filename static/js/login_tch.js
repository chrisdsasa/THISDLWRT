let btn_login = document.querySelector('#login');
let btn_reg = document.querySelector('#register');
let form_box = document.querySelector('.form-box');
let register_box = document.querySelector('.register-box');
let login_box = document.querySelector('.login-box');

btn_reg.addEventListener('click', () => {
    form_box.style.transform = 'translateX(91%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

btn_login.addEventListener('click', () => {
    form_box.style.transform = 'translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})
