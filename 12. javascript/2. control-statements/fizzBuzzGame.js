var numbers = [];

for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}

numbers.forEach(e => {
    if (e % 3 === 0 && e % 5 === 0) {
        console.log("FizzBuzz");
    } else if (e % 3 === 0) {
        console.log("Fizz");
    } else if (e % 5 === 0) {
        console.log("Buzz" )
    } else {
        console.log(e);
    }
});

/* Observation!
To remove item from array, use the command pop.
*/
