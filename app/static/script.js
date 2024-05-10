// document.getElementById('energyForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const watt = document.getElementById('watt').value;
//     const hours = document.getElementById('hours').value;
//     fetch('/calculate', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ watt: watt, hours: hours })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('result').innerHTML = `Täglicher Verbrauch: ${data.consumption} kWh`;
//     })
//     .catch(error => console.error('Error:', error));
// });
// In /static/script.js
document.getElementById('energyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const watt = document.getElementById('watt').value;
    const hours = document.getElementById('hours').value;
    const costPerKWh = document.getElementById('costPerKWh').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ watt: watt, hours: hours, costPerKWh: costPerKWh })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `Gesamtverbrauch: ${data.consumption} kWh. Gesamtkosten: ${data.totalCost} Euro`;
    })
    .catch(error => console.error('Error:', error));
});
