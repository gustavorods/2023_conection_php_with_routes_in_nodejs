const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha

const app = express();
const port = 3000;

// Use o middleware cors
app.use(cors()); // Adicione esta linha

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para receber dados
app.post('/SendEmail', (req, res) => {
    const dados = req.body;
    console.log('Dados recebidos:', dados);

    // Aqui você pode adicionar a lógica para enviar e-mail ou outro processamento

    res.status(200).send('Dados recebidos com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor Node.js ouvindo na porta ${port}`);
});
