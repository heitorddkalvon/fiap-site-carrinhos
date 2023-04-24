// Selecionar todos os botões "Compre"
const buttons = document.querySelectorAll('.compre-button');

// Adicionar um listener de eventos a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Alterar o texto do botão
    button.innerText = 'Vendido!';
    // Desativar o botão
    button.disabled = true;
    // Adicionar uma classe CSS para indicar que o botão está desativado
    button.classList.add('disabled');
  });
});
