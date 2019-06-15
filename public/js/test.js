import { Ball } from "./ball.js";

let lastTime = 0;

let bola1 =  new Ball(20,20,10,10);
let bola2 =  new Ball(50,20,20,1);
bola2.dibujar();


let gameloop = (timestamp)=>{
    let deltatime = timestamp- lastTime;
    lastTime = timestamp;
    bola1.mover(deltatime);
    requestAnimationFrame(gameloop)
}

gameloop();