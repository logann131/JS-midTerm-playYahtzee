//instantiating variables
document.getElementById("btnPlay").onclick = play;
let h1 = document.getElementById("results");
let text ="";

let die0 = document.getElementById("die0");
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");
let die3 = document.getElementById("die3");
let die4 = document.getElementById("die4");

function play(){ //function play
    let rolls = []; //instantiate array
    //loop over to generate 5 random numbers
    for (let i=0; i<=4; i++) {
        let randNum = Math.floor(Math.random() * 5 + 1);
        rolls[i] = randNum;
        rolls.sort();
        console.log("randNum: "+randNum);
    }
    console.log("roll: "+rolls);

    //decisions
    if ((rolls[0] === rolls[1]) && (rolls[1] === rolls[2]) && (rolls[2] === rolls[3]) && (rolls[3] === rolls[4])){
        text = "You won, Yahtzee!!! Dice: " +rolls[0]+ "," +rolls[0]+ ","+rolls[0]+ ","+rolls[0]+ ","+rolls[0]+ ",";
        h1.innerHTML = text; //print this out in the innerHTML of h1 Tag
        displayDieImages(rolls);

        //Updating the Die images

    } else {
        text = "You lost, Try Again! Dice: " +rolls[0]+ "," +rolls[1]+ ","+rolls[2]+ ","+rolls[3]+ ","+rolls[4]+ ",";
        h1.innerHTML = text; //print this out in the innerHTML of h1 Tag
        //Updating the Die images
        displayDieImages(rolls);


    }

    function displayDieImages(rolls) {
        die0.src = "images/die" +(rolls[0]-1)+ ".png";
        die0.alt = "die rolls" +rolls[0];
        die1.src = "images/die" +(rolls[1]-1)+ ".png";
        die1.alt = "die rolls" +rolls[1];
        die2.src = "images/die" +(rolls[2]-1)+ ".png";
        die2.alt = "die rolls" +rolls[2]+ ".png";
        die3.src = "images/die" +(rolls[3]-1)+ ".png";
        die3.alt = "die rolls" +rolls[3];
        die4.src = "images/die" +(rolls[4]-1)+ ".png";
        die4.alt = "die rolls" +rolls[4];
    }

} //end here