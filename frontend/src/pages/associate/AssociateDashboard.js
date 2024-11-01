import React, { useEffect, useState } from 'react';
import DashboardMenu from '../../components/layout/MenuAssociate/DashboardMenu';
import HighlightsBanner from './HighlightsBanner';
import CategoriesSection from './CategoriesSection';
import PartnerList from './PartnerList';
import '../../components/layout/MenuAssociate/AssociateDashboard.css';
import axios from 'axios';

const AssociateDashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUserName(response.data.nomeResponsável);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="dashboard-container">
      <DashboardMenu />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Bem-vindo, {userName}</h1>
        </header>
        <HighlightsBanner />
        <CategoriesSection />
        <PartnerList />
      </div>
    </div>
  );
};

export default AssociateDashboard;
