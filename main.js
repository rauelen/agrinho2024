// Função para mostrar o pop-up de boas-vindas
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Chamar a função para mostrar o pop-up após um atraso de 2 segundos (2000 milissegundos)
setTimeout(mostrarPopup, 2000);
