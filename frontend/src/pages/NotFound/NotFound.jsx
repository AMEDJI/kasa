import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'; 
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
    </>
  );
};

export default NotFound;
