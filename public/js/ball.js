import board from "./board.js";

export class Ball {

    constructor(x, y, radio, dx, dy) {
        this.x = x;
        this.y = y;

        this.ctx = board.ctx;
        this.radio = radio;
        this.dx = dx;
        this.dy = dy;

    }

    isMovingRight(dx) {
        return (dx < 0) ? -1 : 1;
    }
    isMovingUp(dy) {
        return (dy < 0) ? -1 : 1;
    }
    dibujar = () => {
        this.ctx.beginPath();

        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();


    }

    borrar = () => {

        this.ctx.clearRect(this.x - (this.radio + (0.1 * this.isMovingRight(this.dx))), this.y -(this.radio + (1*this.isMovingUp(this.dy))), this.radio * 2, this.radio * 2);
    }


    colisionesConTablero =()=>{
        if(this.x+this.radio >= board.canvas.width || this.x <= 0+this.radio){
            this.dx = -this.dx;
        }
        if(this.y+this.radio >=board.canvas.height || this.y<=0+10){
            this.dy = -this.dy;
        }


    }

    mover = (deltatime) => {

        board.ctx.clearRect(0,0,500,500);
        this.colisionesConTablero();
        this.update(deltatime);
        this.dibujar();

    }


    update = (deltatime) => {
        if (!deltatime) { return }
        this.x += (this.dx / deltatime);
        this.y += (this.dy / deltatime);
    }

}