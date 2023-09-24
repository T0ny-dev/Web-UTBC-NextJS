"use client"

import React, { useState } from 'react';
import './Tabs.css'; // Agrega los estilos CSS en un archivo separado

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <h2>Programa de Educación Continua</h2>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Modalidades
        </button>
        <button
          className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Certificación Universitaria
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Calidad Educativa
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Contenido de la pestaña 1</p>}
        {activeTab === 1 && 
        <div className='tab__certification'>
          <div className='tab__certification__image'>
            <img src='./cert.png'></img>
          </div>
          <div className='tab__certification__content'>
            <h2>Aprende con respaldo académico</h2>
            <ul>
              <li><strong>Certificacion Universitaria:</strong> Una iniciativa de la universidad tamaulipeca valida tus competencias con respaldo academico</li>
              <li><strong>Validación de Conocimientos:</strong> Un diploma respaldado por una institución académica confirma que has adquirido un conjunto específico de conocimientos y habilidades. Esto valida tu competencia en un campo particular.</li>
              <li><strong>Acceso a Oportunidades Laborales:</strong> Muchas empresas requieren títulos académicos como requisito mínimo para ciertos puestos. Tener un diploma te permite acceder a un espectro más amplio de oportunidades laborales.</li>
            </ul>
          </div>
        </div>}
        {activeTab === 2 && <p>Contenido de la pestaña 3</p>}
      </div>
    </div>
  );
}

export default Tabs;
