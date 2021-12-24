function click() {
     console.log(getRandomInt(255));
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    console.log("#click", red, green, blue,);

    document.getElementById("figura_1") .style.backgroundColor = "rgb("+ red + ", "+ green +","+ blue + ")"
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }