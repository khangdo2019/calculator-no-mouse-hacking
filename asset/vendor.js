const userInput = document.getElementById('input-number');
const kilogramBtn = document.getElementById('btn-kilogram');
const gramBtn = document.getElementById('btn-gram');
const ounceBtn = document.getElementById('btn-ounce');
const clearBtn = document.getElementById('btn-clear');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const outputResult = (result, text) => {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
};