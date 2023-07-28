function findColorCode() {
    const colorName = document.getElementById("colorName").value;
    let colorCode;
    switch (colorName) {
        case "Red":
            colorCode = "Monday";
            break;
        case "Green":
            colorCode = "Tuesday";
            break;
        case "Blue":
            colorCode = "Wednesday";
            break;
        case "Yellow":
            colorCode = "Thursday";
            break;
        case "Pink":
            colorCode = "Friday";
            break;
        case "White":
            colorCode = "Saturday";
            break;
        case "Black":
            colorCode = "Sunday";
            break;
        default:
            colorCode = "Color not found";
    }
    document.getElementById("result").value = colorCode;
}