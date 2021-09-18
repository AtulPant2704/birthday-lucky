const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")

checkNumberButton.addEventListener("click", function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const luckyNo = luckyNumber.value;
    const dobSum = calculateSum(dob);
    if (dobSum && luckyNo) {
        if (dobSum % luckyNo === 0) {
            outputBox.innerText = "Your birthday is lucky🎉";
        } else {
            outputBox.innerText = "Your birthday is not lucky😌";
        }
    } else {
        outputBox.innerText = "Please enter both the fields👿";
    }
})

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    var sum = 0;
    for (var i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}