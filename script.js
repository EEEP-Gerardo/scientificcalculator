function createCalculator() {
    const calculator = document.createElement('div');
    calculator.classList.add('calculator');

    // Input para exibir a expressão
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'display';
    input.readOnly = true;
    calculator.appendChild(input);

    // Container para os botões
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    // Botões
    const buttons = [
        'C', '√', '^', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+',
        '0', '.', '=', 'sin', 'cos', 'tan', 'log', 'exp'
    ];

    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.addEventListener('click', () => onButtonClick(buttonText));
        buttonsContainer.appendChild(button);
    });

    calculator.appendChild(buttonsContainer);
    document.body.appendChild(calculator);
}

function onButtonClick(value) {
    const display = document.getElementById('display');

    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Erro';
        }
    } else if (value === 'C') {
        display.value = '';
    } else if (value === '√') {
        display.value = Math.sqrt(parseFloat(display.value));
    } else if (value === '^') {
        display.value += '**';
    } else if (value === 'sin') {
        display.value = Math.sin(parseFloat(display.value));
    } else if (value === 'cos') {
        display.value = Math.cos(parseFloat(display.value));
    } else if (value === 'tan') {
        display.value = Math.tan(parseFloat(display.value));
    } else if (value === 'log') {
        display.value = Math.log(parseFloat(display.value));
    } else if (value === 'exp') {
        display.value = Math.exp(parseFloat(display.value));
    } else {
        display.value += value;
    }
}

// Adicione algum CSS para melhorar o estilo e adicionar animações
const css = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Monospace, Sans-Serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin: 0;
    background-color: #111827;
}

.calculator {
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    background-color: #ECFEFF;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.5s;
}

#display {
    width: 100%;
    padding: 5px;
    font-size: 24px;
    margin-bottom: 10px;
    background-color: #e5e5e5;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.buttons-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    align-items: start;
    animation: slideIn 0.5s;
}

input {
   outline: none;
}

button {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    background-color: #0F766E;
    color: #E2E8F0;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #134E4A;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-20px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

createCalculator();
