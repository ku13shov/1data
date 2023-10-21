const cookiePopup = document.querySelector('.cookie');
const cookieBtn = document.querySelector('.cookie__btn');

// Проверка, было ли уже показано всплывающее окно
if (localStorage.getItem('cookiePopup')) {
    // Если да, то скрывает его
    cookiePopup.classList.add('hidden');
}

// Скрывает всплывающее окно при первой загрузке страницы по нажатию на кнопку ОК и сохранает показ в localstorage
cookieBtn.addEventListener('click', () => {
    localStorage.setItem('cookiePopup', 'true');
    cookiePopup.classList.add('hidden');
});