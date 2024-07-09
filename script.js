const detectiveImage = document.getElementById('detective');
const trueImage = document.getElementById('true');
const falseImage = document.getElementById('false');
const headerText = document.getElementById('header');
const inputBox = document.getElementById('text-input');
const submitBtn = document.getElementById('check-btn');
const resultText = document.getElementById('result');


submitBtn.addEventListener("click", () => {
    displayResult(document.getElementById('text-input').value)
})

inputBox.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        displayResult(document.getElementById('text-input').value);
    }
})

const displayResult = (userInput) => {

        let inputStr = userInput.replace(/[^0-9a-z]/gi, '').toLowerCase();

        let reverseString = inputStr.split("").reverse().join("");
    
        let isPalindrome = (inputStr === reverseString);

        // Do not accept invalid input
        // if (userInput === "") {
        //    resultText.innerText = "Please enter a valid input";
        // }

        if (isPalindrome) {
            detectiveImage.style.display = 'none';
            falseImage.style.display = 'none';
            trueImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${userInput}</span> <br> is a palindrome`;
            headerText.style.color = '#3cb371'
            inputBox.style.borderColor = "#3cb371";
            inputBox.style.boxShadow = "0 0 10px #3cb371";
            submitBtn.style.backgroundColor = "#3cb371";
        } else {
            detectiveImage.style.display = 'none';
            trueImage.style.display = 'none';
            falseImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${userInput}</span> <br> is NOT a palindrome`;
            headerText.style.color = '#f08080'
            inputBox.style.borderColor = "#f08080";
            inputBox.style.boxShadow = "0 0 10px #f08080";
            submitBtn.style.backgroundColor = "#f08080";
        }
    }