function getInputValue(input){
    const depositInput = document.getElementById(input);
    const depositInputText = depositInput.value;
    depositInput.value = '';
    const newDepositAmount = parseFloat(depositInputText);
    return newDepositAmount;
}

function updateAmount(updateInput, newDepositAmount){
    const depositAmount = document.getElementById(updateInput);
    const depositAmountText = depositAmount.innerText;
    const previousAmount = parseFloat(depositAmountText);
    depositAmount.innerText = previousAmount + newDepositAmount;
    
}


function updateBalanceAmount(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
     if(isAdd == true){
        balanceTotal.innerText = previousBalanceAmount + newDepositAmount;
     }
     else{
        balanceTotal.innerText = previousBalanceAmount - newDepositAmount;
     }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    newDepositAmount =  getInputValue('deposit-input');
        updateAmount('deposit-amount', newDepositAmount);
        updateBalanceAmount(newDepositAmount, true);  
    
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    newWithdrawAmount =  getInputValue('withdraw-input');
        updateAmount('withdraw-total', newWithdrawAmount);
        updateBalanceAmount(newWithdrawAmount, false);

})