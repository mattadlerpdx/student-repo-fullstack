/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  //modulo input for each element in array until change === 0
  let coins = 0;

  //use outputArray to output correct amounts
  let outputArray = [0, 0, 0, 0, 0];
  const coinArray = [1, 0.25, 0.1, 0.05, 0.01];
  change = Number(input);

  if (change > 10) {
    console.log("Error: the number is too large");
  } else {
    let i = 0;
    while (i < 5) {
      console.log("index:", i);
      if (change > coinArray[i]) {
        //get denomination
        coins = Math.floor(change / coinArray[i]);
        //store denominations
        outputArray[i] = coins;
        //get next largest denomination
        change = change % coinArray[i];
      } else {
        i += 1;
      }
    }
  }
  consoleOutput(outputArray);
};

const consoleOutput = (coinArray) => {
  dollar = dollarOutput(coinArray[0]);
  quarter = quarterOutput(coinArray[1]);
  dime = dimeOutput(coinArray[2]);
  nickel = nickelOutput(coinArray[3]);
  penny = pennyOutput(coinArray[4]);

  console.log(`${dollar} ${quarter} ${dime} ${nickel} ${penny}`);
};
const dollarOutput = (input) => {
  if (input === 0) {
    return null;
  } else if (input === 1) {
    return "1 dollar";
  } else {
    return `${input} dollars`;
  }
};
const quarterOutput = (input) => {
  if (input === 0) {
    return null;
  } else if (input === 1) {
    return "quarter";
  } else {
    return `${input} quarters`;
  }
};

const dimeOutput = (input) => {
  if (input === 0) {
    return null;
  } else if (input === 1) {
    return "1 dime";
  } else {
    return `${input} dimes`;
  }
};

const nickelOutput = (input) => {
  if (input === 0) {
    return;
  } else if (input === 1) {
    return "1 nickel";
  } else {
    return `${input} nickels`;
  }
};
const pennyOutput = (input) => {
  if (input === 0) {
    return null;
  } else if (input === 1) {
    return "1 penny";
  } else {
    return `${input} pennies`;
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
//console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
//console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
