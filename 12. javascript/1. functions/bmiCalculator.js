function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / height**2);
    return "Your BMI is: " + bmi
}

bmiCalculator(prompt("Input your weight in kg: "), prompt("Input your height in meters: "));
