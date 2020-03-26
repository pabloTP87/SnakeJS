class Snake{

    constructor(x,y,w,h){
        this.x = x; // posición horizontal
        this.y = y; // posición vertical
        this.w = w; // ancho
        this.h = h; // alto
        this.speedX = 1; // Velocidad en el eje x (horizontal)
        this.speedY = 0; // Velocidad en el eje y (vertical)
        this.total = 0;
        this.tail = [];
    }

    show(){
        fill(255);
        stroke(4);

        for(let i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, this.w, this.h);
        }

        fill(255);
        stroke(4);
        rect(this.x, this.y, this.w, this.h);
    }

    update(){
        if(this.total === this.tail.length){
            for(let i = 0 ; i < this.tail.length-1 ; i++){
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.speedX * scl;
        this.y = this.y + this.speedY * scl;

        // limitamos la posición de movimiento de snake entre 0 y el ancho y largo del espacio
        this.x = constrain(this.x, 0 ,width - scl);
        this.y = constrain(this.y, 0 ,height - scl);
    }

    dir(x,y){
        this.speedX = x;
        this.speedY = y;
    }

    eat(posFood){
        if(dist(this.x,this.y,posFood.x,posFood.y) < 1){
            this.total++;
            frameRate(10+this.total);
            return true;
        }else{
            return false;
        }
    }
}