function calculateResult() {
    var x = parseFloat(document.getElementById("input").value);
    var result;

    if (x < -2) {
      result = 2 * x + 2;
    }
    else if (x >= -2 && x < 3) {
      result = 3;
    }
    else {
      result = -x;
    }

    document.getElementById("result").innerHTML = "Resultado: " + result;
}


// --------- Correção do Professor -----------


var x = parseFloat(prompt("Informe o valor de x", ""));

if (x < -2) {
  document.write(`f(${x}) = 2 * (${x}) + 2 = ${2 * x + 2}`);
}
else if (x >= -2 && x < 3) {
  document.write(`f(${x}) = 3`);
}
else {
  document.write(`f(${x}) = -(${x}) = ${-x}`);
}