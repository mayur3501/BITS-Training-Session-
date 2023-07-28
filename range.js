function displayNumbers(type) {
    let startNum = parseInt(document.getElementById('startNum').value);
    let endNum = parseInt(document.getElementById('endNum').value);
    let result = document.getElementById('result');
    let numbers = [];
    let label;

    for (let i = startNum; i <= endNum; i++) {
        if ((type === "even" && i % 2 === 0) || (type === "odd" && i % 2 !== 0)) {
            numbers.push(i);
        }
    }

    if (type === "even") {
        label = "Even Numbers";
    } else {
        label = "Odd Numbers";
    }

    if (numbers.length === 0) {
        result.textContent = "No " + label.toLowerCase() + " found in the range.";
    } else {
        result.textContent = label + ": " + numbers.join(', ');
    }
}
