// pages/Home/Home.jsx
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import bannerHome from '../../assets/images/banner-home.jpg'

import './Home.css'

const Home = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Erreur API :', err))
  }, [])

  return (
    <div className="home">
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      <div className="home__grid">
        {properties.map((property) => (
          <Card
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
