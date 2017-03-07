var cOne = "queen";
var cTwo = "queen";
var cThree = "king";
var cFour = "king";

console.log("User flipped " + cOne);

var max = 5;
var result;

for (var i = 1; i <= max; i++) {
    var f = i % 3 == 0;
    var b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

var cups = 0;

while (cups < 33) {
    console.log("b");
    cups = cups + 1;
}

// If x is evenly divisible by both 3 and 5 (for example, 15 or 30), set result to "fizzbuzz".
// Otherwise if x is evenly divisible by 3 (for example, 3, 6, or 9), set result to "fizz".
// Otherwise if x is evenly divisible by 5 (for example, 5 or 10), set result to "buzz".
// If x is not evenly divisible by either 3 or 5 (for example, 7), set result to x.