document.getElementById('btn-submit-withdraw').addEventListener('click', function () {
    // const newWithdrawAmount = getElementValueById('withdraw-total')

    const newWithdrawAmount = getInputValueById('withdrow-input-field')

    const previousWithdrawTotal = getElementValueById('withdraw-total')

    const nowWithdrawTotal = newWithdrawAmount + previousWithdrawTotal

    setTextElementValueById('withdraw-total', nowWithdrawTotal)

    previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - nowWithdrawTotal

    setTextElementValueById('balance-total', newBalanceTotal)
})