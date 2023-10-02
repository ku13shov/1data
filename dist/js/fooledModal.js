const redtext = document.querySelector('.fooled__redtext span');
const fooledModal = document.querySelector('.fooled-modal');
const fooledOverlay = document.querySelector('.fooled-modal .overlay');
const fooledModalClose = document.querySelector('.fooled-modal__info-close');

const showModal = () => {
    const body = document.querySelector('body');
    
    fooledModal.classList.add('active');
    body.classList.add('overflow');
}

const hideModal = () => {
    const body = document.querySelector('body');

    fooledModal.classList.remove('active');
    body.classList.remove('overflow');
}

redtext.addEventListener('click', showModal);
fooledOverlay.addEventListener('click', hideModal);
fooledModalClose.addEventListener('click', hideModal);