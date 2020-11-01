
const net = require('net');
const port = 8080;

const server = net.createServer(s => {
    console.log(`CONNECTED: ${s.remoteAddress}:${s.remotePort}`);

    s.on('data', data => {
        console.log(`DATA: ${s.remoteAddress}: ${data}`);
        s.write(data);
    });

    s.on('close', data => {
        console.log(`CLOSED: ${s.remoteAddress}:${s.remotePort}`);
    });
}).listen(port, () => {
    console.log(`Server listening on ${port}`);
});

