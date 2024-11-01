import { useState } from 'react';
import axios from '../../services/axiosConfig';
import { useNavigate } from 'react-router-dom';
import logo from '../../components/layout/uploads/logo-cartao.png'; // Caminho para o logo
import '../../components/layout/Login.css'

const Login = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const loginUrl = userType === 'partner' ? '/partners/login' : '/associates/login';
      const response = await axios.post(loginUrl, { email, senha });
      localStorage.setItem('token', response.data.token);

      if (userType === 'partner') {
        navigate('/partner/dashboard');
      } else {
        navigate('/associate/dashboard');
      }
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-content-left">
        <img src={logo} alt="Logo Clube do Empresário" className="login-logo" />
        <div className="login-info">
          <h3>Performance Adaptável</h3>
          <p>Nosso produto se ajusta facilmente às suas necessidades, aumentando a eficiência.</p>
          <h3>Construído para durar</h3>
          <p>Durabilidade inigualável que vai além do esperado.</p>
          <h3>Experiência do usuário</h3>
          <p>Interface intuitiva e fácil de usar para a sua rotina.</p>
          <h3>Funcionalidade inovadora</h3>
          <p>Recursos que estabelecem novos padrões.</p>
        </div>
      </div>
      
      <div className="login-content-right">
        <h2>Área de Acesso</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Entrar</button>
          
          <div className="login-options">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="remember-label">Lembrar-me</label>
            <button type="button" className="forgot-password" onClick={() => {/* ação para recuperar senha */}}>Esqueceu sua senha?</button>
          </div>
        </form>
      </div>
    </div>
  );  
};

export default Login;