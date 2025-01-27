const http = require('node:http');
const fs = require('fs/promises');  

// Crea el servidor
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == '/styles.css') {
    fs.readFile('./styles.css', 'utf-8')
    .then((txt) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(txt);
    });

  } else {
    fs.readFile('./index.html', 'utf-8')
    .then((txt) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(txt);
    });
  }
});

// La IP local de la computadora y el puerto que usaremos
const hostname = '192.168.8.7'; // Cambia esto por tu IP local
const port = 5500;

// El servidor comienza a escuchar en la IP local y el puerto especificado
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});