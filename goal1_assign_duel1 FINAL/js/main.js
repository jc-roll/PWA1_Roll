/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman"; // Player one is spiderman
    var playerTwoName = "Batman"; // player two is batman

    //player damage
    var player1Damage = 20; //damage for each player is 20 dmg.
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100; // health is set at 100 each
    var playerTwoHealth = 100;

    //initiate round
    var round=0; //starting round is round zero

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++) //The players will fight for 10 rounds unless one dies
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;// the minimum damage is .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);// this is the randomizer that calcs 
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);// the damage that will be done

            //inflict damage
            playerOneHealth-=f1;// this shows the impact on each players health
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // logs new healths

            //check for victor
            var result = winnerCheck();// checks to see if one or both of the players are at 0 health or death
            console.log(result);
            if (result==="no winner")// if no one is at 0 health then it continues
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);					// the rounds continue untill a player reaches 0 health and then the winner is known

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner"; // if no player has 0 health
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die"; // both players have 0 health
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"// player one's health is 0 and player two's has health. Player two wins
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"// player two's health is 0 and player one's has health. Player one wins
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();