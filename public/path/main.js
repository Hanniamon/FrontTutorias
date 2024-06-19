document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const showRegisterForm = document.getElementById('showRegisterForm');

    // Mostrar el formulario de inicio de sesión por defecto
    loginForm.classList.add('active');

    showRegisterForm.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginForm.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});

