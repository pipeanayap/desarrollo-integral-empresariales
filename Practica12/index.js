const express = require('express')
const app = express();
port = 3000;

app.get('/', (req, res) =>{
    res.send('naldito cris pq siempre llegas tarede')
});

app.get('/productos', (req,res) =>{
    res.send('maldita sea, hay 0 productos')
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})