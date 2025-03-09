(function () {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const modalBackdrop = document.getElementsByClassName("modalBackdrop")[0];

        if (!close || !modalOpen || !modal) {
                return;
        }
    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
        modalBackdrop.style.display = "block";
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
        modalBackdrop.style.display = "none";
    });
})();