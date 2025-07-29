import { useParams } from 'react-router-dom'

const Logement = () => {
  const { id } = useParams()

  return (
    <section className="logement">
      <h1>Détails du logement {id}</h1>
    </section>
  )
}

export default Logement
