import { useState } from 'react'
import './Collapse.css'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false) //useState(false) = la section est fermée par défaut.
  //isOpen = quand on clique sur le titre, pour l'ouvrir ou fermer

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggle}>
        <h3>{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  )
}

export default Collapse
