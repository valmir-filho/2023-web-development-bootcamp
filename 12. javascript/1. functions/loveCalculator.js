function loveCalculator(name1, name2) {
    var matchPercent = Math.floor(Math.random() * 100) + 1;
    return alert("Match percent = " + matchPercent + "%");
}

loveCalculator(prompt("Input the name 1: "), prompt("Input the name 2: "));
