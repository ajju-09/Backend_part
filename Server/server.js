const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Create server method always listen on the port for some of the incoming traffic
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    const extName =  String(path.extname(filePath)).toLowerCase;

    // This is use for what type of file would be accepted
    const mimeType = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png',
    }

    const contentType = mimeType[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, cont) => {
        if(err){
            if(err.code === 'ENOENT'){
                res.writeHead(404, {'content-type' : text/html});
                res.end('404 : File not found');
            }

        }else{
            res.writeHead(200, {'content-type': contentType});
            res.end(cont, "utf-8");
        }
    });
});

server.listen(port, () => {
    console.log(`Server is listing at port ${port}`);
});
