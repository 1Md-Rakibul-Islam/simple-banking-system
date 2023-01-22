function getInputValueById(inputID) {
    const inputField = document.getElementById(inputID)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    inputField.value = ''
    return inputFieldValue
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueString = element.innerText
    const elementVlaue = parseFloat(elementValueString)
    return elementVlaue
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
