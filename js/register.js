// register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
            // Aqui você adicionaria uma chamada AJAX para registrar o usuário
            alert(`Usuário "${username}" registrado com sucesso!`);
            window.location.href = 'login.html'; // Redireciona para a página de login após registro
        });
    }
});
