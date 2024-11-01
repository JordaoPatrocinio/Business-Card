import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../components/layout/uploads/logo-cartao.png'; // Substitua pelo caminho correto para a logomarca
import '../ChooseLogin.css';

const ChooseLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="choose-login-container">
      <div className="choose-login">
        <img src={logo} alt="Logo Clube do Empresário" className="logo" />
        <h2>Área de Acesso</h2>
        <p>Escolha uma opção para acessar sua conta.</p>
        <div className="login-options">
          <button onClick={() => navigate('/login/associate')} className="login-button">
            Associado
          </button>
          <button onClick={() => navigate('/login/partner')} className="login-button">
            Parceiro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
