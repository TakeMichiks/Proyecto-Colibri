require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Register = require('./routes/Product.model.js');
const Login  = require('./routes/Product.model.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos de MongoDB.'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Middleware para parsear el cuerpo de las peticiones en JSON
app.use(express.json());

app.use("/api", Register)

app.use ("/api", Login)

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}.`);
});