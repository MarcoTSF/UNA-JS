var i, j, mat = [ [1, 2, 3], 
                  [4, 5, 6], 
                  [7, 8, 9] ];

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++){
        document.write(mat[i][j] + " ");
    }
        
    document.write("<br>");
}
    

// -------------------------------------------------


var i, j, mat = [ [], 
                  [], 
                  [] ];

//código para leitura:
for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
        mat[i][j] = parseInt(prompt("Informe o número: ", ""));
    }
    
}


//código para impressão:
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++){
        document.write(mat[i][j] + " ");
    }
    
    document.write("<br>");
}


// -------------------------------------------------------


function ler(m){ //m = mat2;
    //código para leitura:
    for (i = 0; i < 3; i++) 
      for (j = 0; j < 3; j++)
        m[i][j] = parseInt(prompt("Informe o número: ", ""));
}

function imprimir(m){ // m = mat2;
    //código para impressão:
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++)
        document.write(m[i][j] + " ");
        document.write("<br>");
    }
}

var i, j, mat1 = [ [], [], [] ], mat2 = [ [], [], [] ];

document.write("mat1:<br>");
ler(mat1);
imprimir(mat1);

document.write("mat2:<br>");
ler(mat2);
imprimir(mat2);


// ---------------------------------------------------------------


var i, j, mat1 = [ [], [], [] ], mat2 = [ [], [], [] ];
    
document.write("mat1:<br>");
//código para leitura:
for (i = 0; i < 3; i++) 
    for (j = 0; j < 3; j++)
        mat1[i][j] = parseInt(prompt("Informe o número: ", ""));

//código para impressão:
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++)
        document.write(mat1[i][j] + " ");
    document.write("<br>");
}
    
document.write("mat2:<br>");
//código para leitura:
for (i = 0; i < 3; i++) 
    for (j = 0; j < 3; j++)
        mat2[i][j] = parseInt(prompt("Informe o número: ", ""));

//código para impressão:
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++)
        document.write(mat2[i][j] + " ");
    document.write("<br>");
}


// ------------------------------------------------------------


function alocarMemoria(m, linhas, colunas){
    var i;
    for(i = 0; i < linhas; i++)
        m[i] = new Array(colunas);
}

function ler(m, lin, col){
    var i, j;
    for(i = 0; i < lin; i++)
        for(j = 0; j < col; j++)
        m[i][j] = parseInt(prompt("Informe um número:", ""));      
}

function imprimir(m, lin, col){
    var i, j;
    for(i = 0; i < lin; i++){
        for(j = 0; j < col; j++)
        document.write(mat[i][j] + " ");
        document.write("<br>");
    }
}

var i, j, linhas, colunas, mat = [ [] ];

linhas = parseInt(prompt("Informe a quantidade de linhas:", ""));
colunas = parseInt(prompt("Informe a quantidade de colunas:", ""));

alocarMemoria(mat, linhas, colunas);
ler(mat, linhas, colunas);
imprimir(mat, linhas, colunas);