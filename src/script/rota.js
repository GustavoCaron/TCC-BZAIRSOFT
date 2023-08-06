const express = require('express')
const app = express();

app.get('/', (res, res)=> {
    res.send('home page')
})

app.listen(3000, () => {
    console.log('Servidor Em execução em http://localhost:3000');
})