const headerLogin = document.querySelector('.header__login');
const entranceModal = document.querySelector('.entrance-modal');

const showEntranceModal = () => {
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

headerLogin.addEventListener('click', showEntranceModal);