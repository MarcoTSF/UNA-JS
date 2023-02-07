var num1, num2, resp;

num1 = parseFloat(prompt("Informe o primeiro número:", ""));
num2 = parseFloat(prompt("Informe o segundo número:", ""));

resp = num1 + num2;
document.write(`<br>${num1} + ${num2} = ${resp}`);

resp = num1 - num2;
document.write(`<br>${num1} - ${num2} = ${resp}`);

resp = num1 * num2;
document.write(`<br>${num1} * ${num2} = ${num1 * num2}`);

resp = num1 / num2;
document.write(`<br>${num1} / ${num2} = ${num1 / num2}`);