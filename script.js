// Part 1: JavaScript Basics

// 1. Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = { firstName: "John", lastName: "Doe" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// 2. Operators and Calculator Function
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Invalid input. Please enter numbers.";
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById('result').textContent = "Error: Division by zero";
                return;
            }
            break;
        default:
            document.getElementById('result').textContent = "Invalid operation";
            return;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}

// 3. Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

function updateGreeting() {
    let name = document.getElementById('name-input').value;
    document.getElementById('greeting').textContent = greetUser(name);
}

// Part 2: JavaScript Control Structures

// 4. If Statements
function checkVotingEligibility() {
    let userAge = parseInt(document.getElementById('age-input').value);
    let votingEligibility = document.getElementById('voting-eligibility');

    if (isNaN(userAge)) {
        votingEligibility.textContent = "Invalid input. Please enter a number.";
    } else if (userAge >= 18) {
        votingEligibility.textContent = "You are eligible to vote!";
    } else {
        votingEligibility.textContent = "You are not eligible to vote yet.";
    }
}

// 5. Loops
let numberList = document.getElementById('number-list');
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// 6. Creating HTML Structure
// (Already done in the HTML file)

// 7. Selecting and Modifying HTML Elements
document.querySelector('h1').textContent = "JavaScript in Action!";

let dynamicContent = document.getElementById('dynamic-content');
let newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);

// Add event listeners for enter key press
document.getElementById('name-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        updateGreeting();
    }
});

document.getElementById('age-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkVotingEligibility();
    }
});