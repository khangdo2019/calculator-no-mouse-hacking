const toggleBackdrop = () => {
    addBackdrop.classList.toggle('visible');
};

const toggleHotkeyModal = () => {
    addHotkeyModal.classList.toggle('visible');
    closeModalBtn.classList.toggle('visible');
}

const changeHotkeyModal = () => {
    toggleBackdrop();
    toggleHotkeyModal();
};

const closeClickHandler = () => {
    toggleBackdrop();
    toggleHotkeyModal();
};

const backdropClickHandler = () => {
    toggleBackdrop();
    toggleHotkeyModal();
};

addHotkeyModal.addEventListener('click', changeHotkeyModal);
addBackdrop.addEventListener('click', backdropClickHandler);
closeModalBtn.addEventListener('click', closeClickHandler);