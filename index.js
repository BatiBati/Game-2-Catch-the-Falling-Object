const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");

const bomb = document.createElement("div");

let bombRandom = Math.floor(Math.random() * 1000);
bomb.style.left = random + "px";

document.getElementsByClassName("gameCont")[0].appendChild(bomb);
bomb.classList.add("bomb");
setInterval()