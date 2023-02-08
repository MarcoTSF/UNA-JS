function hipotenusa(){
    var catetoA, catetoO, resultado;
    
    catetoA = parseFloat(prompt("Valor do Cateto Adjacente:", ""));
    catetoO = parseFloat(prompt("Valor do Cateto Oposto:", ""));
    
    resultado = (catetoA ** 2) + (catetoO ** 2);
    
    document.write(`O valor da Hipotenusa é: ${resultado}.`);
}

// ----- Resolução Professor ------

var b = parseFloat(prompt("Informe o cateto adjacente: ", "")),
c = parseFloat(prompt("Informe o cateto oposto: ", "")),
a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
    
document.write(`<br> Cateto adjacente = ${b} <br>`);
document.write(`<br> Cateto oposto = ${c} <br>`);
document.write(`<br> hipotenusa = ${a}`);