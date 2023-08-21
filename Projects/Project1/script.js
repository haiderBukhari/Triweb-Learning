const randomField = document.getElementById("randomField");
const textInput = document.getElementById("textInput");
const verifyButton = document.getElementById("verifyButton");

randomField.value = generateRandomCode();

verifyButton.addEventListener("click", () => {
    const inputText = textInput.value;
    const randomText = randomField.value;

    if (inputText === randomText) {
        alert("Verification successful!");
    } else {
        alert("Verification failed. Try again.");
    }
});

function generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCode = "";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
}
