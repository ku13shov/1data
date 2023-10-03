const headerLogin = document.querySelector('.header__login');
const entranceModal = document.querySelector('.entrance-modal');

const showEntranceModal = () => {
    const body = document.querySelector('body');

    entranceModal.classList.toggle('active');
    body.classList.toggle('overflow');
}

headerLogin.addEventListener('click', showEntranceModal);