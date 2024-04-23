function verifyGuestInArray(name) {
    var guestListArray = ["Audi", "Valmir", "Eduardo", "Marcia", "Silvia"];
    if (guestListArray.includes(name)) {
        alert("Welcome to the Party!");
    } else {
        alert("Sorry! You were'nt invited :(");
    }
}

verifyGuestInArray(prompt("Tell me you name: "));
