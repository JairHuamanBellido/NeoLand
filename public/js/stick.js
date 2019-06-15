import board from "./board.js";
export class Stick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ctx = board.ctx;
    }

    pintar() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y,20,20);
        this.ctx.fillStyle = "#33ffaa";
        this.ctx.fill();
    }
}