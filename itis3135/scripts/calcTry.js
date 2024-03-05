const display = { currentInput: '0' };

function appendToDisplay(value) {
    if (state.currentInput === '0' && !isNaN(value)) {
        state.currentInput = value;
    } else {
        state.currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    state.currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        display.currentInput = eval(display.currentInput);
        updateDisplay();
    } catch (error) {
        display.currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = display.currentInput;
}