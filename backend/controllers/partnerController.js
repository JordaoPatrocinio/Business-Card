const Partner = require('../models/Partner');  // Certifique-se de que o modelo está correto
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Função para registrar um novo parceiro
const registerPartner = async (req, res) => {
  const { nomeResponsavel, cpf, email, senha, empresaNome, empresaCNPJ, endereco } = req.body;

  try {
    // Verifica se o email já está em uso
    let partner = await Partner.findOne({ email });
    if (partner) return res.status(400).json({ msg: 'Email já cadastrado' });

    // Criptografa a senha antes de salvar
    const hashedPassword = await bcrypt.hash(senha, 10);

    partner = new Partner({
      nomeResponsavel,
      cpf,
      email,
      senha: hashedPassword,
      empresaNome,
      empresaCNPJ,
      endereco,
    });

    await partner.save();
    res.status(201).json({ msg: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar parceiro:', error);  // Log para depuração
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

// Função para logar o parceiro
const loginPartner = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const partner = await Partner.findOne({ email });
    if (!partner) return res.status(400).json({ msg: 'Credenciais inválidas' });

    const isMatch = await bcrypt.compare(senha, partner.senha);
    if (!isMatch) return res.status(400).json({ msg: 'Credenciais inválidas' });

    const token = jwt.sign({ id: partner._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erro no login do parceiro:', error);  // Log para depuração
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

// Exporta as funções para uso nas rotas
module.exports = {
  registerPartner,
  loginPartner,
};
