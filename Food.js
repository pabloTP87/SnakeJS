class Food {
    constructor(x,y,w,h){
        this.x = x; // posición horixontal
        this.y = y; // posición vertical
        this.w = w; // ancho
        this.h = h; // alto
    }

    show(){
        fill(255);
        stroke(4);
        rect(this.x,this.y,this.w,this.h);
    }
}