const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number1 = prompt("What's your first number ? ");
const number2 = prompt("whats your seconed number  ? ");
const MathOperation = prompt("whats your mathematical operation?");


if (MathOperation === "+"){
    let Results = number1 + number2
    console.log(`${number1} + ${number2} = ${Results}`)
}
else if ( MathOperation === "-"){
    let Results = number1 - number2 
    console.log(`${number1} - ${number2} = ${Results}`)
}
else if (MathOperation === "*"){
    let Results = number1 * number2
    console.log(`${number1} * ${number2} = ${Results}`) 
}
else if (MathOperation === "/"){
    let Results = number1 / number2
    console.log(`${number1}/${number2}=${Results}`)
}
else 
    console.log("Please enter a valid Mathmatical Opertation!")