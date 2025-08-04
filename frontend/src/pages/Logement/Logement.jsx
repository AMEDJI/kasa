import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Logement.css";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Logement non trouvé");
        return res.json();
      })
      .then((data) => setLogement(data))
      .catch(() => navigate("/404"));
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? "star filled" : "star"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="host-info">
            <p>{logement.host.name}</p>
          <div className="rating">
          {renderStars(Number(logement.rating))}
        </div>
  </div>
  <img src={logement.host.picture} alt={logement.host.name} />
</div>

      </div>



      <div className="logement-details">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
