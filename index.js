const express = require('express');
const http = require('http');

const app = express();
const router = express.Router();
let server = http.createServer(app);

app.get('/', function(req, res, next){
    res.json({msg: "ok!"});
})

const mammoth = require('mammoth');

app.get('/test-doc', (req, res, next)=>{
    mammoth.convertToHtml({path: "./upload/A19名单.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion

        console.log("convertToHtml msg: ", messages);
        res.send(html);
    })
    .done();
});

server.on('error', onError);
server.on('listening', onListening);
server.listen(9528);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    //debug('Listening on ' + bind);
    console.log('Http server is listening on ' + bind);
}