class Snake{

    speedX = 1; // Velocidad en el eje x (horizontal)
    speedY = 0; // Velocidad en el eje y (vertical)

    constructor(x,y,w,h){
        this.x = x; // posición horixontal
        this.y = y; // posición vertical
        this.w = w; // ancho
        this.h = h; // alto
    }

    show(){
        fill(255);
        stroke(4);
        rect(this.x, this.y, this.w, this.h);
    }

    update(){
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
            return true;
        }else{
            return false;
        }
    }
}