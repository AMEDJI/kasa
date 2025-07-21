import './Banner.css'
// Banner.jsx

import React from 'react';
import './Banner.css'; // Le fichier CSS pour le style de la bannière
import bannerImage from '../../assets/images/banner-home.jpg';  // Chemin de l'image

const Banner = () => {
  return (
    <div className="banner">
      {/* Image de la bannière */}
      <img src={bannerImage} alt="Bannière accueil" className="banner-img" />
      
      {/* Texte sur l'image */}
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
