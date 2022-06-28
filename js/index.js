console.log("hola");
// Iteration 1: Names and Input
let hacker1 = "Paco";
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Robert";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
// 3.1
let driverNameCapitals = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperName = hacker1.toUpperCase();
  console.log(upperName);
}

// 3.2

let nameReversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReversed = nameReversed + hacker1[i];
}
console.log(nameReversed);

// 3.3

let largeWord = "";
if (hacker1.length >= hacker2.length) {
  largeWord = hacker1;
} else {
  largeWord = hacker2;
}
for (let i = 0; i < largeWord.length; i++) {
  if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
    break;
  } else if (hacker1 < hacker2) {
    console.log(`The driver ${hacker1} goes first.`);
    break;
  } else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  }
}
