/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables;

(function(){
	
var playerGuess = 0;
var guessR = 3; // remaining
var guessM = 0; // made

var info = {
	input  : document.querySelector('#input'), //These allow you to access the information and use it later.
	output : document.querySelector('#output'),
	button : document.querySelector('button')
	
	
	};

var randomNum = 1 + (Math.random()*(10-1+1)) // This is my random number i could have used floor but this worked.
var magicNum = Math.round(randomNum);
console.log(magicNum);


var clicked = function(){ // this spits back im clicked when the button is clicked
	console.log('im clicked')
	
	}

info.button.addEventListener('click', clicked, false); // This grabs the info needed and tells my function that
													   // the button was clicked
var validation = function(){ //  this is my attempt at a large validation function...
	playersGuess = parseInt (dom.imput.value);
	
	if(isNaN(playerGuess)){
		output = "That is not a number. That was guess " + guessM + "." + " You have " +  guessR + " guesses left." + " pick a number between 1-10."
		
	}if(input < 1(playerGuess)){
    	output = "That number is too low. That was guess " + guessM + "." + " You have " +  guessR + " guesses left." + " pick a number between 1-10."

	}if(input > 10(playerGuess)){
		output = "That number is too high. That was guess " + guessM + "." + " You have " +  guessR + " guesses left." + " pick a number between 1-10."
		
	}if(input = magicNum(playerGuess)){
		output = "You won you picked the magic number and it took you " + guessM + " tries."
		
	}if(guessM == guessR){
		output = "You are out of guesses"
		
		
	} else {
		
	guessM = guessM--; // This is supposed to be my counter 
	
	
	}






















}})();
