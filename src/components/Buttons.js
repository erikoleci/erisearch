import React from 'react';
import "./Buttons.css"

const Buttons = ({ onButtonClick, onReturnButtonClick }) => {
  const buttonsData = [
    { name: 'Instagram', client: 'Vodafone' },
    { name: 'Netflix', client: 'Netflix' },
    { name: 'AirBnB', client: 'Airbnb' },
    { name: 'Vodaphone', client: 'Vodafone' },
    { name: 'Google', client: 'Google' },
  ];

  const handleClick = (buttonData) => {
    onButtonClick(buttonData.client);
  };

  return (
    <div className="button-container">
      {buttonsData.map((button, index) => (
        <button key={index} className="button" onClick={() => handleClick(button)}>
          {button.name}
        </button>
      ))}
      <button className="button-return" onClick={() => onReturnButtonClick()}>
        Return
      </button>
    </div>
  );
};

export default Buttons;
