var i, a = new Array();
a[0] = 'vermelho';
a[1] = 'azul';

document.write("<br>Vetor:<br>");
document.write(a);
document.write("<br>Vetor:<br>");

for (i = 0; i < a.length; i++){
    document.write(`a[${i}] = ${a[i]}<br>`);
}

/*
    Outro método (Ler documentação README.md para entender):

    var i, a = ['vermelho', 'azul'];

    document.write("<br>Vetor:<br>");
    document.write(a);
    document.write("<br>Vetor:<br>");
    
    for (i = 0; i < a.length; i++){
        document.write(`a[${i}] = ${a[i]}<br>`);
    }
*/

// -------------------------------------------------------------------

var i, a = new Array(2); // tamanho do vetor
document.write("<br>Vetor:<br>");
document.write(a);

a[0] = 'vermelho';
a[1] = 'azul';

document.write("<br>Vetor:<br>");
document.write(a);
document.write("<br>Vetor:<br>");

for (i = 0; i < a.length; i++){
    document.write(`a[${i}] = ${a[i]}<br>`);
}

// -------------------------------------------------------------------

var i, a = new Array(2, 3, 4); //Elementos do vetor.

document.write("<br>Vetor:<br>");
document.write(a);
document.write("<br>Vetor:<br>");

for (i = 0; i < a.length; i++){
    document.write(`a[${i}] = ${a[i]}<br>`);
}