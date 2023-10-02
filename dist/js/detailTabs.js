const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsInfoItems = document.querySelectorAll('.tabs__info-item');

const deleteClassActive = (elements) => {
    elements.forEach(element => element.classList.remove('active'));
}

tabsBtns.forEach((tabBtn, index) => tabBtn.addEventListener('click', () => {
    // удаляет класс active у всех кнопок
    deleteClassActive(tabsBtns);
    // удаляет класс active у всех контейнеров контента
    deleteClassActive(tabsInfoItems);

    // добавляет нажатой кнопке класс active
    tabBtn.classList.add('active');
    // добавляет класс active контенту согласно индекса нажатой кнопки
    tabsInfoItems[index].classList.add('active');
}));