const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.calculator__buttons--key');
let equation = '';


buttons.forEach(button => {
    value.textContent = '';

    function evaluation(operation) {
    if (equation !== '' && equation[equation.length -1] !== operation) {
        equation += operation;
            value.textContent += button.textContent;
        }   
    }

    function operation() {
        if (equation[equation.length - 1] === '0' && equation[equation.length - 2] === '/') {
            value.textContent = 'Cannot divide by 0';
        } else {
            equation = `${Number.isInteger(eval(equation)) ? eval(equation) : eval(equation).toFixed(3)}`;
            value.textContent = equation;
        }
    }

    button.addEventListener('click', (() => {
        if (button.id === 'AC') {
            equation = '';
            value.textContent = equation;
        } else if (button.id === 'reverse') {
            equation = equation.slice(0, -1)
            value.textContent = equation;
        } else if (button.id === 'sign') {
            equation *= -1;
            value.textContent = equation;
        } else if (button.id === 'multiply') {
            evaluation('*');  
        } else if (button.id === 'divide') {
            evaluation('/');
        } else if (button.textContent === '=' && equation !== '') {
            operation();
        } else {
            value.textContent += button.textContent;
            equation += button.textContent;

        }
        
    }));
});
