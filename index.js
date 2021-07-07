
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSrc1 = "images/" + randomDiceImage;
document.querySelectorAll('.dices')[0].setAttribute('src',randomImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll('.dices')[1].setAttribute('src',randomImgSrc2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins" ;
}

else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins" ;
}

else {
    document.querySelector("h1").innerHTML = "Draw" ;
}
