function bottlesOfBeerSong() {
    var numberOfBeers = 99;
    while (numberOfBeers >= 0) {
        if (numberOfBeers === 2) {
            console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer.");
            console.log("Take one down and pass it around, " + (numberOfBeers - 1) + " bottle of beer on the wall.");
        } else if (numberOfBeers === 1) { 
            console.log(numberOfBeers + " bottle of beer on the wall, " + numberOfBeers + " bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else if (numberOfBeers === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else {
            console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer.");
            console.log("Take one down and pass it around, " + (numberOfBeers - 1) + " bottles of beer on the wall.");
        }
        numberOfBeers--;
    }
}

bottlesOfBeerSong();
