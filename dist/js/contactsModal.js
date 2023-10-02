const headerPhone = document.querySelector('.header__phone');
const contactsModal = document.querySelector('.contacts-modal');
const contactsOverlay = document.querySelector('.contacts-modal .overlay');
const contactsModalClose = document.querySelector('.contacts-modal__info-close');

const showContactsModal = () => {
    const body = document.querySelector('body');

    contactsModal.classList.add('active');
    body.classList.add('overflow');
}

const hideContactsModal = () => {
    const body = document.querySelector('body');
    
    contactsModal.classList.remove('active');
    body.classList.remove('overflow');
}

headerPhone.addEventListener('click', showContactsModal);
contactsOverlay.addEventListener('click', hideContactsModal);
contactsModalClose.addEventListener('click', hideContactsModal);