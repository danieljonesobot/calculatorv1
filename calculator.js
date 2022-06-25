

let firstNum = parseInt(prompt("Enter your first number"));

let operator = prompt("Enter a valid Math operation: Add: + , Multiply: * , Subtract: - , Divide: / , Mod: %")

let secondNum = parseInt(prompt("Enter your second number"))

if (operator === "+") {
    alert(`The answer is ${firstNum + secondNum}`);
    console.log(`The answer is ${firstNum + secondNum}`);

} else if (operator === "*") {
    alert(`The answer is ${firstNum * secondNum}`);
    console.log(`The answer is ${firstNum * secondNum}`);
}

else if (operator === "-") {
    alert(`The answer is ${firstNum - secondNum}`);
    console.log(`The answer is ${firstNum - secondNum}`);
}

else if (operator === "/") {
    alert(`The answer is ${firstNum / secondNum}`);
    console.log(`The answer is ${firstNum / secondNum}`);
}

else if (operator === "%") {
    alert(`The answer is ${firstNum % secondNum}`);
    console.log(`The answer is ${firstNum % secondNum}`);
}
else {
    alert("INVALID MATH OPERATION");
    console.log("INVALID MATH OPERATION");
}