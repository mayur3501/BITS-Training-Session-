
function redirectToSelectedTask() {
    const dropdown = document.getElementById("taskDropdown");
    const selectedTask = dropdown.options[dropdown.selectedIndex].value;
    if (selectedTask) {
        window.open(selectedTask, "_blank");
    }
}
