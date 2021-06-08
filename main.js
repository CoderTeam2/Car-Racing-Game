var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bgObj = new Image();
var car1 = new Image();
var car2 = new Image();

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
    ctx.drawImage(car1,10,10,120,70);
}

function uploadCar2(){
    ctx.drawImage(car2,10,100,120,70);
}

window.addEventListener("keydown",check);
function check(e){ 
    var keyPress = e.keyCode;
    if(keyPress == "38"){
        console.log("Car1 Forward");
    }
    if(keyPress == "40"){
        console.log("Car1 Backward");
    }
    if(keyPress == "39"){
        console.log("Car1 Right");
    }
    if(keyPress == "37"){
        console.log("Car1 Left");
    }

    if(keyPress == "87"){
        console.log("Car2 Forward");
    }
    if(keyPress == "83"){
        console.log("Car2 Backward");
    }
    if(keyPress == "68"){
        console.log("Car2 Right");
    }
    if(keyPress == "65"){
        console.log("Car2 Left");
    }
}