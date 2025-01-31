calculations();

function calculations() {
    let num1 = parseInt(prompt(`Enter the 1st number:`));
    let num2 = parseInt(prompt(`Enter the 2nd number:`));
    let operator = prompt(`Enter an operator (+, -, *, /):`);
    let result;
    if (num1 === NaN || num2 === NaN) {
        alert(`Enter a valid number`);
        calculations();
    } else {
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
                    calculations();
                }
                else {
                    result = num1 / num2;
                }
                break;
            default:
                alert(`Enter a valid operator`);
                result = null;
                calculations();
        }
    }

    document.write(`<h1>${num1} ${operator} ${num2} = ${result}<h1>`);
    return;
}