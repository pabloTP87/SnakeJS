let snake;
let food;
let scl = 20;

function setup(){
    createCanvas(600,600);
    snake = new Snake(300,300,scl,scl);

    let foodX = random(width);
    let foodY = random(height);
    food = new Food(floor(foodX/scl)*scl, floor(foodY/scl)*scl,scl,scl),

    frameRate(10);
}

function draw(){
    background(56);
    snake.show();
    snake.update();
    food.show();
}

function keyPressed(){

    if(keyCode === UP_ARROW){
        snake.dir(0,-1);
    }else if(keyCode === DOWN_ARROW){
        snake.dir(0,1);
    }else if(keyCode === RIGHT_ARROW){
        snake.dir(1,0);
    }else if(keyCode === LEFT_ARROW){
        snake.dir(-1,0);
    }
}

