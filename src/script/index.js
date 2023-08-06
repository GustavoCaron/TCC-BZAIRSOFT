const http = require('http'); //Colocando HTTP no servidor
const http = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
         fs.readFile('index.html', (err, data) => {
             if (err) {
                 res.statusCode = 500; // Erro interno do servidor
                 res.end('Erro ao ler o arquivo');
             } else {
                 res.setHeader('Content-Type', 'text/html');
                 res.statusCode = 200;
                 res.end(data); // Envia o conteúdo do index.html como resposta
             }
         });
        }
    });
    

server.listen(3000, () => {
 console.log(`Servidor em execução em http://localhost:3000/`);
});