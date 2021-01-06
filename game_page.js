		var score = 0;
		var streak = 0;
		var round = 1;
		var roundscore = 0;
		var scoreroundone = 0;
		var scoreroundtwo = 0;
		var scoreroundthree = 0;
		var scoreroundfour = 0;
		var scoreroundfive = 0;
		var total = 0;
		var prompt = "You have banked for this round. You are now on the next round.";
function gameplay() {
	var number = Math.floor((Math.random() * 6) + 1);
	if (round == 1) {
		if (number == 1) {
			if (streak > 0) {
				roundscore = 0;
				round ++;
				scoreroundone = 0;
				alert("You were too brave! Your score for this round is 0.");
			}
			streak = 0;
			score = score - scoreroundone;

		}
			else  {
			score += number;
			roundscore += number;
			streak += 1;
			scoreroundone += number;
			}//Ends the part that adds to the round's score
			document.getElementById("1").innerHTML = scoreroundone;
	}
	if (round == 2) {
			if (number == 1) {
				if (streak > 0) {
				roundscore = 0;
				round ++;
				scoreroundtwo = 0;
				alert("You were too brave! Your score for this round is 0.");
								}
			streak = 0;
			score = scoreroundtwo;
		}
			else  {
			score += number;
			roundscore += number;
			streak += 1;
			scoreroundtwo += number;
			}//Ends the part that adds to the round's score
				document.getElementById("2").innerHTML = scoreroundtwo;
	}
	
	if (round == 3) {
				if (number == 1) {
				if (streak > 0) {
				roundscore = 0;
				round ++;
				scoreroundthree = 0;
				alert("You were too brave! Your score for this round is 0.");
								}
			streak = 0;
			score = scoreroundthree;
		}
			else  {
			score += number;
			roundscore += number;
			streak += 1;
			scoreroundthree += number;
			}//Ends the part that adds to the round's score
	document.getElementById("3").innerHTML = scoreroundthree;
	}
	if (round == 4) {
				if (number == 1) {
				if (streak > 0) {
				roundscore = 0;
				round ++;
				scoreroundfour = 0;
				alert("You were too brave! Your score for this round is 0.");
			}
			streak = 0;
			score = scoreroundfour;
			}
			else  {
			score += number;
			roundscore += number;
			streak += 1;
			scoreroundfour += number;
			}//Ends the part that adds to the round's score
	document.getElementById("4").innerHTML = scoreroundfour;
	}
	if (round == 5) {
				if (number == 1) {
				if (streak > 0) {
				roundscore = 0;
				round += 1;
				scoreroundfive = 0;
				alert("You were too brave! Your score for this round is 0.");
								}
			streak = 0;
			score = scoreroundfive;
		}
			else  {
			score += number;
			roundscore += number;
			streak += 1;
			scoreroundfive += number;
			}//Ends the part that adds to the round's score
	document.getElementById("5").innerHTML = scoreroundfive;
 	}
	document.getElementById("demo").innerHTML = "You rolled a " + number + "!";
	document.getElementById("test").innerHTML = "Your score for this round is " + roundscore + "!";
	document.getElementById("streak").innerHTML = "Your current streak is " + streak + " rolls!";
	document.getElementById("king").innerHTML = "You are on round " + round;
		for (var x = 1; x <= 6; x++) {
	var total = scoreroundfive + scoreroundfour + scoreroundthree + scoreroundtwo + scoreroundone;
	document.getElementById("6").innerHTML = total;
	}
			if (round >= 6) {
	document.getElementById("king").innerHTML = "Your game is over. Please reload the page to play again.";
    }
}




