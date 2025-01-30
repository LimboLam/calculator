let num1 = parseInt(document.getElementById(`inputNumOne`));
let num2 = parseInt(document.getElementById(`inputNumTwo`));
let operator = document.getElementById(`inputOperator`);
let button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
    if (operator == `+`) {
        let result = num1 + num2;
        alert(result);
    }
    else if (operator == `-`) {
        result = num1 - num2;
        alert(result);
    }
    else if (operator == `*`) {
        result = num1 * num2;
        alert(result);
    }
    else if (operator == `/`) {
        result = num1 / num2;
        alert(result);
    }
    else {
        alert(`Enter a valid operator`);
    }
})