const express = require('express');
const routes = require('./routes');
const db = require('./database/db.js');
const User = require('./models/User');

const app = express();

app.use(express.json());

app.use(routes);

db.sync();

app.listen(3333, () => console.log("Servidor iniciado na porta 3333"));