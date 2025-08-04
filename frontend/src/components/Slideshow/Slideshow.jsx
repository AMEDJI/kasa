import { useState } from "react";
import "./Slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <button className="prev" onClick={goToPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="next" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
