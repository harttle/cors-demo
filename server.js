const express = require('express');
const fs = require('fs');
const onHeaders = require('on-headers');

var app = express();

// logger
app.use((req, res, next) => {
    console.log('Request:');
    console.log(req.method, req.originalUrl, req.get('host'));
    console.log(req.headers);
    console.log();
    onHeaders(res, x => {
        console.log('Response:');
        console.log(res.statusCode);
        console.log(res._headers);
        console.log();
    });
    next();
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
    res.status(200).end('contents here');
});

app.options('/access-control-allow-origin-wildcard', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': req.get('access-control-request-headers')
    });
    res.status(200).end();
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
        'Access-Control-Allow-Origin': '*' //req.get('origin')
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

app.get('/redirect-to-redirect', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://index.com:4001',
        'Location': 'http://index.com:4001/redirect'
    });
    res.status(303).end(); 
});

app.get('/redirect', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Location': 'http://index.com:4001/access-control-allow-origin-wildcard',
        'Access-Control-Allow-Headers': 'x-foo, DNT'
    });
    res.status(303).end(); 
});

app.options('/redirect', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'x-foo, DNT'
    });
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
