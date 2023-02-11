function storeNumbers() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const num5 = parseInt(document.getElementById("num5").value);
    const num6 = parseInt(document.getElementById("num6").value);
    const num7 = parseInt(document.getElementById("num7").value);
    const num8 = parseInt(document.getElementById("num8").value);
    const num9 = parseInt(document.getElementById("num9").value);
    const num10 = parseInt(document.getElementById("num10").value);
    const numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
  
    let negativeNumbersCount = 0;
    const oddNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeNumbersCount++;
      }
      if (i % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
  
    document.getElementById("negativeNumbersCount").innerHTML = negativeNumbersCount;
  
    const oddNumbersList = document.getElementById("oddNumbers");
    oddNumbers.forEach(function (oddNumber) {
      const item = document.createElement("li");
      item.innerHTML = oddNumber;
      oddNumbersList.appendChild(item);
    });
}
  