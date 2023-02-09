function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var imc = peso / (altura ** 2);
  var situacao = "";
    
  if (imc < 20) {
    situacao = "Abaixo do Peso";
  }
  else if (imc >= 20 && imc <= 25) {
    situacao = "Normal";
  }
  else if (imc > 25 && imc <= 30) {
    situacao = "Sobrepeso";
  }
  else if (imc > 30 && imc <= 35) {
    situacao = "Obesidade grau I";
  }
  else if (imc > 35 && imc <= 40) {
    situacao = "Obesidade grau II";
  }
  else {
    situacao = "Obesidade grau III";
  }
  
  document.getElementById("resultado").innerHTML = "IMC: " + imc + "<br> Situação: " + situacao;
}


// --------- Correção do Professor -----------


var peso = parseFloat(prompt("Informe o peso", "")),
  altura = parseFloat(prompt("Informe a altura", "")),  
  imc = peso / (altura ** 2); //imc = peso / Math.pow(altura, 2);

document.write(`IMC = ${peso} / ${altura} ^ 2 = ${imc.toPrecision(5)} <br><br>Situação:<br>`);

if (imc < 20) {
  document.write("Indivíduo abaixo do peso.");
}
else if (imc >= 20 && imc < 25) {
  document.write("Indivíduo com peso normal.");
}
else if (imc >= 25 && imc < 30) {
  document.write("Indivíduo com sobrepeso.");
}
else if (imc >= 30 && imc < 35) {
  document.write("Indivíduo com obesidade grau I.");
}
else if (imc >= 35 && imc < 40) {
  document.write("Indivíduo com obesidade grau II.");
}
else {
  document.write("Indivíduo com obesidade grau III.");
}