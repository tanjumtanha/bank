// step-1:add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // get the deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    // step-2:get the current deposit
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerHTML;
    // step-3:update the current deposit amount
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);

    depositTotalElement.innerText=currentDepositTotal;
    // step-4: update total deposit amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat (previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal; 


    // step-5:clear the deposit field
    depositField.value = '';

    // console.log(depositTotal);
})