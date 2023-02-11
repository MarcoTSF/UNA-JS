function criarMatriz() {
    var matriz = [];
    for (var i = 0; i < 4; i++) {
        matriz[i] = [];
        for (var j = 0; j < 4; j++) {
            matriz[i][j] = parseInt(prompt("Informe um número:"));
        }
    }
    return matriz;
}

function mostrarMatriz(matriz) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            document.write(matriz[i][j] + " ");
        }
        document.write("<br>");
    }
}

function mostrarDiagonalPrincipal(matriz) {
    document.write("Números na diagonal principal: ");
    for (var i = 0; i < 4; i++) {
        document.write(matriz[i][i] + " ");
    }
    document.write("<br>");
}

function mostrarDiagonalSecundaria(matriz) {
    document.write("Números na diagonal secundária: ");
    for (var i = 0; i < 4; i++) {
        document.write(matriz[i][3-i] + " ");
    }
    document.write("<br>");
}

function mostrarLinhasPares(matriz) {
    document.write("Números nas linhas pares: ");
    for (var i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < 4; j++) {
                document.write(matriz[i][j] + " ");
            }
        }
    }
    document.write("<br>");
}

function mostrarQuadradoColunasImpares(matriz) {
    document.write("Quadrado dos números nas colunas ímpares: ");
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (j % 2 != 0) {
                document.write(matriz[i][j] * matriz[i][j] + " ");
            }
        }
    }
    document.write("<br>");
}

var matriz = criarMatriz();
document.write("Matriz informada: <br>");
mostrarMatriz(matriz);
mostrarDiagonalPrincipal(matriz);
mostrarDiagonalSecundaria(matriz);
mostrarLinhasPares(matriz);
mostrarQuadradoColunasImpares(matriz);