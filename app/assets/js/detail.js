const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsInfoItems = document.querySelectorAll('.tabs__info-item');
const optionBtns = document.querySelectorAll('.card__info-option');
const optionBoxes = document.querySelectorAll('.card__info-box');

const deleteClassActive = (elements) => {
    elements.forEach(element => element.classList.remove('active'));
}

tabsBtns.forEach((tabBtn, index) => tabBtn.addEventListener('click', () => {
    deleteClassActive(tabsBtns);
    deleteClassActive(tabsInfoItems);

    tabBtn.classList.add('active');
    tabsInfoItems[index].classList.add('active');
}));

optionBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    deleteClassActive(optionBtns);
    deleteClassActive(optionBoxes);

    btn.classList.add('active');
    optionBoxes[index].classList.add('active');
}));