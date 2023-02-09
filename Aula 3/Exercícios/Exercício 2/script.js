function calculateAverage() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let sum = 0;
    let num;

    for (let i = 1; i <= quantity; i++) {
        num = parseFloat(prompt("Informe o número " + i + ":"));
        sum += num;
    }
    let average = sum / quantity;
    
    document.getElementById("result").innerHTML = "A média dos números informados é: " + average;
}