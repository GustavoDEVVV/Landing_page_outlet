// Função para pegar o valor do parâmetro "email" na URL
function getEmailFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

// Pegar o email da URL
const email = getEmailFromUrl();
const SingOut = document.getElementById('SingOut');

// Se houver um email, mostrar no header
if (email) {
    document.getElementById('userEmail').textContent = email;
}

SingOut.addEventListener('click', function () {
    userEmail.textContent = 'Fazer Login'; // Voltar o texto para "Fazer Login"
    window.history.pushState({}, document.title, window.location.pathname); // Remover o email da URL
});