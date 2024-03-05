const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector('.calculator__display');

const calculate = (num1, operator, num2) => {

  switch (operator) {
    case 'add':
      return parseFloat(num1) + parseFloat(num2);
    case 'subtract':
      return parseFloat(num1) - parseFloat(num2);
    case 'multiply':
      return parseFloat(num1) * parseFloat(num2);
    case 'divide':
      return parseFloat(num1) / parseFloat(num2);
    default:
      return num2;
  }
};

const getKeyType = (key) => {
  const { action } = key.dataset;
  if (!action) return 'number';
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) return 'operator';
  return action;
};

const createResultString = (key, displayedNum, calculatorState) => {
  const keyType = getKeyType(key);

  if (keyType === 'number') {
    return displayedNum === '0' || calculatorState.previousKeyType === 'operator' || calculatorState.previousKeyType === 'calculate'
      ? key.textContent
      : displayedNum + key.textContent;
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.';
    if (calculatorState.previousKeyType === 'operator' || calculatorState.previousKeyType === 'calculate') return '0.';
    return displayedNum;
  }

  if (keyType === 'operator') {
    const { firstValue, operator } = calculatorState;
    return firstValue && operator && calculatorState.previousKeyType !== 'operator' && calculatorState.previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum;
  }

  if (keyType === 'clear') return '0';

  if (keyType === 'calculate') {
    const { firstValue, operator, modValue } = calculatorState;
    return firstValue
      ? calculatorState.previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum;
  }
};

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key);
  calculator.dataset.previousKeyType = keyType;

  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

  if (keyType === 'operator') {
    key.classList.add('is-depressed');
    calculator.dataset.operator = key.dataset.action;
    calculator.dataset.firstValue = calculatedValue;
  }

  if (keyType === 'clear') {
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = '';
      calculator.dataset.modValue = '';
      calculator.dataset.operator = '';
      calculator.dataset.previousKeyType = '';
    } else {
      key.textContent = 'AC';
    }
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = displayedNum;
  }
};

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key);
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
  if (keyType === 'operator') key.classList.add('is-depressed');

  if (keyType === 'clear' && key.textContent !== 'AC') {
    key.textContent = 'AC';
  }
  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]');
    clearButton.textContent = 'CE';
  }
};

keys.addEventListener('click', e => {
  const key = e.target;
  const displayedNum = display.textContent;
  const resultString = createResultString(key, displayedNum, calculator.dataset);
  display.textContent = resultString;
  updateCalculatorState(key, calculator, resultString, displayedNum);
  updateVisualState(key, calculator);
});
