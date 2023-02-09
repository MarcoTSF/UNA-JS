var confirmacao = 's';

while (confirmacao.toLowerCase() == 's' || confirmacao.toLowerCase() == 'sim') {
  var valorCompra = parseInt(prompt("Informe o valor da compra:", ""));
  var valorPago = parseInt(prompt("Informe o valor pago:", ""));
  var troco = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0;
  
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

    alert("Resultado:\n\n" +
    "Valor da Compra: R$ " + valorCompra + "\n" + 
    "Valor Pago: R$ " + valorPago + "\n" + 
    "Troco: R$ " + (valorPago - valorCompra) + "\n\n" + 
    "Notas de R$ 50,00: " + notas50 + "\n" + 
    "Notas de R$ 20,00: " + notas20 + "\n" + 
    "Notas de R$ 10,00: " + notas10 + "\n" + 
    "Notas de R$ 5,00: " + notas5 + "\n" + 
    "Notas de R$ 2,00: " + notas2 + "\n" + 
    "Notas de R$ 1,00: " + troco);
  }
  else {
    document.getElementById("resultado").innerHTML = "A quantia paga é insuficiente para realizar a compra.";
  }

  confirmacao = prompt("Deseja executar novamente? (s / n)", "");
}