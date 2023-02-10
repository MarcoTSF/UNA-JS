function showNumbersInOrder() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let numbers = [];
    let num;
    let largest = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= quantity; i++) {
        num = parseFloat(prompt("Informe o número " + i + ":"));
        numbers.push(num);
        
        if (num > largest) {
            largest = num;
        }
    }

    numbers.sort(function (a, b) { return a - b });
    
    document.getElementById("result").innerHTML = "Os números informados em ordem são: " + numbers.join(", ") + "<br><br>O maior número informado é: " + largest;
}


// ------------- Correção do Professor ----------------


var num = parseFloat(prompt("Informe o número:", "")), maior = num;

while(confirm("Deseja informar outro número?")){
    num = parseFloat(prompt("Informe o número:", ""));
    if (num > maior)
    maior = num;
}

alert("Maior: " + maior);