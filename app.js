// establecemos o requerimos las variables 
// de entorno  en esta primera linea de codigo
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// HANDLEBARS
app.set('view engine', 'hbs');
//Esta linea la agrego par poder renderizar los parcial
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Ricardo Cortés',
        titulo: 'Curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ricardo Cortés',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ricardo Cortés',
        titulo: 'Curso de node'
    });
});



app.listen(port, () => {
    console.log(`Mi aplicación está coriendo en el puerto http://localhost:${port}`);
});








// pipe(process.stdout)
// streams
// stdin

// https://nodejs.org/api/stream.html#stream_stream
//https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe/ 


// https://nodejs.org/api/stream.html#stream_stream 
// API for stream consumers
// Writable streams
// Class: stream.Writable
// Event: 'close'
// Event: 'drain'
// Event: 'error'
// Event: 'finish'
// Event: 'pipe'
// Event: 'unpipe'
// writable.cork()
// writable.destroy([error])
// writable.destroyed
// writable.end([chunk[, encoding]][, callback])
// writable.setDefaultEncoding(encoding)
// writable.uncork()
// writable.writable
// writable.writableEnded
// writable.writableCorked
// writable.writableFinished
// writable.writableHighWaterMark
// writable.writableLength
// writable.writableNeedDrain
// writable.writableObjectMode
// writable.write(chunk[, encoding][, callback]) 

// writable.writableNeedDrain
// writable.writableObjectMode