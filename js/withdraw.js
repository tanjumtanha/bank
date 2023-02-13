document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(isNaN(newWithdrawAmount)){
        alert('Please provide valid amount');
        return;
    }
    else if (newWithdrawAmount <= previousBalanceTotal) {
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
    }
    else {
        alert("You don't have sufficient balance");
    }


    
})