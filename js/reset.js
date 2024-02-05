function resetDefault(option) {
    const clickInput = document.querySelector(`input[name="${option}"]`)

    if (clickInput.type == 'number') {
        const inputRange = document.querySelector(`input[name="${option}Range"]`)
    
        clickInput.value = defaultSettings[option]
        inputRange.value = defaultSettings[option]
    } else if (clickInput.type == 'radio') {
        const inputRadio = document.querySelectorAll(`input[name="${option}"]`)
        for (let i = 0; i < inputRadio.length; i++) {
            if (inputRadio[i].value === defaultSettings[option]) {
                inputRadio[i].checked = true
                inputRadio[i].parentNode.style.backgroundColor = '';
                break
            }
        }
    } else {
        clickInput.value = defaultSettings[option]
    }
    clickInput.style.backgroundColor = '';
}

function resetAllDefault() {
    for (const option in defaultSettings) {
        resetDefault(option)
    }
}