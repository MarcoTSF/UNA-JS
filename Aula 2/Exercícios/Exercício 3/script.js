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