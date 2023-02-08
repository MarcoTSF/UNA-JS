function calculateChange() {
    var purchaseValue = parseFloat(document.getElementById("compra").value);
    var paidValue = parseFloat(document.getElementById("pago").value);
    var change = paidValue - purchaseValue;
    var result = "";

    if (change < 0) {
        result = "A quantia paga é insuficiente para realizar a compra!";
    }
    else {
        result = "Troco: R$ " + change.toFixed(2) + "<br>";

        var notes50 = Math.floor(change / 50);
        change = change - (notes50 * 50);
        result += "Notas de R$ 50,00: " + notes50 + "<br>";

        var notes20 = Math.floor(change / 20);
        change = change - (notes20 * 20);
        result += "Notas de R$ 20,00: " + notes20 + "<br>";

        var notes10 = Math.floor(change / 10);
        change = change - (notes10 * 10);
        result += "Notas de R$ 10,00: " + notes10 + "<br>";

        var notes5 = Math.floor(change / 5);
        change = change - (notes5 * 5);
        result += "Notas de R$ 5,00: " + notes5 + "<br>";

        var notes2 = Math.floor(change / 2);
        change = change - (notes2 * 2);
        result += "Notas de R$ 2,00: " + notes2 + "<br>";

        var notes1 = Math.floor(change / 1);
        change = change - (notes1 * 1);
        result += "Notas de R$ 1,00: " + notes1 + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}