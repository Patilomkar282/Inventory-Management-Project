document.getElementById('addItem').addEventListener('click', function() {
    const item = prompt('Enter item name:');
    const quantity = parseInt(prompt('Enter quantity:'));
    const Dept = prompt('Enter Department:');
    const Lab = prompt('Enter Lab:');

    if (item && quantity) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item}</td>
            <td>${quantity}</td>
            <td>${Dept}</td>
            <td>${Lab}</td>
            <td><button class="removeItem">Remove</button></td>
        `;

        document.getElementById('inventoryTable').appendChild(row);

        const removeButton = row.querySelector('.removeItem');
        removeButton.addEventListener('click', function() {
            row.remove();
            
        });
    }
});

    document.addEventListener('DOMContentLoaded', function() {
    // Sample inventory data (Replace this with your actual data)
    var inventoryData = [
        { name: 'Item 1', quantity: 50, category: 'Category A' },
        { name: 'Item 2', quantity: 80, category: 'Category B' },
        { name: 'Item 3', quantity: 25, category: 'Category A' },
        { name: 'Item 4', quantity: 45, category: 'Category C' }

    ];

    var inventoryChart = document.getElementById('inventoryChart').getContext('2d');
    var inventoryBody = document.getElementById('inventoryBody');

    // Prepare data for the chart
    var labels = inventoryData.map(item => item.name);
    var quantities = inventoryData.map(item => item.quantity);

    // Create the chart
    var chart = new Chart(inventoryChart, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inventory Quantity',
                data: quantities,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Populate inventory table
    inventoryData.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.category}</td>
        `;
        inventoryBody.appendChild(row);
    });
});