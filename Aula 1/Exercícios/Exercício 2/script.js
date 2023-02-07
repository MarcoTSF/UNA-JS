function novoSalario(){
    var salario, aumento;
    
    salario = parseFloat(prompt("Qual seu salário atual?", ""));
    
    aumento = salario * 1.25;
    
    document.write(`Seu salário após o aumento será: ${aumento}.`);
}