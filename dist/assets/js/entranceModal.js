const headerLogin = document.querySelector('.header__login');
const entranceModalClose = document.querySelector('.entrance-modal__info-close');
const entranceModalOverlay = document.querySelector('.entrance-modal .overlay');
const entranceModal = document.querySelector('.entrance-modal');

const showOrCloseEntranceModal = () => {
    const body = document.querySelector('body');

    if (entranceModal.classList.contains('active')) {
        entranceModal.style.animation = 'fadeOut 0.2s';
        setTimeout(() => {
            entranceModal.style.display = 'none';
        }, 190);
    } else {
        entranceModal.style.animation = 'fadeIn 0.12s';
        setTimeout(() => {
            entranceModal.style.display = 'block';
        }, 120);
    }

    entranceModal.classList.toggle('active');
    body.classList.toggle('overflow');
}

headerLogin.addEventListener('click', showOrCloseEntranceModal);

entranceModalClose.addEventListener('click', showOrCloseEntranceModal);

entranceModalOverlay.addEventListener('click', showOrCloseEntranceModal);

// Используем Inputmask для создания маски номера телефона
$(document).ready(function () {
    $('#phone-entrance').inputmask("+375 (99) 999-99-99");
});