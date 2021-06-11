var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var main_div = document.getElementById("main");

var winner = document.getElementById("winner");

var bgObj = new Image();
var car1 = new Image();
var car2 = new Image();

var car1X = 20;
var car1Y = 200;

var car2X = 20;
var car2Y = 300;

function loadItems() {
    bgObj.onload = uploadBg;
    bgObj.src = "Track.jpg";

    car1.onload = uploadCar1;
    car1.src = "Car1.png";

    car2.onload = uploadCar2;
    car2.src = "Car2.png";
}

function uploadBg(){
    ctx.drawImage(bgObj,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1,car1X,car1Y,100,70);
}

function uploadCar2(){
    ctx.drawImage(car2,car2X,car2Y,100,70);
}

window.addEventListener("keydown",check);
function check(e){ 
    var keyPress = e.keyCode;
    if(keyPress == "38"){
        car1_move("Up");
    }
    if(keyPress == "40"){
        car1_move("Down");
    }
    if(keyPress == "39"){
        car1_move("Right");
    }
    if(keyPress == "37"){
        car1_move("Left");
    }
    if(keyPress == "87"){
        car2_move("Up");
    }
    if(keyPress == "83"){
        car2_move("Down");
    }
    if(keyPress == "68"){
        car2_move("Right");
    }
    if(keyPress == "65"){
        car2_move("Left");
    }
    if(car1X == 1300){
        winner.innerHTML = "Orange car wins!";
        alert("Game Over");
        main_div.style.display = "none";
    }else if(car2X == 1300){
        winner.innerHTML = "Red car wins!";
        alert("Game Over");
        main_div.style.display = "none";
    }
}

function car1_move(dir){
    if(dir == "Up"){
        if(car1Y > 0){
            car1Y -= 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
    }
    if(dir == "Down"){
        if(car1Y < 500){
            car1Y += 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
    if(dir == "Right"){
        if(car1X < 1300){
            car1X += 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
    if(dir == "Left"){
        if(car1X > 0){
            car1X -= 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
}

function car2_move(dir){
    if(dir == "Up"){
        if(car2Y > 0){
            car2Y -= 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
    if(dir == "Down"){
        if(car1Y < 500){
            car2Y += 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
    if(dir == "Right"){
        if(car1X < 1300){
            car2X += 10
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
    if(dir == "Left"){
        if(car2X > 0){
            car2X -= 10;
            uploadBg();
            uploadCar1();
            uploadCar2();
          }
    }
}