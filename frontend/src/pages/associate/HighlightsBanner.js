import React from 'react';
import '../../components/layout/MenuAssociate/HighlightsBanner.css';

const HighlightsBanner = () => {
  return (
    <div className="highlights-banner">
      <h2>Destaques da Semana</h2>
      <div className="banner-carousel">
        {/* Substitua abaixo por imagens ou componentes de banner reais */}
        <div className="banner-item">Promoção 1</div>
        <div className="banner-item">Promoção 2</div>
        <div className="banner-item">Promoção 3</div>
      </div>
    </div>
  );
};

export default HighlightsBanner;
