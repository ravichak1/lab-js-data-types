/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// Print out the concatenated string
console.log(`${s1} ${s2} ${s3} ${s4} ${s5}`);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
// let lastchar1 = part1[part1.length -1].toUpperCase();
// let lastchar2 = part2[part2.length -1].toUpperCase();

// let rmLastChar1 = part1.slice(0,part1.length-1);
// let rmLastChar2 = part2.slice(0,part2.length-1);

// let newName1 = rmLastChar1 + lastchar1;
// let newName2 = rmLastChar2 + lastchar2;

function cameLtaiL(name) {
  let lastchar = name[name.length - 1].toUpperCase();

  let rmLastChar = name.slice(0, name.length - 1);

  let newName = rmLastChar + lastchar;

  return newName;
}
const newName1 = cameLtaiL(part1);
const newName2 = cameLtaiL(part2);
// Print the cameLtaiL-formatted string

console.log(`${newName1}${newName2}`);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calcTip(bill, tipPercentage) {
  let tip = (bill / 100) * tipPercentage;

  return tip;
}

const tip = calcTip(billTotal, 15);

// Print out the tipAmount

console.log(tip);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomInt = Math.floor(Math.random() * 10) + 1;

// Print the generated random number
console.log(randomInt);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; //true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);
