var resp;

do {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);
}
while (confirm("Deseja executar novamente?"));


// --------- Usando String ----------


var resp, confirmacao = 's';

do {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    confirmacao = prompt("Deseja executar novamente? (s / n)", "");
}
while (confirmacao.toLowerCase() == 's' || confirmacao.toLowerCase() == 'sim');


// ------------- Usando Limitador ----------------


var resp, cont = 0,
    limite = parseInt(prompt("Informe o limite de execuções:", ""));

do {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    cont++;
}
while (cont < limite);