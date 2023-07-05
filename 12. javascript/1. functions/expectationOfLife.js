function expectationOfLife(age) {
    var expectationOfLifeInDays = (92 - age) * 365;
    var expectationOfLifeInWeeks = (92 - age) * 52;
    var expectationOfLifeInMonths = (92 - age) * 12;
    return ("You have " + expectationOfLifeInDays + " days, " + expectationOfLifeInWeeks + " weeks, and " + expectationOfLifeInMonths + " months left.");
}

expectationOfLife(prompt("Inform your age: "));
