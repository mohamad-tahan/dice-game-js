var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomDice1 + ".png";

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomDice2 + ".png";

var image1 = document.querySelector(".img1").setAttribute("src", randomImage1);
var image1 = document.querySelector(".img2").setAttribute("src", randomImage2);