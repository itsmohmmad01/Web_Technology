let grandTotal = 0;
let billItems = [];

function addToCart() {
    let foodSelect = document.getElementById("foodItem");
    let foodName = foodSelect.options[foodSelect.selectedIndex].text;
    let price = parseInt(foodSelect.value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let total = price * quantity;
    grandTotal += total;

    billItems.push({
        name: foodName.split(" - ")[0],
        price: price,
        quantity: quantity,
        total: total
    });

    let table = document.getElementById("cartTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = foodName.split(" - ")[0];
    row.insertCell(1).innerText = "₹" + price;
    row.insertCell(2).innerText = quantity;
    row.insertCell(3).innerText = "₹" + total;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.className = "removeBtn";

    removeBtn.onclick = function () {
        grandTotal -= total;
        document.getElementById("grandTotal").innerText = grandTotal;
        row.remove();
    };

    row.insertCell(4).appendChild(removeBtn);

    document.getElementById("grandTotal").innerText = grandTotal;
}

function printBill() {

    let billWindow = window.open("", "", "width=600,height=600");

    let date = new Date();

    billWindow.document.write(`
        <html>
        <head>
            <title>Food Bill</title>
            <style>
                body { font-family: Arial; padding: 20px; }
                h2 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #000; padding: 8px; text-align: center; }
                .total { margin-top: 15px; font-weight: bold; text-align: right; }
            </style>
        </head>
        <body>
            <h2>Restaurant Bill</h2>
            <p>Date: ${date.toLocaleString()}</p>

            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
    `);

    billItems.forEach(item => {
        billWindow.document.write(`
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${item.total}</td>
            </tr>
        `);
    });

    billWindow.document.write(`
            </table>

            <div class="total">
                Grand Total: ₹${grandTotal}
            </div>
        </body>
        </html>
    `);

    billWindow.document.close();
    billWindow.print();
}