const headerLogin = document.querySelector('.header__login');
const entranceModalClose = document.querySelectorAll('.entrance-modal__info-close');
const entranceModalOverlay = document.querySelectorAll('.entrance-modal .overlay');
const entranceModal = document.querySelector('.entrance-modal');
const entranceModalCode = document.querySelector('.entrance-modal.code');
const leaveFeedback = document.querySelector('#leave-feedback');
const entranceSubmit = document.querySelector('.entrance-modal__form-submit');

const showOrCloseEntranceModal = (HtmlElement) => {
    const body = document.querySelector('body');

    if (HtmlElement.classList.contains('active')) {
        HtmlElement.style.animation = 'fadeOut 0.2s';
        setTimeout(() => {
            HtmlElement.style.display = 'none';
        }, 190);
    } else {
        HtmlElement.style.animation = 'fadeIn 0.12s';
        setTimeout(() => {
            HtmlElement.style.display = 'flex';
        }, 120);
    }

    HtmlElement.classList.toggle('active');
    body.classList.toggle('overflow');
}

headerLogin.addEventListener('click', () => {
    showOrCloseEntranceModal(entranceModal);
});

entranceModalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        if (entranceModal.classList.contains('active')) {
            showOrCloseEntranceModal(entranceModal);
        }

        if (entranceModalCode.classList.contains('active')) {
            showOrCloseEntranceModal(entranceModalCode);
        }
    });
});

entranceModalOverlay.forEach(overlay => {
    overlay.addEventListener('click', () => {
        if (entranceModal.classList.contains('active')) {
            showOrCloseEntranceModal(entranceModal);
        }

        if (entranceModalCode.classList.contains('active')) {
            showOrCloseEntranceModal(entranceModalCode);
        }
    });
});

if (leaveFeedback) {
    leaveFeedback.addEventListener('click', () => {
        showOrCloseEntranceModal(entranceModal);
    });
}

entranceSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    showOrCloseEntranceModal(entranceModalCode);
    showOrCloseEntranceModal(entranceModal);
});

// Используем Inputmask для создания маски номера телефона
$(document).ready(function () {
    $('#phone-entrance').inputmask("+375 (99) 999-99-99");
});