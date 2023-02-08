function resultados(){
    var raio, comprimento, area, volume, pi;
    
    raio = parseFloat(prompt("Informe o valor do raio:", ""));
    
    pi = 3.14159265359;
    
    comprimento = 2 * pi * raio;
    
    area = pi * (raio ** 2)
    
    volume = (3/4) * pi * (raio ** 3)
    
    document.write(`O valor do comprimento é: ${comprimento.toFixed(2)}<br>`);
    document.write(`<br>O valor da área é: ${area.toFixed(2)}<br>`);
    document.write(`<br>O valor da volume é: ${volume.toFixed(2)}`);
}

// ----- Resolução Professor ------

var raio = parseFloat(prompt("Informe o raio: ", ""));

document.write(`<br> Comprimento = ${2 * Math.PI * raio} <br>`);
document.write(`<br> Área = ${Math.PI * Math.pow(raio, 2)} <br>`);
document.write(`<br> Volume = ${3/4 * Math.PI * Math.pow(raio, 3)}`);