
function calculatePercentage() {
    let subject1Marks = parseFloat(document.getElementById('Subject1').value);
    let subject2Marks = parseFloat(document.getElementById('Subject2').value);
    let subject3Marks = parseFloat(document.getElementById('Subject3').value);

    let totalMarks = subject1Marks + subject2Marks + subject3Marks;
    let percentage = (totalMarks / 300) * 100;

    let resultPercentage = document.getElementById('Percentage');
    resultPercentage.value = percentage.toFixed(2);
}

function calculateGrade() {
    let percentage = parseFloat(document.getElementById('Percentage').value);
    let Grade;
    if (percentage >= 90) {
        Grade = 'Outstanding : Grade O';
    } else if (percentage >= 80) {
        Grade = 'Excellent : Grade A+';
    } else if (percentage >= 70) {
        Grade = 'Best : Grade A';
    } else if (percentage >= 60) {
        Grade = 'Good : Grade B+';
    } else if (percentage >= 50) {
        Grade = 'Work Hard : Grade B';
    } else if (percentage >= 40) {
        Grade = 'Poor : Grade C';
    } else if (percentage >= 35) {
        Grade = 'Pass : Grade P';
    } else {
        Grade = 'Fail : Grade F';
    }

    let resultGrade = document.getElementById('Grade');
    resultGrade.value = Grade;
}
