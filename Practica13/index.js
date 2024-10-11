const fs = require('fs');

const leerArchivo = (err, data) => (err) ? console.log("Error ", err) : console.log(data.toString());

const escribirArchivo = (err) => (err) ? console.log("Error: ", err) : console.log("Se escribio correctamente");

fs.readFile('archivo.txt', leerArchivo);

fs.writeFile('Nuevo archivo.txt', 'Hola sobrescribiendo el archivo', escribirArchivo);

fs.unlink('Nuevo archivo.txt', (err) =>{
    console.log('se elimino el archivo');
})


fs.mkdir('nuevaCarpeta', (err) =>{
    console.log('Se creo la carpeta');
});

fs.rmdir('nuevaCarpeta', (err) =>{
    console.log('Se elimino la carpeta');
});

