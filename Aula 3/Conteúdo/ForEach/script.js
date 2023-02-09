/*
    var resp;
    const nomes = ["Ana", "Beatriz", "Carlos"];

    console.log(`resp: ${resp}`);
    console.log(`nomes: ${nomes}`);

    resp = nomes.forEach(function (nome, pos) {
        nome += " Silva";
        console.log(pos, nome);
        return nome;
    });

    console.log(`resp: ${resp}`);
    console.log(`nomes: ${nomes}`);
*/


// ----------- Arrow Function -----------

/*
    var resp;
    const nomes = ["Ana", "Beatriz", "Carlos"];

    console.log(`resp: ${resp}`);
    console.log(`nomes: ${nomes}`);

    resp = nomes.forEach((nome, pos) => {
        nome += " Silva";
        console.log(pos, nome);
        return nome;
    });

    console.log(`resp: ${resp}`);
    console.log(`nomes: ${nomes}`);
*/


// Map (Armazena o que foi processado no escopo da estrutura de repetição)

var resp;
const nomes = ["Ana", "Beatriz", "Carlos"];

console.log(`resp: ${resp}`);
console.log(`nomes: ${nomes}`);

resp = nomes.map((nome, pos) => {
    nome += " Silva";
    console.log(pos, nome);
    return nome;
});

console.log(`resp: ${resp}`);
console.log(`nomes: ${nomes}`);