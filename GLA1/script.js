//creates the h1 element with my name
var head1 = document.createElement("h1"); 
head1.innerText = "Anthony Half";
head1.style.textAlign = "center";
head1.style.color = "#A9A9A9";
document.body.appendChild(head1);
document.body.appendChild(document.createElement("br"));

// Create input elements
var input1 = document.createElement("input");
input1.type = "number";
input1.id = "number1";
document.body.appendChild(input1);

var input2 = document.createElement("input");
input2.type = "number";
input2.id = "number2";
document.body.appendChild(input2);

// Create button
var button = document.createElement("button");
button.innerHTML = "Calculate Sum";
button.onclick = calculateSum;
document.body.appendChild(button);

// Create result paragraph
var resultParagraph = document.createElement("p");
resultParagraph.id = "result";
document.body.appendChild(resultParagraph);

// Function to calculate sum
function calculateSum() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers");
        return;
    }

    var sum = number1 + number2;
    document.getElementById("result").innerHTML = "Sum: " + sum;
}

// Style the body
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = '20px';
document.body.style.textAlign = 'center';

// Style the input boxes
var inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
    input.style.padding = '8px';
    input.style.margin = '5px';
    input.style.borderRadius = '5px';
});

// Style the button
var button = document.querySelector('button');
button.style.padding = '10px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Style the error message
var errorMessage = document.getElementById('error-message');
errorMessage.style.color = 'red';
errorMessage.style.fontWeight = 'bold';

// Style the result paragraph
var resultParagraph = document.getElementById('result');
resultParagraph.style.marginTop = '10px';
resultParagraph.style.fontWeight = 'bold';












