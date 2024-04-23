function fibonacciSequence(numbersItensOfTheSequence) {
    var sequenceArray = [];
    if (numbersItensOfTheSequence >= 1) {
        sequenceArray.push(0);
    }
    if (numbersItensOfTheSequence >= 2) {
        sequenceArray.push(1);
    }
    if (numbersItensOfTheSequence >= 3) {
        for (var i = 2; i < numbersItensOfTheSequence; i++) {
            var a = sequenceArray[i - 1];
            var b = sequenceArray[i - 2];
            sequenceArray.push(a + b);
        }
    }
    alert("The Fibonacci sequence is: " + sequenceArray);
}

fibonacciSequence(prompt("Insert the number of Fibonacci sequence items: "));
