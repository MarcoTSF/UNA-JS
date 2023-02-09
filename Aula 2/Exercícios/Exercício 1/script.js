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



// ----------- Correção do Professor -----------



var valorCompra = parseFloat(prompt("Informe o valor da compra", "")),
    valorPago = parseFloat(prompt("Informe o valor pago", "")),         
    troco = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0;

if (valorCompra <= valorPago) {
    troco = valorPago - valorCompra;

    notas50 = parseInt(troco / 50);
    troco %= 50;

    notas20 = parseInt(troco / 20);
    troco %= 20;

    notas10 = parseInt(troco / 10);
    troco %= 10;

    notas5 = parseInt(troco / 5);
    troco %= 5;

    notas2 = parseInt(troco / 2);
    troco %= 2;

    document.write(`
        Valor pago: ${valorPago} <br>
        Valor compra: ${valorCompra} <br>
        Troco: ${valorPago - valorCompra} <br>

        Notas de R$ 50,00: ${notas50} <br>
        Notas de R$ 20,00: ${notas20} <br>
        Notas de R$ 10,00: ${notas10} <br>
        Notas de R$ 5,00: ${notas5} <br>
        Notas de R$ 2,00: ${notas2} <br>
        Notas de R$ 1,00: ${troco} <br>
    `);
}
else {
    document.write("A quantia paga é insuficiente para realizar a compra.");
}