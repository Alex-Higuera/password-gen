const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';

const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const numbersInput = document.getElementById('numbers');
const specialInput = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordField = document.getElementById('password');
const copyButton = document.getElementById('copy');

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSpecial = specialInput.checked;

    let charSet = lowercaseChars;

    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSpecial) charSet += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordField.value = password;
}

function copyToClipboard() {
    passwordField.select();
    document.execCommand('copy');
}
