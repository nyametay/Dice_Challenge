var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomNumber1 +".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomNumber2 +".png");
if (randomNumber1 > randomNumber2) {
    var result = "🚩 Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    result = "Player 2 Wins! 🚩";
}else{
    result = "Draw!";
}
document.querySelector(".container h1").innerHTML = result;