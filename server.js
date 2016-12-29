const express = require('express');
const fs = require('fs');

var app = express();

// logger
app.use((req, res, next) => {
    console.log(req.get('host'), req.originalUrl);
    next();
});

// options
app.options((req, res) => {
    res.status(200).end();
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, content) => {
        res.status(200).end(content);
    });
});

app.get('/access-control-allow-origin-not-set', (req, res) => {
    res.status(200).end('you can never retrieve this');
});

app.get('/access-control-allow-origin-wildcard', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    res.status(200).end('content from entry.com');
});

app.get('/wildcard-allow-origin-with-credentials', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    });
    res.status(200).end('you can never retrieve this');
});

app.get('/allow-credentials-not-set', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://index.com:4001'
    });
    res.status(200).end('you can never retrieve this');
});

app.get('/specific-allow-origin-with-credentials', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://index.com:4001',
        'Access-Control-Allow-Credentials': true
    });
    res.status(200).end('I got your cookie: ' + req.headers.cookie);
});

app.get('/redirect', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://index.com:4001',
        Location: 'http://index.com:4001/access-control-allow-origin-wildcard'
    });
    res.status(303).end(); 
});

app.get('/foo', (req, res) => {
    res.status(200).end();
});

app.listen(4001, () => console.log('listening to 4001'));

console.log('Put these into your /etc/hosts:');
console.log();
console.log('127.0.0.1 index.com');
console.log('127.0.0.1 mid.com');
console.log('127.0.0.1 dest.com');
console.log();
console.log('Open http://index.com');
console.log();
