/*
 * This is most of the code for a text adventure game.
 * Unless you want to look at the code, you probably shouldn't spoil the game.
 * You do you though.
 */

var i = 0;
var done = 0;

// Handles the 4 column console on the website.
// Simply here to save code.
function console(output, text){
	document.getElementById(output).innerHTML = text;
}


// DON'T READ ANYTHING SAYING PART# IF YOU DON'T WANT TO SPOIL THE GAME!
// "Part#" functions are the text in the game.
function partone(name){
	console("output1", "Civilian R3-" + name + " please listen carefully:");
       	console("output2", "You aren't safe, no one is.");
        console("output3", "They are after you... the aliens. They infultraited our perfect utopian space society.");
        console("output4", "If you think this is some dumb cliche, now is not the time for 4th walls.");
}

function partwo(){
	document.getElementById("output1").innerHTML = "You don't have much time. There are three options on what to do:";
        document.getElementById("output2").innerHTML = "1. Defend yourself with a Laser Shotgun™©®."
	document.getElementById("output3").innerHTML = "2. Try to communicate with them."
        document.getElementById("output4").innerHTML = "3. Dance."
}

// The main code of the game.
function game(){
	function load(){
		// Fake counter that begins the game.
		setTimeout(function(){
        		document.getElementById("output1").innerHTML = i + "%";
        		i += 10;
			if(i <= 110){
				load();
			}
			// This is broken, but was meant to say "LOADED" after "100%".
			if(i === 120){
				document.getElementById("output1").innerHTML = "LOADED";
				var done = 1;
			}
			if (done === 1){
                		var name = prompt("What is your name civilian?", "Bob");
                		if (name != null) {
					partone(name);
                		}
        		}

		}, 500)
	}
	load();
	//function parttwo(){
	//	setTimeout(function(){
	//		parttwo();
}

// Simply runs the main game function "game()".
game();
