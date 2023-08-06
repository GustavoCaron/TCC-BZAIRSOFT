//Importando o FramemeWork Express
const express = require('express')
const app = express();

//Se URL for /, enviaram o Homepage)
app.get('/', (res, res)=> {
    res.send('home page')
})

//Rota com parametros (Caso use alguem hora)

//app.get('/usuario/:name', (req, res)=> {
 // const name = req.params.name;
 // res.send(req.params) 
//})

//Definindo a Rota do servidor
app.listen(3000, () => {
    console.log('Servidor Em execução em http://localhost:3000');
})

