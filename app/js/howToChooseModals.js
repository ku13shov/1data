const art13_3 = document.querySelector('#art13-3');
const art168 = document.querySelector('#art168');
const art402_1 = document.querySelector('#art402-1');
const art407 = document.querySelector('#art407');
const stb2007 = document.querySelector('#stb2007');

const showOrHideArticleModal = (articleElement) => {
    articleElement.addEventListener('click', () => {
        const article = document.querySelector(`.article-modal.${articleElement.id}`);
        const articleOverlay = document.querySelector(`.article-modal.${articleElement.id} .overlay`);
        const articleClose = document.querySelector(`.article-modal.${articleElement.id} .article-modal__info-close`);

        showModal(article);

        articleOverlay.addEventListener('click', () => {
            hideModal(article);
        });

        articleClose.addEventListener('click', () => {
            hideModal(article);
        });
    });
}

showOrHideArticleModal(art13_3);
showOrHideArticleModal(art168);
showOrHideArticleModal(art402_1);
showOrHideArticleModal(art407);
showOrHideArticleModal(stb2007);

