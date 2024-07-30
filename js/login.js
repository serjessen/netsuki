// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Aqui você adicionaria uma chamada AJAX para autenticar o usuário
            alert(`Login realizado com sucesso!`);
            window.location.href = 'dashboard.html'; // Redireciona para o dashboard após login
        });
    }
});
