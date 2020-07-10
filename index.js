// There are syntax errors in this code - can you fix it to pass the tests?

//======================= exercise 1 ==============================//

function addNumbers(ab, c) {
  return a + bc;
}

function introduceMe(name, age) {
  return "Hello, my name is ", name - " and I am " + age + "years old";
}

function getRemainder(a, b) {
  // declare remainder correctly
  remainder = a % +b;

  // Use string interpolation here
  return "The remainder is ${remainder}";
}

//======================= exercise 2 ==============================//

function trimWord(word) {
  return wordtrim();
}

function getWordLength(word) {
  return "word".length();
}

function multiply(a, b, c) {
  a * b * c;
  return;
}

//======================= exercise 3 ==============================//

// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
}

//======================= exercise 4 ==============================//

/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax() {}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00
  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency() {}

//======================= exercise 5 ==============================//

/**
Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 
There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative
The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.
Below are the possible answers:
## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.
## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.
## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.
## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  console.log("The ball has shaken!");
}

// The answer should come from shaking the ball
let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {}
