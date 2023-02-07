function responder(){
  var anoNascimento, anoAtual, idadeAtual, idadeFuturo;
    
  anoNascimento = parseFloat(prompt("Em que ano você nasceu?", ""));
  anoAtual = parseFloat(prompt("Em que ano estamos?", ""));
    
  var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
    
  dataFinal = diaF + "/" + mesF + "/" + anoF;
  
  idadeAtual = anoAtual - anoNascimento;
  idadeFuturo = 2050 - anoNascimento;
    
  document.write(`Idade atual se nasceu até ${dataFinal}:<br>${idadeAtual}.<br>`);
  document.write(`<br>Idade atual se nasceu depois de ${dataFinal}:<br>${idadeAtual - 1}.<br>`);
    
  document.write(`<br>Idade que terá em 2050 se nasceu até ${dataFinal}:<br>${idadeFuturo}.<br>`);
  document.write(`<br>Idade que terá em 2050 se nasceu depois de ${dataFinal}:<br>${idadeFuturo - 1}.`);
}