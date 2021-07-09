// Q1) FizzBuzz

for (let i = 1; i <= 100; i++) {
  if ((i - (15 * parseInt(i / 15))) == 0) {
    console.log("FizzBuzz");
  } else if ((i - (5 * parseInt(i / 5))) == 0) {
    console.log("Buzz");
  } else if ((i - (3 * parseInt(i / 3))) == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Q2) count the palindrome in the whole String. 

let s = "madam is walking with maam on the street "; //example string

let org = "";
let rev = "";
let c = 0;  //number of palindrome strings

for (let t of s) {
  if (t != " ") {
    org = org + t;
    rev = t + rev;
  }
  else if (org == rev) {
    console.log(++c, "Palindrome string is: ", org);
    org = "";
    rev = "";
  }
  else {
    org = "";
    rev = "";
  }
}
console.log("Total number of palindrome strings in the whole string is:", c);