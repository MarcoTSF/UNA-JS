// -------- Usando Limitador ---------

var resp, i,
    limite = parseInt(prompt("Informe o limite de execuções:", ""));

for (i = 0; i < limite; i++) {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);
}


// -------- Looping Infinito ---------


var resp;

for (var confirmacao = 's'; confirmacao.toLowerCase() == 's' || confirmacao.toLowerCase() == 'sim';) {
    var num = parseInt(prompt("Informe o número:", ""));
    resp = (num % 2 == 0) ? "par" : "ímpar";
    alert(`O número ${num} é ${resp}!`);

    confirmacao = prompt("Deseja executar novamente? (s / n)", "");
}