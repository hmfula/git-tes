const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', require('./routes/dishRouter'));
app.use('/promotions', require('./routes/promoRouter'));
app.use('/leaders', require('./routes/leaderRouter'));

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});