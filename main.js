let inputNumOne = parseInt(document.getElementById(`inputNumOne`));
let num1 = parseInt(prompt(`Enter the 1st number:`));
let inputNumTwo = parseInt(document.getElementById(`inputNumTwo`));
let num2 = parseInt(prompt(`Enter the 2nd number:`));
let inputOperator = document.getElementById(`inputOperator`);
let operator = prompt(`Enter an operator (+, -, *, /):`);
let button = document.querySelector(`button`);

if (num1 === NaN || num2 === NaN || operator === null)
    alert(`Enter a number or an operator`)

// button.addEventListener(`click`, () => {
    let result;
    switch (operator) {
        case `+`:
            result = num1 + num2;
            break;
        case `-`:
            result = num1 - num2;
            break;
        case `*`:
            result = num1 * num2;
            break;
        case `/`:
            if (num2 === 0) {
                alert(`Divide by 0 error`);
            }
            result = num1 / num2;
            break;
        default:
            alert(`Enter a valid operator`);
            result = null;
    }

    document.write(`<h1>${num1} ${operator} ${num2} = ${result}<h1>`);
// })