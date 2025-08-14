// components/Banner/Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img
        src={image}
        alt={title ? `Bannière : ${title}` : 'Bannière'}
        className="banner-img"
      />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

export default Banner;
