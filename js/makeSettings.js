let AllSettingValue = {}

function SaveSettings() {
    for (const option in defaultSettings) {
        const SettingValue = document.querySelector(`input[name="${option}"]`)

        if (SettingValue.type == 'number') {
            AllSettingValue[option] = SettingValue.value
        }

        if (SettingValue.type == 'radio') {
            const SettingRadio = document.querySelectorAll(`input[name="${option}"]`)

            for (let i = 0; i < SettingRadio.length; i++) {
                if (SettingRadio[i].checked == true) {
                    AllSettingValue[option] = SettingRadio[i].value
                }
            }
        }

        if (SettingValue.type == 'text') {
            AllSettingValue[option] = SettingValue.value
        }
    }
    return settingsContent(AllSettingValue)
}

function settingsContent(AllSettingValue) {
    let PalWorldSettings = 
`; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/WindowsServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(`

    const quoteskeys = ['ServerName', 'ServerDescription', 'AdminPassword', 'ServerPassword', 'PublicIP', 'Region', 'BanListURL']

    for (const option in AllSettingValue) {
        if (AllSettingValue[option] === "") {
            PalWorldSettings += `${option}="",`;
        } else {
            if (quoteskeys.includes(option)) {
                PalWorldSettings += `${option}="${AllSettingValue[option]}",`;
            } else {
                PalWorldSettings += `${option}=${AllSettingValue[option]},`;
            }
        }
    }

    PalWorldSettings = PalWorldSettings.slice(0, -1); //마지막 , 제거
    PalWorldSettings += ")\n";

    return PalWorldSettings
}

function copyClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('설정이 복사되었습니다.')
        })
        .catch((err) => {
            console.error("Error:", err);
        });
}

function CopySettings() {
    let PalWorldSettings = SaveSettings()
    copyClipboard(PalWorldSettings)
}

function MakeSettings() {
    let PalWorldSettings = SaveSettings();

    const blob = new Blob([PalWorldSettings], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'PalWorldSettings.ini';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('다운로드 되었습니다. 다운로드 페이지를 확인해주세요')
}