const express = require('express')

const app = express();
const server = require('http').Server(app);
const router = require('./src/router');
const io = require('socket.io')(server);


server.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})

app.use(express.urlencoded({ extended: false }));
app.use('/', router.Router)

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs')


io.of('/').on('connection', function (socket) {


    socket.emit('StartGame', { x: 100, y:100 });

    socket.on('insercion', (data) => {
        socket.broadcast.emit('nueva insercion', { data: data.hola })
    })
    socket.on('updatePos', (data) => {
        
        io.emit('allValues', ({ x: data.x, y: data.y, dx: data.dx, dy: data.dy }))
    })

});

