import'./Card.css'

import './Card.css'

const Card = ({ title, cover }) => {
  return (
    <article className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </article>
  )
}

export default Card
