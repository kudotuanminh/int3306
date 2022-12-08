var inputField = null;
document.addEventListener("DOMContentLoaded", function () {
    inputField = document.getElementById("input");
});

function insertNum(num) {
    inputField.textContent += num;
}

function equalTo() {
    inputField.textContent
        ? (inputField.textContent = eval(inputField.textContent))
        : false;
}

function eraseNum() {
    inputField.textContent = inputField.textContent.substring(
        0,
        inputField.textContent.length - 1
    );
}

function clearInput() {
    inputField.textContent = "";
}

function toggleNegative() {
    equalTo();
    inputField.textContent = inputField.textContent * -1;
}

function togglePercent() {
    equalTo();
    inputField.textContent = inputField.textContent / 100;
}
