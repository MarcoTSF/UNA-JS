/*
    function mensagem() {
        var nomeUsuario = document.getElementById("nome").value;
        document.getElementById("resp").innerHTML = "<br>Olá, " + nomeUsuario + "!";
    }


    function mensagem(){
        resp.innerHTML = "<br>Olá, " + nome.value + "!";
        resp.innerHTML = "<br>Olá, " + nome.value + "!";
    }
*/
function mensagem() {
    var nomeUsuario = nome.value;

    resp.innerHTML = "<br>Olá, " + nomeUsuario.toLowerCase() + "!";
    resp.innerHTML += "<br>Olá, " + nomeUsuario.toUpperCase() + "!";
    resp.innerHTML += "<br>Número de caracteres informados: " + nomeUsuario.length;
    resp.innerHTML += "<br>Caracter da posição 1: " + nomeUsuario.charAt(1);

    var num = 5;
    num += 2;
    resp.innerHTML += "<br><br>num: " + num;
}
