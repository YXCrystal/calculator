const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.calculator__buttons--key');

buttons.forEach(button => {
    button.addEventListener('click', (() => {
        console.log(button.textContent);
    }));
});