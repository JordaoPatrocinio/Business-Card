const Associate = require('../models/Associate');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerAssociate = async (req, res) => {
  const { nomeResponsavel, cpf, email, senha, empresaNome, empresaCNPJ, endereco } = req.body;

  try {
    // Verificação de campos obrigatórios
    if (!email) {
      return res.status(400).json({ msg: 'Email é obrigatório' });
    }

    // Verificar se o email já está em uso
    let associate = await Associate.findOne({ email });
    if (associate) return res.status(400).json({ msg: 'Email já cadastrado' });

    // Criptografar a senha antes de salvar
    const hashedPassword = await bcrypt.hash(senha, 10);

    associate = new Associate({
      nomeResponsavel,
      cpf,
      email,
      senha: hashedPassword,
      empresaNome,
      empresaCNPJ,
      endereco,
    });

    await associate.save();
    res.status(201).json({ msg: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar associado:', error);  // Log para depuração
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

// Função para login de associados
const loginAssociate = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const associate = await Associate.findOne({ email });
    if (!associate) return res.status(400).json({ msg: 'Credenciais inválidas' });

    const isMatch = await bcrypt.compare(senha, associate.senha);
    if (!isMatch) return res.status(400).json({ msg: 'Credenciais inválidas' });

    const token = jwt.sign({ id: associate._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Erro no login do associado:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

// Exportar as funções para uso nas rotas
module.exports = {
  registerAssociate,
  loginAssociate,
};
