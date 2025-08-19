// pages/About/About.jsx
import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/images/banner-propos.png";
import collapseData from "../../data/CollapseData.json";

const About = () => {
  return (
    <div className="about">
      <Banner image={bannerAbout} />
      
      {collapseData.map(({ id, title, Description }) => (
        <Collapse 
        key={id} 
        title={title} 
        content={Description} 
        />
      ))}
    </div>
  );
};

export default About;
