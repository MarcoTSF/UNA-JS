function temperatura(){
    var celsius, fahrenheit;
    
    celsius = parseFloat(prompt("Qual a temperatura em graus Celsius?", ""));
    
    fahrenheit = (celsius * 1.8) + 32;
    
    document.write(`A temperatura em Fahrenheit é: ${fahrenheit}°.`);
}