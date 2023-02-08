function temperatura(){
    var celsius, fahrenheit;
    
    celsius = parseFloat(prompt("Qual a temperatura em graus Celsius?", ""));
    
    fahrenheit = (celsius * 1.8) + 32;
    
    document.write(`A temperatura em Fahrenheit é: ${fahrenheit}°.`);
}

// ----- Resolução Professor ------

var celsius = parseInt(prompt("Informe a temperatura em Celsius: ", "")),
fahrenheit = celsius * 1.8 + 32;

document.write(`<br> Temperatura em Celsius: ${celsius}`);
document.write(`<br> Temperatura em Fahrenheit: ${fahrenheit}`);