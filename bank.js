const depositeAmount = document.getElementById('depositeAmount');
const withdrawAmoount = document.getElementById('withdrawAmount');
const balanceAmount = document.getElementById('balanceAmount');

const depositeInput = document.getElementById('depositeInput');
const withdrawInput = document.getElementById('withdrawInput');
const depositeBtn = document.getElementById('depositeButton');
const withdrawBtn = document.getElementById('withdrawButton');


function setAmounts(deposite, withdraw, balance) {
    // set deposite value to depositeAmount on html page
    depositeAmount.innerText = deposite;
    // set deposite value to withdrawAmount on html page
    withdrawAmount.innerText = withdraw;
    // set deposite value to balanceAmount on html page
    balanceAmount.innerText = balance;
}

setAmounts(0, 0, 2536);


depositeBtn.addEventListener('click', function () {
    const newDeposite = parseFloat(depositeInput.value);

    depositeAmount.innerText = parseFloat(depositeAmount.innerText) + newDeposite;
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + newDeposite;

    // clear the input field
    depositeInput.value = '';
})

withdrawBtn.addEventListener('click', function () {
    const newWithdraw = parseFloat(withdrawInput.value);

    withdrawAmoount.innerText = parseFloat(withdrawAmoount.innerText) + newWithdraw;
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) - newWithdraw;

    // clear the input field
    withdrawInput.value = '';
})