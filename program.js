const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Returns an HTML page to any GET request coming in
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.end(data);
        });
    } else if (req.method === 'POST') {
        // Reads a binary file and parses the data
        fs.readFile('binary.dat', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }

            // Parses the binary data
            const modelNumber = data.readUInt16LE(0);
            const serialNumber = data.readUInt32LE(2);
            const supports48BitAddress = data.readUInt8(6) === 1;
            const totalSectors = data.readUInt32LE(7);
            const diskSize = totalSectors * 512;

            // Returns parsed data in JSON format
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ modelNumber, serialNumber, supports48BitAddress, diskSize }));
        });
    }
});

server.listen(8123);
console.log('Server listening on port 8123');
