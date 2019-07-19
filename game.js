//Fake counter that begins the game.
var i = 0;

function load(){
	setTimeout(function(){
        document.getElementById("output").innerHTML = i + "%";
        i+=10;
		if(i <= 100){
			load();
		}
		if(i === 110){
			document.getElementById("output").innerHTML = "LOADED";
            window.done = 1;
		}
	}, 500)
}
load();

//User input.
if (done === 1){
    var name = prompt("What is your name civilian?", "John Doe");
    if (name != null) {
        document.getElementById("output").innerHTML = "Civilian R3-" + name + " please listen carefully:";
    }
}
