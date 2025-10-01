document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos importantes
    const piggyBankCards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('rescue-modal');
    const closeModalButton = document.querySelector('.close-button');
    const availableBalanceText = document.getElementById('modal-available-balance');

    // Adiciona um evento de clique para cada card de porquinho
    piggyBankCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega o saldo do card que foi clicado
            const balanceElement = card.querySelector('.card-balance');
            const balance = balanceElement.innerText;

            // Atualiza o texto do saldo disponível no modal
            availableBalanceText.textContent = `Saldo disponível para resgate: ${balance}`;

            // Exibe o modal
            modalOverlay.style.display = 'flex';
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.style.display = 'none';
    };

    // Adiciona evento para fechar no botão 'X'
    closeModalButton.addEventListener('click', closeModal);

    // Adiciona evento para fechar clicando fora do conteúdo do modal (no overlay)
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});