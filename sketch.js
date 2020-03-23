let snake;
let food;
let scl = 20;

function setup(){
    createCanvas(600,600);
    snake = new Snake(300,300,scl,scl);
    
    foodPosition();

    frameRate(10);
}

function foodPosition(){
    let row = floor(random(width)/scl) * scl;
    let col = floor(random(height)/scl) * scl;

    food = new Food(row, col, scl, scl);
}

function draw(){
    background(56);
    snake.show();
    snake.update();
    food.show();

    if(snake.eat(food)){
        foodPosition();
    }
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

