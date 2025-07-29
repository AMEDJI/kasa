import'./Header.css'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'></div>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header