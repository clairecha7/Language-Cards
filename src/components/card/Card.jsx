import React, { useState } from "react";
import "./Card.css";

const Card = ({ language }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleDetails = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="card-container" onClick={toggleDetails}>
      {showInfo ? (
        <div>
          <ul className="info">
            {language.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <img className="card-logo" src={language.img} alt={language.name} />
          <h3 className="card-title">{language.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
