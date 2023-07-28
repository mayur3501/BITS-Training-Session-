const sabjiRates = {
    'Select sabji': 0,
    'Chiken Malwani': 250,
    'Chiken Masala': 220,
    'Veg Maratha': 180,
    'Panner Masala': 200
};
function sabjiRate() {
    const selectElement = document.getElementById('sabji');
    const Rate = document.getElementById('Rate');
    const selectedSabji = selectElement.value;
    const rate = sabjiRates[selectedSabji];
    Rate.textContent = rate !== undefined ? `Rate: ${rate}` : "Rate";
}
function calculateAmount() {
    const selectElement = document.getElementById('sabji');
    const selectedSabji = selectElement.value;
    const rate = sabjiRates[selectedSabji];
    const quantity = parseInt(document.getElementById('Quantity').value);
    const amount = rate * quantity;
    const AmountElement = document.getElementById('Amount');
    AmountElement.value = !isNaN(amount) ? amount : "";
}
