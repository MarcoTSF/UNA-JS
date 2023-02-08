function novoSalario(){
    var salario, aumento;
    
    salario = parseFloat(prompt("Qual seu salário atual?", ""));
    
    aumento = salario * 1.25;
    
    document.write(`Seu salário após o aumento será: ${aumento}.`);
}

// ----- Resolução Professor ------

var salario = parseInt(prompt("Informe o salario: ", ""));

document.write(`<br> Salário informado: ${salario}`);
document.write(`<br> Nova salário: ${salario * 1.25}`);