import board from "./board.js";
import { Stick } from "./stick.js";
import ListSticks from "./ListSticks.js";
export class Game {
    constructor(socket) {
        this.canvas = board.canvas;
        this.ctx = board.ctx;
        this.socket = socket;
    }

    insertStick = () => {
        this.canvas.addEventListener("click", (e) => {
            console.log(e)
            let stick = new Stick(e.clientX, e.clientY, 2, 100);

            ListSticks.agregarStick(stick);
            ListSticks.automaticRemove(2000, stick);
            this.socket.emit('insercion', { hola: 'insertado' });
        })
    }

    limpiar = () => {
        board.ctx.clearRect(0, 0, board.canvas.width, board.canvas.height);
    }

    eventos = () => {
        this.insertStick();
    }




}