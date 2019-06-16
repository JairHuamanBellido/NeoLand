import board from "./board.js";
export class Stick {
    constructor(x, y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = board.ctx;
        this.isColision = false;
    }

    pintar() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y,this.width,this.height);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fill();
    }
}