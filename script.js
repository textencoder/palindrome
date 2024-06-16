const detectiveImage = document.getElementById('detective');
const trueImage = document.getElementById('true');
const falseImage = document.getElementById('false');
const headerText = document.getElementsByTagName('h1');
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

        let inputStr = userInput.toLowerCase();

        let reverseString = inputStr.split("").reverse().join("");
    
        let isPalindrome = (inputStr === reverseString);

        if (isPalindrome) {
            detectiveImage.style.display = 'none';
            falseImage.style.display = 'none';
            trueImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${inputStr}</span> <br> is a palindrome`;
            //headerText.style.color = "#3cb371";
            //loop through headerText
            for (i = 0; i < headerText.length; i++) {
                headerText[i].style.color = '#3cb371';
              }
            inputBox.style.borderColor = "#3cb371";
            inputBox.style.boxShadow = "0 0 10px #3cb371";
            submitBtn.style.backgroundColor = "#3cb371";
        } else {
            detectiveImage.style.display = 'none';
            trueImage.style.display = 'none';
            falseImage.style.display = 'block';
            resultText.innerHTML = `<span id="inputStr">${inputStr}</span> <br> is NOT a palindrome`;
            //headerText.style.color = "#f08080";
            for (i = 0; i < headerText.length; i++) {
                headerText[i].style.color = '#f08080';
              }
            inputBox.style.borderColor = "#f08080";
            inputBox.style.boxShadow = "0 0 10px #f08080";
            submitBtn.style.backgroundColor = "#f08080";
        }
    }