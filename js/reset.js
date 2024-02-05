function resetDefault(option) {
    const clickInput = document.querySelector(`input[name="${option}"]`)

    if (clickInput.type == 'number') {
        const inputRange = document.querySelector(`input[name="${option}Range"]`)
    
        clickInput.value = defaultSettings[option]
        inputRange.value = defaultSettings[option]
    }

    if (clickInput.type == 'radio') {
        const inputRadio = document.querySelectorAll(`input[name="${option}"]`)
        for (let i = 0; i < inputRadio.length; i++) {
            if (inputRadio[i].value === defaultSettings[option]) {
                inputRadio[i].checked = true
                break
            }
        }
    }
}