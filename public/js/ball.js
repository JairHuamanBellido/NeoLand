import board from "./board.js";

export class Ball {

    constructor(x, y, radio, dx) {
        this.x = x;
        this.y = y;

        this.ctx = board.ctx;
        this.radio = radio;
        this.dx = dx;

    }

    isMovingRight(dx) {
        return (dx < 0) ? -1 : 1;
    }

    dibujar = () => {
        this.ctx.beginPath();

        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();


    }

    borrar = () => {

        this.ctx.clearRect(this.x - (this.radio + (1*this.isMovingRight(this.dx))), this.y - this.radio, this.radio * 2, this.radio * 2);



    }

    mover = (deltatime) => {
        this.borrar();
        this.update(deltatime);
        this.dibujar();

    }


    update = (deltatime) => {
        if (!deltatime) { return }
        this.x += this.dx / deltatime
    }

}