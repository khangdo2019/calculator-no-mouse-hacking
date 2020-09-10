const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const POUND_TO_KILOGRAM = 0.453592;
const POUND_TO_GRAM = 453.592;
const POUND_TO_OUNCE = 16;

// Getting user input
const getUserNumberInput = () => {
    return parseInt(userInput.value);
};

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

    switch (calculationType) {
        case 'KILOGRAM':
            currentResult = enteredNumber * POUND_TO_KILOGRAM;
            break;
        case 'GRAM':
            currentResult = enteredNumber * POUND_TO_GRAM;
            break;
        case 'OUNCE':
            currentResult = enteredNumber * POUND_TO_OUNCE;
            break;
    }
    outputResult(currentResult, enteredNumber);
}

kilogramBtn.addEventListener('click', calculateResult.bind(this, 'KILOGRAM'));
gramBtn.addEventListener('click', calculateResult.bind(this, 'GRAM'));
ounceBtn.addEventListener('click', calculateResult.bind(this, 'OUNCE'));