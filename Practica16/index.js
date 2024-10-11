const http = require('http');
const fs = require('fs');
const PUERTO = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type','text/html ');
    //Simple Router
    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/inicio.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/contacto':
            ruta += '/contacto.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile( ruta, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <ul>
                <li><a href="/"> Inicio </a></li>
                <li><a href="/about"> Acerca </a></li>
                <li><a href="/contacto"> Contacto </a></li>
            </ul>`);
        res.write(data);
        return res.end();
    });
});

server.listen(PUERTO, () => {
    console.log('Servidor en el puerto 3000');
});

//RETO
//De esta practica 16 hacer un sitio 100% funcional
//Usando bootstrap y un poco de css
//