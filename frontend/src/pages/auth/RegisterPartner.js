import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axiosConfig';
import '../RegisterPartner.css';

const RegisterPartner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeResponsavel: '',
    cpf: '',
    email: '',
    senha: '',
    confirmaSenha: '',
    empresaNome: '',
    empresaCNPJ: '',
    endereco: '',
    aceitaTermos: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.senha !== formData.confirmaSenha) {
      setError('As senhas não correspondem');
      return;
    }
    if (!formData.aceitaTermos) {
      setError('Você precisa aceitar os Termos e Condições para se registrar.');
      return;
    }

    try {
      await axios.post('/partner/register', formData);
      setSuccess('Cadastro realizado com sucesso! Redirecionando para o login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Erro ao cadastrar. Verifique as informações e tente novamente.');
    }
  };

  return (
    <div className="register-partner-container">
      <h2>Registro de Parceiro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome do Responsável</label>
          <input type="text" name="nomeResponsavel" onChange={handleInputChange} required />
        </div>
        <div>
          <label>CPF</label>
          <input type="text" name="cpf" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" name="senha" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Confirmar Senha</label>
          <input type="password" name="confirmaSenha" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Nome da Empresa</label>
          <input type="text" name="empresaNome" onChange={handleInputChange} required />
        </div>
        <div>
          <label>CNPJ da Empresa</label>
          <input type="text" name="empresaCNPJ" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Endereço</label>
          <input type="text" name="endereco" onChange={handleInputChange} required />
        </div>
        <div className="terms">
          <input type="checkbox" name="aceitaTermos" onChange={handleInputChange} />
          <label>Aceito os Termos e Condições</label>
        </div>
        <button type="submit">Registrar</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default RegisterPartner;
