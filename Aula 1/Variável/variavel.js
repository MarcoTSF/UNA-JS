function responder(){
    var resp = confirm("Deseja sair do curso?");

    if(resp == true){
        alert("\n\nAdeus! \n\nAté outro dia!");
        window.location = "https://www.google.com/";
    }
    else{
        alert("Muito obrigado por permanecer no curso!");
    }
}