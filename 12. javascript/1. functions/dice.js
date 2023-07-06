function dice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return alert("Number drawn on the dice: " + randomNumber);
}

dice(prompt("Press Enter to roll the dice: "));
