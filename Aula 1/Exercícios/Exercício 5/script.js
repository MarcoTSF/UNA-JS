function hipotenusa(){
    var catetoA, catetoO, resultado;
    
    catetoA = parseFloat(prompt("Valor do Cateto Adjacente:", ""));
    catetoO = parseFloat(prompt("Valor do Cateto Oposto:", ""));
    
    resultado = (catetoA ** 2) + (catetoO ** 2);
    
    document.write(`O valor da Hipotenusa é: ${resultado}.`);
}