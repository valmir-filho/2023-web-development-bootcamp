function bmiCalculator (weight, height) {
    var formula = Math.round(weight / Math.pow(height, 2));
    if (formula < 18.5) {
        return "Your BMI is " + formula + ", so you are underweight.";    
    } else if (formula >= 18.5 && formula <= 24.9) {
        return "Your BMI is " + formula + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + formula + ", so you are overweight.";
    }
    
}

bmiCalculator(45, 1.70);
