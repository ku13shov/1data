const headerLocation = document.querySelector('.header__location-city');
const citiesModal = document.querySelector('.cities-modal');
const citiesOverlay = document.querySelector('.cities-modal .overlay');
const citiesModalClose = document.querySelector('.cities-modal__info-close');
const citiesParent = document.querySelector('.cities-modal__info-items');

const showCitiesModal = () => {
    const body = document.querySelector('body');
    
    citiesModal.classList.add('active');
    body.classList.add('overflow');
}

const hideCitiesModal = () => {
    const body = document.querySelector('body');

    citiesModal.classList.remove('active');
    body.classList.remove('overflow');
}

headerLocation.addEventListener('click', showCitiesModal);
citiesOverlay.addEventListener('click', hideCitiesModal);
citiesModalClose.addEventListener('click', hideCitiesModal);

citiesParent.addEventListener('click', (e) => {
    if (e.target.closest('.cities-modal__info-item')) {
        headerLocation.textContent = e.target.textContent;
        hideCitiesModal();
    }
})