/**
 * Created by jamesroll on 3/3/15.
 */
/*
 James Roll
 PWA-1 Day 1
 03-03-2015
 */

var cost = prompt("Whats is the cost of the item?");

while(cost==="" || isNaN(cost)){

    if (cost===""){
        cost = prompt("Please do not leave blank.\nWhat is the cost of the item?.");
    }else {
        cost = prompt("Please only type in numbers.\nWhat is the cost of the item?.");
    }
}
console.log(cost);

    var discount = prompt("What is the discount percent 1-100%?");

while(discount==="" || isNaN(discount)){

    if (discount===""){
        discount = prompt("Please do not leave blank.\nWhat is the cost of the item?.");
    }else {
        discount = prompt("Please only type in numbers.\nWhat is the cost of the item?.");

    }

}

    if ((discount >= 0 && discount < 101)) {

    }else {
        discount = prompt("Please type in a number between 0-100 only.");
}
console.log(discount);

function functionOne (one,two) {
    var discountPercent = (two % 100 * one);
    var newPrice = (one - discountPercent);
    console.log(newPrice);

}
console.log(newPrice);
var total= functionOne(cost, discount);
console.log (total);
alert = newPrice;

