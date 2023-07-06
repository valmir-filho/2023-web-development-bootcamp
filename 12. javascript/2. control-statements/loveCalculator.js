function loveCalculator(name1, name2) {
    var matchPercent = Math.floor(Math.random() * 100) + 1;
    if (matchPercent >= 80) {
    return alert("Match percent = " + matchPercent + "%. Love's in the air!");    
    } else if (matchPercent >= 40) {
        return alert("Match percent = " + matchPercent + "%. Attention...look better!");
    } else {
        return alert("Match percent = " + matchPercent + "%. Run!!!!");
    }
    
}

loveCalculator(prompt("Input the name 1: "), prompt("Input the name 2: "));
