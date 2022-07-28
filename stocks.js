const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check");
const outputText = document.querySelector("#output-text");

checkButton.addEventListener("click", submitHandler)

function operation(initialPrice, noOfStocks, currentPrice) {

    if(Number(initialPrice) > Number(currentPrice)) {
        const diff = (initialPrice - currentPrice) * noOfStocks;
        const perc = (diff/initialPrice) * 100;
        showMessage(`Damn! You are making a loss of Rs. ${diff} & your loss percentage is ${perc.toFixed(2)}% 📉`);
    }
    else if(Number(initialPrice) < Number(currentPrice)) {
        const diff = (currentPrice - initialPrice) * noOfStocks;
        const perc = (diff/initialPrice) * 100;
        showMessage(`Yay! you are making a profit of Rs. ${diff} & your profit percentage is ${perc.toFixed(2)}% 📈`);
    }
    else {
        showMessage(`You are neither making any profit nor loss!`);
    }   
}

function submitHandler() {
    const ip = initialPrice.value;
    const qty = noOfStocks.value;
    const curr = currentPrice.value;

    operation(ip, qty, curr);
}

function showMessage(message) {
    outputText.innerText = message;
}