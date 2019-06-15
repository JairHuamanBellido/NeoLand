const express = require('express')
const app = express();
const router = require('./src/router')

app.use(express.urlencoded({ extended: false }));
app.use('/', router.Router)

app.use('/public', express.static(__dirname+'/public'));
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs')



app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
})