import "./About.css";
import Collapse from '../../components/Collapse/Collapse'
import AboutBanner from "../../components/Banner/AboutBanner"; 

const About = () => {
  return (
    <div className="about">
      <AboutBanner /> 

      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale..."
      />
      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa..."
      />
      <Collapse
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite..."
      />
      <Collapse
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs..."
      />
    </div>
  )
}

export default About
