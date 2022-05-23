if (performance.getEntriesByType("navigation")[0].type == "reload") {
var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomDice1 + ".png";

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomDice2 + ".png";

var image1 = document.querySelector(".img1").setAttribute("src", randomImage1);
var image1 = document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomDice1 > randomDice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "&#x1F6A9; Player 1 wins";
  } else if (randomDice1 < randomDice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "&#x1F6A9; Player 2 wins";
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = " Draw";
  }
}