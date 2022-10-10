/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  //modulo input for each element in array until change === 0
  var coins = 0;
  var i = 0;
  //use outputArray to output correct amounts
  var outputArray = [0, 0, 0, 0, 0];
  const coinArray = [1, 0.25, 0.1, 0.05, 0.01];
  change = Number(input);
  if (change > 10) {
    console.log("Error: the number is too large");
  } else {
    for (var i = 0; i < 5; i += 1) {
      console.log("index:", i);
      if (change < coinArray[i]) {
        //if change is less than current index value go to nex index
        i += 1;
      } else {
        //get denomination
        coins = Math.floor(change / coinArray[i]);
        //console.log(coins);
        //store denominations
        outputArray[i] = coins;
        console.log(outputArray[i]);
        //get next largest denomination
        change = change % coinArray[i];
      }
    }
  }
};

// Sample Test Cases
//console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
//console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
//console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
