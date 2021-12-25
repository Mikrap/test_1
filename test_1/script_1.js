function clickfigura_1() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var wid = getRandomInt(400);
    var hei = getRandomInt(400);
    var bor = getRandomInt(10);
    var br = getRandomInt(100);
    var deg = getRandomInt(360);
  
    console.log("#click", red, green, blue,);
    var stringboxchsdow = " 0 0 0 5px rgba(" + red + ", "+ green +","+ blue + ", 1 )"
    " 0 0 15px rgba(" + red + ", "+ green +","+ blue + ", 1), " +
    " 0 0 30px rgba(" + red + ", "+ green +","+ blue + ", 1), " +
   " 0 0 60px rgba(" + red + ", "+ green +","+ blue + ", 1), " +
    " 0 0 90px rgba(" + red + ", "+ green +","+ blue + ", 1), " +
   " 0 0 120px rgba(" + red + ", "+ green +","+ blue + ", 1); " 


    document.getElementById("figura_1") .style.backgroundColor = "rgb("+ red + ", "+ green +","+ blue + ")"
    document.getElementById("figura_1") .style.width = wid + "px" ;
    document.getElementById("figura_1") .style.height = hei + "px" ;
    document.getElementById("figura_1") .style.border = bor + "px solid" + "rgb("+ red + ", "+ green +","+ blue + ")";
    document.getElementById("figura_1") .style.borderRadius = br + "px" ;
    document.getElementById("figura_1") .style.transform = "rotate(" + deg +" deg)";
    document.getElementById("figura_1") .style.boxShadow = stringboxchsdow ;
   

    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }