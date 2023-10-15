const art407 = document.querySelector('#art407');

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

showOrHideArticleModal(art407);

