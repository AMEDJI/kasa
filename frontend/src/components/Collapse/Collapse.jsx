import { useState } from 'react';
import './Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((o) => !o);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggle}>
        <h3>{title}</h3>

        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="collapse-icon"
        />
      </div>

      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
