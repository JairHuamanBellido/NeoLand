import { Ball } from "./ball.js";
import {  Game} from "./game.js";
import   listSticks from "./ListSticks.js";

let lastTime = 0;

let bola1 =  new Ball(20,20,10,200,210);
let game =  new Game();


game.insertStick();
let gameloop = (timestamp)=>{
    let deltatime = timestamp- lastTime;
    lastTime = timestamp;
    
    game.limpiar();
    bola1.mover(deltatime);
    listSticks.pintarSticks();
    
    requestAnimationFrame(gameloop)
}

gameloop();