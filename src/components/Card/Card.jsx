import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card-image">
        <img src={cover} alt={title} />
      </div>
      <h3>{title}</h3>
    </Link>
  )
}

export default Card
