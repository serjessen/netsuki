// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const createTeamBtn = document.getElementById('createTeamBtn');
    const registerTeamBtn = document.getElementById('registerTeamBtn');
    const registerChampionshipBtn = document.getElementById('registerChampionshipBtn');

    if (createTeamBtn) {
        createTeamBtn.addEventListener('click', () => {
            alert('Abrir formulário para criar um time.');
            // Adicione a lógica para abrir o formulário ou redirecionar para a página de criação de times
        });
    }

    if (registerTeamBtn) {
        registerTeamBtn.addEventListener('click', () => {
            alert('Abrir formulário para inscrever um time.');
            // Adicione a lógica para abrir o formulário ou redirecionar para a página de inscrição de times
        });
    }

    if (registerChampionshipBtn) {
        registerChampionshipBtn.addEventListener('click', () => {
            alert('Abrir formulário para inscrever em um campeonato.');
            // Adicione a lógica para abrir o formulário ou redirecionar para a página de inscrição em campeonatos
        });
    }
});
