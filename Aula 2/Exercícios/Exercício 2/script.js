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