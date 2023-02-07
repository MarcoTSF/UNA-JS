var num1, num2, soma;

num1 = prompt("Informe o primeiro número:", "");
// Type Cast (conversão de tipo):
num1 = parseFloat(num1);


num2 = prompt("Informe o segundo número", "");
num2 = parseFloat(num2);

soma = num1 + num2; // Concatenação

document.write(`${num1} + ${num2} = ${soma}`);