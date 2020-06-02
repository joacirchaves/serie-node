const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//req - dados da requisição: parâmetros, token de autenticação, etc.
//res - utilizado para enviar resposta ao usuário nessa rota
//app.get('/', (req, res) => {
//    res.send('Ok');
//})

require('./app/controllers/index')(app);

app.listen(3000); 