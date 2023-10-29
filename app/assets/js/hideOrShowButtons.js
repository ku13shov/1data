const navigation = document.querySelector(".navigation");
const headerButtons = document.querySelector(".header__buttons");
const headerWrapper = document.querySelector(".header__wrapper");

let lastScroll = 0;
const defaultOffset = 100;

const scrollPosition = () => document.documentElement.scrollTop;

const containHide = () => {
    if (headerButtons.classList.contains('hidden') &&
        headerWrapper.classList.contains('hidden') &&
        navigation.classList.contains('hidden')) {
        return true;
    }
}

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() && scrollPosition() > defaultOffset) {
        //scroll down
        headerButtons.classList.add('hidden');
        headerWrapper.classList.add('hidden');
        navigation.classList.add('hidden');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        headerButtons.classList.remove('hidden');
        headerWrapper.classList.remove('hidden');
        navigation.classList.remove('hidden');
    }

    lastScroll = scrollPosition();
})