function whosPaying() {
    var names = [];
    var flag = 1;
    while (flag != 0) {
        var name = prompt("Enter a name, leave blank to finish: ");
        if (name === "") {
            flag = 0;    
        } else {
            names.push(name);
        }
    }
    if (names.length > 0) {   
        var randomIndex = Math.floor(Math.random() * names.length);
        alert(names[randomIndex] + " pay the bill today!");
    } else {
        alert("Error! Insert at least one name.");
    }
}

whosPaying();
