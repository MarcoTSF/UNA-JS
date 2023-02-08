function calcularSalario() {
    var codigo = parseInt(document.getElementById("codigo").value);
    var horasTrabalhadas = parseFloat(document.getElementById("horas").value);
    var valorHora;
    var nome;

    if (horasTrabalhadas < 0) {
        document.getElementById("resultado").innerHTML = "Horas trabalhadas inválidas";
        return;
    }

    switch (codigo) {
        case 1:
            valorHora = 45.78;
            nome = "Ana";
            break;
        case 2:
            valorHora = 60.00;
            nome = "Bruna";
            break;
        case 3:
            valorHora = 38.99;
            nome = "Carlos";
            break;
        case 4:
            valorHora = 45.78;
            nome = "Diogo";
            break;
        case 5:
            valorHora = 45.78;
            nome = "Ester";
            break;
        default:
            valorHora = 0;
            nome = "Não encontrado";
    }

    var salarioBruto = horasTrabalhadas * valorHora;

    document.getElementById("resultado").innerHTML = "Nome: " + nome + "<br> Valor da hora: R$ " + valorHora.toFixed(2) + "<br> Salário bruto: R$ " + salarioBruto.toFixed(2);
}