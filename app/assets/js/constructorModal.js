const constructorBtn = document.querySelector('.header__buttons-btn.btn1');
const constructorModalClose = document.querySelector('.constructor-modal__right-close');
const constructorModal = document.querySelector('.constructor-modal');

const showOrCloseConstructorModal = () => {
    const body = document.querySelector('body');

    if (constructorModal.classList.contains('active')) {
        constructorModal.style.animation = 'fadeOut 0.2s';
        setTimeout(() => {
            constructorModal.style.display = 'none';
        }, 190);
    } else {
        constructorModal.style.animation = 'fadeIn 0.12s';
        setTimeout(() => {
            constructorModal.style.display = 'block';
        }, 120);
    }

    constructorModal.classList.toggle('active');
    body.classList.toggle('overflow');
}

constructorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showOrCloseConstructorModal();
});

constructorModalClose.addEventListener('click', showOrCloseConstructorModal);

// Используем Inputmask для создания маски номера телефона
$(document).ready(function () {
    $('#phone-input').inputmask("+375 (99) 999-99-99");
});