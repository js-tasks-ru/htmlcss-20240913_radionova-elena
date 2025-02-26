const checkboxState = document.querySelectorAll('.checkbox__state');

checkboxState.forEach(el => {
    el.addEventListener('click', () => {
        let label = el.querySelector('.checkbox__label');
        if (label.textContent === 'Disable') {
            return
        }
        label.textContent === 'Default' ? label.textContent = 'Checked' : label.textContent = 'Default';
    })
});
