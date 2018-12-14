// var age = prompt ("Enter your age.");
// if (age < 0) {
//     console .log(" error");
// }
// else if( age === 21) {
//     console.log("Happy 21st Birthday.");
// }
// else if (age%2 === 1) {
//     console .log("Your age is odd."); 
// }

// Number guessing game
var secretNumber = 5;
var number = prompt("Enter a number here.");
if (number === secretNumber){
    console.log("You guessed the number.");
}
else if(number < secretNumber ){
    console.log("Too low try again!!");
}
else if (number > secretNumber) {
    console .log("Too high try again");
}
