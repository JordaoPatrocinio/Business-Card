import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../components/layout/uploads/logo-cartao.png'; // Substitua pelo caminho correto para a logomarca
import '../ChooseRegister.css';

const ChooseRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="choose-register-container">
      <div className="choose-register">
        <img src={logo} alt="Logo Clube do Empresário" className="logo" />
        <h2>Área de Registro</h2>
        <p>Escolha uma opção para criar sua conta</p>
        <div className="register-options">
          <button onClick={() => navigate('/register/associate')} className="register-button">
            Associado
          </button>
          <button onClick={() => navigate('/register/partner')} className="register-button">
            Parceiro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
