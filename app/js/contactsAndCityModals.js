const headerLocation = document.querySelector('.header__location-city');
const citiesModal = document.querySelector('.cities-modal');
const citiesOverlay = document.querySelector('.cities-modal .overlay');
const citiesModalClose = document.querySelector('.cities-modal__info-close');
const citiesParent = document.querySelector('.cities-modal__info-items');
const headerPhone = document.querySelector('.header__phone');
const contactsModal = document.querySelector('.contacts-modal');
const contactsOverlay = document.querySelector('.contacts-modal .overlay');
const contactsModalClose = document.querySelector('.contacts-modal__info-close');

const showModal = (HTMLElement) => {
    const body = document.querySelector('body');

    HTMLElement.style.animation = 'fadeIn 0.12s';
    setTimeout(() => {
        HTMLElement.style.display = 'flex';
    }, 120);
    
    HTMLElement.classList.add('active');
    body.classList.add('overflow');
}

const hideModal = (HTMLElement) => {
    const body = document.querySelector('body');
    
    HTMLElement.style.animation = 'fadeOut 0.2s';
    setTimeout(() => {
        HTMLElement.style.display = 'none';
    }, 190);

    HTMLElement.classList.remove('active');
    body.classList.remove('overflow');
}

// cities-modal
headerLocation.addEventListener('click', () => {
    showModal(citiesModal);
});
citiesOverlay.addEventListener('click', () => {
    hideModal(citiesModal);
});
citiesModalClose.addEventListener('click', () => {
    hideModal(citiesModal);
});

citiesParent.addEventListener('click', (e) => {
    if (e.target.closest('.cities-modal__info-item')) {
        headerLocation.textContent = e.target.textContent;
        hideModal(citiesModal);
    }
})

// contacts-modal
headerPhone.addEventListener('click', () => {
    showModal(contactsModal);
});
contactsOverlay.addEventListener('click', () => {
    hideModal(contactsModal);
});
contactsModalClose.addEventListener('click', () => {
    hideModal(contactsModal);
});
