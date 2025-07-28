import './Banner.css'
// Banner.jsx

import React from 'react';
import './Banner.css'; // Le fichier CSS pour le style de la bannière
import bannerImage from '../../assets/images/banner-propos.png';  // Chemin de l'image

const AboutBanner = () => {
  return (
    <div className="banner">
      {/* Image de la bannière */}
      <img src={bannerImage} alt="Bannière accueil" className="banner-img" />
    </div>
  );
};

export default AboutBanner;
