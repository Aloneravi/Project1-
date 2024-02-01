let displayValue = '';

function appendNumber(num) {
  displayValue += num;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue.slice(-1) !== operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}