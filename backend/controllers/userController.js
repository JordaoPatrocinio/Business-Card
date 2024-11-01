// controllers/userController.js
const User = require('../models/User'); // Importe o modelo correto

exports.getUserData = async (req, res) => {
  try {
    // Substitua pelo código necessário para buscar o usuário específico, por exemplo, usando req.userId ou req.params
    const user = await User.findById(req.userId); // Use o identificador correto para encontrar o usuário
    if (user) {
      res.json({
        nomeResponsável: user.nomeResponsável,
        // Outros campos que deseja retornar
      });
    } else {
      res.status(404).json({ msg: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Erro ao buscar os dados do usuário' });
  }
};
