// Operadores de Soma e Subtração

var num = parseFloat(prompt("Informe o número", "")); //5
document.write(`Valor informado: ${num} <br>`); // 5
document.write(`Novo valor: ${++num} <br>`); // 6 - Posição do operador antes do uso
document.write(`Valor informado: ${num} <br>`); // 6

// document.write(`Valor informado: ${num} <br>`); // 5
// document.write(`Novo valor: ${num--} <br>`); // 5 - Posição do operador dps do uso
// document.write(`Valor informado: ${num} <br>`); // 4

var num = parseFloat(prompt("Informe o número", "")); // 7
document.write(`Valor informado: ${num} <br>`); // 7
num += 2;
document.write(`Novo valor: ${num} <br>`); // 9

// var num = parseFloat(prompt("Informe o número", "")); // 7
// document.write(`Valor informado: ${num} <br>`); // 7
// num -= 2;
// document.write(`Novo valor: ${num} <br>`); // 9

/* ------------------------------------------------------------------------------- */

// Operadores de Comparação

var num = 5, resp;
document.write(`Valor informado: ${num} <br>`);
resp = num == 5 // true (verdadeiro), false (falso) - Resp é igual a num se num for igual a 5
resp = num === '5' // Comparava o valor e tipo, vai dar falso por ser um caracter e não um inteiro
document.write(`resp: ${resp} <br>`);

/*
    1) Igual (==)
    Compara o valor, mas não compara o tipo (faz type cast, conversão de tipo)

    2) Idêntico (===)
    Compara o valor e também o tipo (não faz type cast)

    3) Diferente

    != não considera o tipo (faz type cast)
    !== considera o tipo (não faz type cast)
*/

/* ------------------------------------------------------------------------------- */

// Operadores Lógicos

/*
    Porta Not (Negação) = !

    Porta OR (ou) = || 
    Ex: 5 || 3 >= 10 - Resposta é falso, tanto 5 quanto 3 é menor (Leitura: 5 ou 3 é maior ou igual a 10)
    Ex: 5 || 12 >= 10 - Resposta é verdadeira, 12 é maior que 10 (Leitura: 5 ou 12 é maior ou igual a 10)

    Porta And = &&
    Ex: 5 && 3 >= 10 - Resposta é falso, tanto 5 quanto 3 é menor (Leitura: 5 e 3 é maior ou igual a 10)
    Ex: 5 && 12 >= 10 - Resposta é falso, o 12 é maior porém 5 é menor (Leitura: 5 e 12 é maior ou igual a 10)
*/