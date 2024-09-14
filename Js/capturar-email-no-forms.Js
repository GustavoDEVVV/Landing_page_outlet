document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturar o email inserido no formulário
    const email = document.getElementById('email').value;

    // Redirecionar para o index.html passando o email via URL
    window.location.href = `../index.html?email=${encodeURIComponent(email)}`;
});