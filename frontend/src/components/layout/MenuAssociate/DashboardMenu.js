import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import '../MenuAssociate/DashboardMenu.css';
import logo from '../uploads/logo-cartao.png'; // Certifique-se de ajustar o caminho para a logomarca

const DashboardMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div>
      {/* Menu Hamburger para telas menores */}
      <div className="menu-hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </div>
      
      {/* Menu lateral */}
      <div className={`dashboard-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Logomarca no topo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        
        {/* Ícones do menu */}
        <div className="menu-items">
          <NavLink onClick={() => handleNavigation('/dashboard')} className="menu-item">
            <HomeIcon />
            {isMenuOpen && <span className="menu-text">Início</span>}
          </NavLink>
          <NavLink onClick={() => handleNavigation('/novidades')} className="menu-item">
            <MailIcon />
            {isMenuOpen && <span className="menu-text">Novidades</span>}
          </NavLink>
          <NavLink onClick={() => handleNavigation('/lojas')} className="menu-item">
            <StoreIcon />
            {isMenuOpen && <span className="menu-text">Lojas</span>}
          </NavLink>
          <NavLink onClick={() => handleNavigation('/matchmarking')} className="menu-item">
            <PeopleIcon />
            {isMenuOpen && <span className="menu-text">Matchmarking</span>}
          </NavLink>
        </div>
        
        {/* Rodapé do menu com configurações e logout */}
        <div className="menu-footer">
          <NavLink onClick={() => handleNavigation('/configuracoes')} className="menu-item">
            <SettingsIcon />
            {isMenuOpen && <span className="menu-text">Configurações</span>}
          </NavLink>
          <button onClick={() => handleNavigation('/logout')} className="logout-button menu-item">
            <ExitToAppIcon />
            {isMenuOpen && <span className="menu-text">Sair</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
