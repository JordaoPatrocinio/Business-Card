import React from 'react';
import '../../components/layout/MenuAssociate/CategoriesSection.css';

const categories = ['Alimentação', 'Beleza', 'Tecnologia', 'Serviços'];

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <h2>Categorias</h2>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
