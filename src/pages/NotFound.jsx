import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  )
}

export default NotFound
