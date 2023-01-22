document.getElementById('btn-submit-deposit').addEventListener('click', function () {
    const newDepositAmmount = getInputValueById('deposit-input-field')
    
    // calculate total
    const previousDepositTotal = getElementValueById('deposit-total')

    const nowDepositTotal = newDepositAmmount + previousDepositTotal

    setTextElementValueById('deposit-total', nowDepositTotal)

    const previousBalanceTotal = getElementValueById('balance-total')

    const newBalanceTotal = previousBalanceTotal + nowDepositTotal

    setTextElementValueById('balance-total', newBalanceTotal)
})
