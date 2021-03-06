const depositeAmount = document.getElementById('depositeAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const balanceAmount = document.getElementById('balanceAmount');

const depositeInput = document.getElementById('depositeInput');
const withdrawInput = document.getElementById('withdrawInput');
const depositeBtn = document.getElementById('depositeButton');
const withdrawBtn = document.getElementById('withdrawButton');

function moneyOperation(getInput, throwOutput) {
    throwOutput.innerText = parseFloat(throwOutput.innerText) + Math.abs(parseFloat(getInput));// change deposite amount or withdraw amount

    //update balance
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(getInput);
}

depositeBtn.addEventListener('click', function () { if (depositeInput.value > 0) { moneyOperation(depositeInput.value, depositeAmount); depositeInput.value = ''; } })

withdrawBtn.addEventListener('click', function () { if (withdrawInput.value > 0 && withdrawInput.value <= parseFloat(balanceAmount.innerText)) { moneyOperation(-withdrawInput.value, withdrawAmount); withdrawInput.value = ''; } })