
//handle diposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =  balanceTotal.innerText;
    const proviousBalanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal = proviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input filed
    depositInput.value = '';
});

//handle withdraw event handle
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithidrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithidrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousDepositTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousDepositTotal + newWithidrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceText);
     const newBalanceTotal = previousBalanceTotal - newWithidrawAmount;

     balanceTotal.innerText = newBalanceTotal; 
    // clear withdraw input
    withdrawInput.value ='';

});
