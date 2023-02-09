var resp, cont = 0,
    limite = parseInt(prompt("Informe o limite de execuções:", ""));

while (cont < limite) {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    cont++;
}


// ----------------------- Confirmação String ----------------------------


var resp, confirmacao = 's';

while (confirmacao.toLowerCase() == 's' || confirmacao.toLowerCase() == 'sim') {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    confirmacao = prompt("Deseja executar novamente? (s / n)", "");
}


// ----------------------- Confirmação Booleana ----------------------------


var resp, confirmacao = true;

// while (confirmacao == true) {
while (confirmacao) {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    confirmacao = confirm("Deseja executar novamente? (s / n)");
}