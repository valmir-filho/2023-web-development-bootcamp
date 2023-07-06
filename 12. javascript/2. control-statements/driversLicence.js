function driversLicence (age, evaluationApproved) {
    if (age >= 18 && evaluationApproved === "Yes") {
        return alert("Congrats! You can drive!");
    } else if (age < 18 && evaluationApproved === "No") {
        return alert("Sorry! You can't drive...:/");
    } else {
        return alert("You need to have more than 18 years old or must pass the exam.");
    }
}

driversLicence(prompt("Inform your age: "), prompt("Did you pass the exam?"));

/* Observations!
&& and
|| or
! not
*/
