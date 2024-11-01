const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:vhrK805Y2cLQw3lF@cartaoempresario.eldyt.mongodb.net/cartaoempresario');
    
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
    process.exit(1);  // Encerra o processo em caso de erro na conexão
  }
};

module.exports = connectDB;