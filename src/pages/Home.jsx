import React from "react";
import logements from "../Data/data"; // temporairement les données mock
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
