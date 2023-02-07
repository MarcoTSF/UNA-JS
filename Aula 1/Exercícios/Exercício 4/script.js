function media(){
    var nota1, nota2, nota3, resultado;
    
    nota1 = parseFloat(prompt("Informe a primeira nota:", ""));
    nota2 = parseFloat(prompt("Informe a segunda nota:", ""));
    nota3 = parseFloat(prompt("Informe a terceira nota:", ""));
    
    resultado = (nota1 + nota2 + nota3) / 3;
    
    document.write(`A média aritmética das notas informadas é: ${resultado}.`);
}