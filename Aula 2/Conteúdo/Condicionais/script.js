var num = parseInt(prompt("Informe o número", ""));

if (num % 2 == 0) {
    document.write(`O número ${num} é par!`);
}
else {
    document.write(`O número ${num} é ímpar!`);
}


// ----- Segundo método -----


var resp = "ímpar", num = parseInt(prompt("Informe o número", ""));

if (num % 2 == 0) {
    resp = "par";   
}
document.write(`O número ${num} é ${resp}!`);


// ----- Terceiro método - Operador Ternário -----


var resp = "ímpar", num = parseInt(prompt("Informe o número", ""));
 
resp = (num % 2 == 0) ? "par" : "ímpar";
     
document.write(`O número ${num} é ${resp}!`);


// ----- Quarto método - Switch -----


var fruta = prompt("Informe a fruta", "");
     
switch(fruta.toLowerCase()){
    case "laranja":
        console.log("As laranjas custam R$ 3.50 o quilo.");
        break;
    case "cereja":
        console.log("As cerejas custam R$ 8.50 o quilo.");
        break;
    case "manga":
    case "mamão":
        console.log("Mangas e mamões custam R$ 4.79 o quilo.");
        break;
    default:
        console.log(`Desculpe-nos, não temos ${fruta}.`);
}
     
document.write(`Fim do processamento!`);