const mongoose = require('mongoose');

const associateSchema = new mongoose.Schema({
  nomeResponsavel: { type: String, required: true },
  cpf: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  empresaNome: { type: String, required: true },
  empresaCNPJ: { type: String, required: true },
  endereco: { type: String, required: true },
});

module.exports = mongoose.model('Associate', associateSchema);
