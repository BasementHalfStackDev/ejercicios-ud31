// Adds pressed key to calculator screen
const appendToResult = (value) => {
    document.getElementById("result").innerHTML += value;
}

// Clears calculator screen
const clearResult = () => {
    document.getElementById("result").innerHTML = "";
}

// Deletes last character
const backSpace = () => {
    let element = document.getElementById("result");
    let input = element.innerHTML;
    input = input.slice(0, -1);

    element.innerHTML = input;
}

// Function that clears last inserted numbers and operator
const clearEntry = () => {
    let inputString = document.getElementById("result").innerHTML;

    // Find the index of the last character in the string
    let lastIndex = inputString.length - 1;

    if (lastIndex >= 0) {
        // Find the index of the second-to-last non-digit character including decimals
        let i = lastIndex;
        while (i >= 0 && /\d|\./.test(inputString[i])) {
            i--;
        }
        while (i >= 0 && /[^\d.]/.test(inputString[i])) {
            i--;
        }

        // If a non-digit character was found, remove everything after it plus the operator
        if (i >= 0) {
            document.getElementById("result").innerHTML = inputString.slice(0, i + 1);
        }
    }

}

// Function to calculate inserted string
const calculate = () => {
    // Get the input string from the calculator screen
    let inputString = document.getElementById("result").innerHTML;

    // Split the string into an array of tokens
    let tokens = inputString.split(/([-+*/%])/);

    // Remove any empty tokens
    tokens = tokens.filter(token => token.trim() !== "");

    // Initialize variables for the calculation
    let result;
    let operator;

    // Check if the first token is a negative sign
    if (tokens[0] === "-") {
        // If so, concatenate it with the next token to form a negative number
        result = -parseFloat(tokens[1]);
        tokens = tokens.slice(2);
    } else {
        // Otherwise, set the first token as the initial result value
        result = parseFloat(tokens[0]);
        tokens = tokens.slice(1);
    }

    // Loop through the remaining tokens and perform the calculations depending on the operator
    for (var i = 0; i < tokens.length; i += 2) {
        operator = tokens[i];
        switch (operator) {
            case "+":
                result += parseFloat(tokens[i + 1]);
                break;
            case "-":
                result -= parseFloat(tokens[i + 1]);
                break;
            case "*":
                result *= parseFloat(tokens[i + 1]);
                break;
            case "/":
                result /= parseFloat(tokens[i + 1]);
                break;
            case "%":
                result *= parseFloat(tokens[i + 1]) / 100;
                break;
        }
    }

    // Set the result
    document.getElementById("result").innerHTML = result;
}

// Checks if number is positive or negative, and swaps it
const swapPositiveNegative = () => {
    // Gets number from calculator screen
    let num = document.getElementById("result").innerHTML;

    // Swaps depending on if its positive or negative
    if (num >= 0) {
        document.getElementById("result").innerHTML = -Math.abs(num);
    } else {
        document.getElementById("result").innerHTML = Math.abs(num);
    }
}

// Calculates square root
const calculateSqrt = () => {
    // Calculates previous operations first
    calculate();

    // Gets calculator screen and and input
    let resultElement = document.getElementById("result");
    let input = resultElement.innerHTML;
    // Calculates square root
    let result = Math.sqrt(parseFloat(input));

    // Update the result element with the calculated square root
    resultElement.innerHTML = result.toString();
}

// Divides 1 by the input number
const calculate1x = () => {
    // Calculates previous operations first
    calculate();
    
    // Gets calculator screen and and input
    let resultElement = document.getElementById("result");
    let input = resultElement.innerHTML;
    // Divides 1 by the input number
    let result = (1/input);

    // Update the result element with the calculated 1 divided by x number
    resultElement.innerHTML = result.toString();
}
