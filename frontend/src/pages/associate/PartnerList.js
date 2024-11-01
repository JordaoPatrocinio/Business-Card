import React from 'react';
import '../../components/layout/MenuAssociate/PartnerList.css';

const partners = [
  { name: 'Empresa A', discount: '10%' },
  { name: 'Empresa B', discount: '15%' },
  { name: 'Empresa C', discount: '20%' },
];

const PartnerList = () => {
  return (
    <div className="partner-list">
      <h2>Empresas Parceiras</h2>
      <div className="partner-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <h3>{partner.name}</h3>
            <p>Desconto: {partner.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
