// alert("Welcome Optimus-Prime")

 var randomNumber1 = Math.floor(Math.random() * 6 + 1);

 var imageChange = "images/" + "dice" + randomNumber1 + ".png";

 var img = document.querySelectorAll("img")[0].setAttribute("src", imageChange)




var randomNumber2 = Math.floor(Math.random() * 6 + 1)

var imageChange2 = "images/" + "dice" + randomNumber2 + ".png";

var img = document.querySelectorAll("img")[1].setAttribute("src", imageChange2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
 else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!"
}