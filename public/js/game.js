import board from "./board.js";
import {  Stick} from "./stick.js";
import   ListSticks from "./ListSticks.js";
export class Game {
    constructor() {
        this.canvas = board.canvas;
        this.ctx = board.ctx;
        
    }

    insertStick = () => {
        this.canvas.addEventListener("click", (e) => {
            console.log(e)            
            ListSticks.agregarStick(new Stick(e.clientX,e.clientY,2,100))
        })
    }

    limpiar = ()=>{
        board.ctx.clearRect(0,0,board.canvas.width,board.canvas.height);
    }

}