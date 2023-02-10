// ---------- Correção do Professor ------------


do {
    var a, b, c, delta, x1, x2;

    a = parseFloat(prompt("Informe o coeficiente a:", ""));
    b = parseFloat(prompt("Informe o coeficiente b:", ""));
    c = parseFloat(prompt("Informe o coeficiente c:", ""));

    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                alert("Igualdade confirmada: 0 = 0");
            }
            else {
                alert("Coeficientes informados incorretamente");
            }
        }
        else {
            alert(`Esta é uma equação do primeiro grau. \nRaiz da equação: x = ${-c / b}`);
        }
    }
    else {
        var resp = "\nEsta é uma equação do segundo grau!";    

        delta = Math.pow(b, 2) - 4 * a * c;

        if (delta < 0) {
            resp += `\nEsta equação não possui raízes reais (delta = ${delta} < 0).`;
        }
        else {
            if (delta == 0) {
                resp += `\nEsta equação possui apenas uma raiz real (delta = ${delta}).`;
                resp += `\nx = ${-b / (2 * a)}`;
            }
            else {
                resp += `\nEsta equação possui duas raízes reais (delta = ${delta}).`;

                resp += `\nx'  = ${(-b + Math.sqrt(delta)) / (2 * a)}`;
                resp += `\nx'' = ${(-b - Math.sqrt(delta)) / (2 * a)}`;
            } 
        }
      alert(resp);
    }
}
while (confirm("Deseja executar novamente?"));