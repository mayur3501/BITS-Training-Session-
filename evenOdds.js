function checkOddOrEven() {
  let userInput = parseInt(document.getElementById("num").value);
  if (isNaN(userInput)) {
    document.getElementById("result").value = "Invalid input";
    return;
  }
  if (userInput % 2 === 0) {
    document.getElementById("result").value = "The number is even.";
  } else {
    document.getElementById("result").value = "The number is odd.";
  }
}