require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');



// parse application/x-www-form-unlercode
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Importacion de rutas
app.use(require('./routes/index'));


//Habilitar el public

app.use(express.static(path.resolve(__dirname, '../public')));






mongoose.connect(process.env.URLDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (err, resp) => {
    if (err) throw err;

    console.log('Base de datos Online');

});


app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto: ', 3000)
});