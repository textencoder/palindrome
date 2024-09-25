const detectiveImage = document.getElementById('detective');
const trueImage = document.getElementById('true');
const falseImage = document.getElementById('false');
const headerText = document.getElementById('header');
const inputBox = document.getElementById('text-input');
const submitBtn = document.getElementById('check-btn');
const resultText = document.getElementById('result');


submitBtn.addEventListener("click", () => {
    displayResult(inputBox.value);
    inputBox.blur();
    inputBox.value = '';
})

inputBox.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === 13) {
        displayResult(inputBox.value);
        inputBox.blur();
        inputBox.value = '';
    }
})

const displayResult = (userInput) => {

    if (!inputBox.value) {
        alert("Please input a value");
    }

        let inputStr = userInput.replace(/[^0-9a-z]/gi, '').toLowerCase();

        let reverseString = inputStr.split("").reverse().join("");
    
        let isPalindrome = (inputStr === reverseString);

        if (isPalindrome) {
            detectiveImage.style.display = 'none';
            falseImage.style.display = 'none';
            trueImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${userInput}</span> <br> is a palindrome`;
            headerText.style.color = '#3cb371'
        } else {
            detectiveImage.style.display = 'none';
            trueImage.style.display = 'none';
            falseImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${userInput}</span> <br> is NOT a palindrome`;
            headerText.style.color = '#f08080'; 
        }
    }