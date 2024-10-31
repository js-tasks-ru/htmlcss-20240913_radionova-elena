const checkboxState = document.querySelector('.checkbox__state');
const checkboxLabel = document.querySelector('.checkbox__label');

checkboxState.addEventListener('click', () => {
    checkboxLabel.textContent === 'Default' ? checkboxLabel.textContent = 'Checked' : checkboxLabel.textContent = 'Default';
})