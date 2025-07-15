import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'

const Home = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Erreur API :', err))
  }, [])

  return (
    <div>
      <Banner image="/assets/banner-home.jpg" title="Chez vous, partout et ailleurs" />
      <div className="cards-container">
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
