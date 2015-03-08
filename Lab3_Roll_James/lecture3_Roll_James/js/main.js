/**
 * Created by James Roll.
 PWA1
 Lecture 3 Assignment
 */
 //function//
 var width;
 var height;
 
 var total = calcArea(width,height);// call to function using past arguments
 
 function calcArea(w,h){// creation of basic function, catches width and height in parameters
	
	 var area = w*h;
	 console.log(area);
	 return area; //return the 
	 }

//generate a random number

var min=180;
var max=220;

function randomizer(mn, mx){
	
	var randomNumber = Math.random()*(mx-mn)+mn;
	return randomNumber;
	}
var ranNum = randomizer(min,max);
console.log (ranNum);

//anonymous function

var width = 10;
var height = 20;

var areaTotal = function (){
	var area = w*h;
	console.log(area);
	return area;
	
	};
	var total = areaTotal(width,height);
