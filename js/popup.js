// services modal
const modals = document.querySelectorAll('.portfolio__modal');
const modalButtons = document.querySelectorAll('.portfolio_btn');
const modalCloseButtons = document.querySelectorAll('.portfolio__modal-close');

// Function to open the modal
const openModal = (modalIndex) => {
    modals[modalIndex].classList.add('active-modal');
}

// Function to close the modal
const closeModal = (modal) => {
    modal.classList.remove('active-modal');
}

// Event listeners for modal open buttons
modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        openModal(i);
    });
});

// Event listeners for modal close buttons
modalCloseButtons.forEach((modalCloseButton) => {
    modalCloseButton.addEventListener('click', () => {
        const modal = modalCloseButton.closest('.portfolio__modal');
        closeModal(modal);
    });
});
