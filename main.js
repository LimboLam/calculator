let inputNumOne = parseInt(document.getElementById(`inputNumOne`));
let num1 = inputNumOne;
let inputNumTwo = parseInt(document.getElementById(`inputNumTwo`));
let num2 = inputNumTwo;
let inputOperator = document.getElementById(`inputOperator`);
let operator = inputOperator;
let button = document.querySelector(`button`);

if (num1 === "null" || num2 === "null" || operator === "null")
    alert(`Enter a number or operator`)

button.addEventListener(`click`, () => {
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
            result = `null`;
    }

    document.write(`${num1} ${operator} ${num2} = ${result}`);
})