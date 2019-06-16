import { Ball } from "./ball.js";
import {  Game} from "./game.js";
import   listSticks from "./ListSticks.js";
import board from "./board.js";
const socket = io('/');
let lastTime = 0;

//let bola =  new Ball(10,50,10,20,20);;


socket.on('StartGame', ({x,y})=>{
    let bola =  new Ball(x,y,10,100,100);
    
    
    socket.on('nueva insercion',(data)=>{
        console.log(data.data);
    })
    
    
    let game =  new Game(socket);
    
    
    game.eventos();
   
    let gameloop = (timestamp)=>{
        let deltatime = timestamp- lastTime;
        lastTime = timestamp;
        game.limpiar();
        bola.mover(deltatime);

        socket.emit('updatePos',{x:bola.x,y:bola.y,dx:bola.dx,dy:bola.dy});
        
        socket.on('allValues', ({x,y,dx,dy})=>{
            
            bola.setAllValues(x,y,dx,dy);
        })
        
        //data.ball.mover(deltatime);
        listSticks.pintarSticks();
        
        requestAnimationFrame(gameloop)
    }
    
    gameloop();
})
  