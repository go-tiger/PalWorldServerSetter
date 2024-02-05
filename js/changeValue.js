function changeValue(rangeValue) {
    let inputRange = document.querySelector(`input[name="${rangeValue}"]`)
    if (inputRange.name.endsWith('Range')) {
        let inputNumber = inputRange.name.replace('Range', '')
        inputNumber = document.querySelector(`input[name="${inputNumber}"]`)
        inputNumber.value = inputRange.value
        inputNumber.style.backgroundColor = '#a5f78178';
    } else {
        if (inputRange.type === 'radio') {
            inputRange.parentNode.style.backgroundColor = '#a5f78178';
            return
        }

        if (inputRange.type === 'text') {
            inputRange.style.backgroundColor = '#a5f78178';
            return
        }

        inputNumber = inputRange
        inputRange = document.querySelector(`input[name="${inputRange.name}Range"]`)
        inputRange.value = inputNumber.value
        inputNumber.style.backgroundColor = '#a5f78178';
    }
}