const express = require('express');
const path = require('path');
const app = express();

// Definindo o caminho absoluto para a pasta "TCC-BZAIRSOFT"
const absolutePath = path.join(__dirname, '../../../TCC-BZAIRSOFT');

// Configurando o diretório público para servir os arquivos estáticos
app.use(express.static(absolutePath));

// Rota para a página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(absolutePath, 'index.html'));
});

// Definindo a Rota do servidor
app.listen(3000, () => {
  console.log('Servidor Em execução em http://localhost:3000');
});
