import board from "./board.js";
import {  Stick} from "./stick.js";
import   ListSticks from "./ListSticks.js";
export class Game {
    constructor() {
        this.canvas = board.canvas;
        this.ctx = board.ctx;
        
    }

    insertStick = () => {
        
        // this.canvas.addEventListener("mousemove", (e) => {
        //     this.ctx.beginPath();
        //     this.ctx.rect(e.x, e.y, 20, 20);
        //     this.ctx.fillStyle = "red";
        //     this.ctx.fill();
        // })

        this.canvas.addEventListener("click", (e) => {
            console.log(e)            
            ListSticks.agregarStick(new Stick(e.clientX,e.clientY))
        })
    }

    limpiar = ()=>{
        board.ctx.clearRect(0,0,board.canvas.width,board.canvas.height);
    }

}