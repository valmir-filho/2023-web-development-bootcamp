function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return alert(year + " is a leap year.");    
            } else {
                return alert(year + " isn't a leap year.");
            }
        } else {
            return alert(year + " is a leap year.");
        }
    } else {
        return alert(year + " isn't a leap year.");
    }
}

leapYear(prompt("Insert a year to verify if is a leap year: "));
