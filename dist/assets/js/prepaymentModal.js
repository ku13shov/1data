const redtext = document.querySelector('.fooled__redtext span');
const fooledModal = document.querySelector('.fooled-modal');
const fooledOverlay = document.querySelector('.fooled-modal .overlay');
const fooledModalClose = document.querySelector('.fooled-modal__info-close');

redtext.addEventListener('click', () => {
    showModal(fooledModal);
});
fooledOverlay.addEventListener('click', () => {
    hideModal(fooledModal);
});
fooledModalClose.addEventListener('click', () => {
    hideModal(fooledModal);
});