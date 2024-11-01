const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const partnerRoutes = require('./backend/routes/partnerRoutes');
const associateRoutes = require('./backend/routes/associateRoutes');
const authRoutes = require('./backend/routes/authRoutes');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const userRoutes = require('./backend/routes/userRoutes');

dotenv.config();

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// Limite de requisições
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
});
app.use(limiter);

// Desabilitar o cache para evitar respostas 304
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

// Rotas da API
app.use('/api', userRoutes); // Adiciona as rotas de usuário
app.use('/api/auth', authRoutes); // Defina o caminho '/api/auth' para rotas de autenticação
app.use('/api/partners', partnerRoutes); // Defina o caminho '/api/partners' para rotas de parceiros
app.use('/api/associates', associateRoutes); // Defina o caminho '/api/associates' para rotas de associados

// Rota base para verificar o funcionamento da API
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Tratamento de erros 404 para rotas inexistentes
app.use((req, res) => {
  res.status(404).json({ msg: 'Rota não encontrada' });
});

// Middleware de tratamento de erros para capturar erros no servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Ocorreu um erro no servidor' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
