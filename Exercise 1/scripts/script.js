// Function to throw dice
const throwDice = () => {
    // Initialise array of counters
    let counters = [0,0,0,0,0,0,0,0,0,0,0];
    
    // Loop 36.000 times
    for(let i = 0; i < 36000; i++){
        // Generate numbers between 1 and 6 for two dices
        let n1 = Math.floor(Math.random() * 6) + 1;
        let n2 = Math.floor(Math.random() * 6) + 1;
        // Get the sum
        let sum = n1 + n2;
        // Adds to the counter the number of times the sum happened
        counters[sum-2] += 1;
    }

    // Prints the number of times each sum happened
    for (let i = 0; i < counters.length; i++) {
        console.log("The number of times that the sum of the dice was "+(i+2)+" was: "+counters[i]);
    }
}

throwDice();