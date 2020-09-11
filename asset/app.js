const defaultResult = 0;
let currentResult = defaultResult;

const POUND_TO_KILOGRAM = 0.453592;
const POUND_TO_GRAM = 453.592;
const POUND_TO_OUNCE = 16;

// Getting user input
const getUserNumberInput = () => {
    return parseFloat(userInput.value);
};

// Create & write converting log
const createAndWriteLog = (measurement) => {
    const enteredNumber = getUserNumberInput() + ' pound';
    const convertDescription = `${currentResult} ${measurement}`;
    outputResult(convertDescription, enteredNumber);
};

// Calculate the result based on type of measurement
const calculateResult = (calculationType) => {
    const enteredNumber = getUserNumberInput();

    // Validate the calculation type
    if (
        calculationType !== 'KILOGRAM' &&
        calculationType !== 'GRAM' &&
        calculationType !== 'OUNCE' &&
        !enteredNumber
    ) {
        return;
    }

    let measurement;
    switch (calculationType) {
        case 'KILOGRAM':
            currentResult = enteredNumber * POUND_TO_KILOGRAM;
            measurement = 'kilogram';
            break;
        case 'GRAM':
            currentResult = enteredNumber * POUND_TO_GRAM;
            measurement = 'gram';
            break;
        case 'OUNCE':
            currentResult = enteredNumber * POUND_TO_OUNCE;
            measurement = 'ounce'
            break;
    }
    currentResult = Math.round(currentResult * 100) / 100; // Round to 2 decimal places
    createAndWriteLog(measurement);
}

// Clear result area
const clearResult = () => {
    currentResult = defaultResult;
    enteredNumber = defaultResult;
    outputResult(currentResult, enteredNumber);
};

// Hotkey 
document.onkeydown = function(e) {
    if (e.ctrlKey && e.shiftKey && e.which == 49) {
        calculateResult('KILOGRAM'); // Ctrl + Shift + 1
    } else if (e.ctrlKey && e.shiftKey && e.which == 50) {
        calculateResult('GRAM'); // Ctrl + Shift + 2
    } else if (e.ctrlKey && e.shiftKey && e.which == 51) {
        calculateResult('OUNCE'); // Ctrl + Shift + 3
    } else if (e.ctrlKey && e.shiftKey && e.which == 52) {
        clearResult(); // Ctrl + Shift + 4
    } else if (e.which == 32) {
        userInput.focus();
    }
};

kilogramBtn.addEventListener('click', calculateResult.bind(this, 'KILOGRAM'));
gramBtn.addEventListener('click', calculateResult.bind(this, 'GRAM'));
ounceBtn.addEventListener('click', calculateResult.bind(this, 'OUNCE'));
clearBtn.addEventListener('click', clearResult);