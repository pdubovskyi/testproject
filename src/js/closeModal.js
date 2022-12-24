const refs = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('[data-modal-close]'),
}

refs.backdrop.addEventListener('click', onBackdropHandler);
refs.closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalEsc);
// TODO: add listener on ESC when modal is opening

function closeModal() {
    refs.backdrop.classList.remove('is-open');
    window.removeEventListener('keydown', closeModal);
}

function onBackdropHandler(e) {
    if (e.target.classList.contains('backdrop')) {
        closeModal();
    }
    return;
}

function closeModalEsc(e) {
    if (e.code === 'Escape') closeModal();
}


