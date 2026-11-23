var r = 0;
var g = 0;
var b = 0;
var playerx=150
var playery=300
var circlex = 0
var circley = 0
var myXs = [];
var myYs = [];
var mydiameters = [];
var x = 200;
var y = 150;
var diameter = 50;
var myXspeeds = [];  
var myYspeeds = [];
function setup() {
    createCanvas(800, 600);    
    for(var i = 0; i < 5; i++){
        myXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = x;
        myYs[i] = y;
        mydiameters[i] = diameter;
        x += 75;
        y += 75;
        diameter += 10;
    }    
}

function draw() {
    fill(24, 200, 29);
    background(0);
    player();
    createobstacles();
    placeobstacle();
    victory();
    borders();
    createexit();
}
function borders(){
    fill(200, 50, 200);
    rect(0,0,800,50)
    rect(0,550,800,50)
    rect(0,0,50,600)
}

function placeobstacle(){
    fill(0,255,0);
    square(circlex, circley, 100);    
}

function player(){
    fill(255, 204, 100);
    circle(playerx,playery,100);    
}

function createobstacles(){
    r = Rnum(255);
    g = Rnum(255);
    b = Rnum(255);
    fill(r,g,b);
    for(var i = 0; i < myXs.length; i++){

        circle(myXs[i],myYs[i],mydiameters[i]);
        myXspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] += myXspeeds[i];
        myYs[i] += myYspeeds[i];
        if (myXs[i] > 800) {
            myXs[i] = 0;
        }
        if (myXs[i] < 0) {
            myXs[i] = 800;
        }
        if (myYs[i] > 600) {
            myYs[i] = 0;
        }
        if (myYs[i] < 0) {
            myYs[i] = 600;
        }
        if (playerx > 800) {
            playerx = 0;
        }
        if (playerx < 0) {
            playerx = 800;
        }
        if (playery < 0) {
            playery = 0;
        }
    }
}

function createexit(){
    fill(255,0,0);
    rect(700,0,100,800);    
}
function keyPressed(){
    if (key == "w"){
        playery -= 30;
    }
    else if (key == "s"){
        playery += 30;
    }
    else if (key == "a"){
        playerx -= 30;
    }
    else if (key == "d"){
        playerx += 30;
    }
}
function victory(){
    if (playerx>=750){
    fill(0,255,0);
    stroke(5);
    textSize(30);
    text("You Win!", 400, 300);
    }
}    


function mouseClicked(){
    circlex = mouseX;
    circley = mouseY;
}
function Rnum(number) {
    return Math.floor(Math.random() * number);
}