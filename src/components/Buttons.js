import React from 'react';
import "./Buttons.css"

const Buttons = ({ onButtonClick }) => {
  const handleClick = (action) => {
    onButtonClick(action);
  };

  return (
    <div className="button-container">
      <button className="button" onClick={() => handleClick('Button 1')}>
        Button 1
      </button>
      <button className="button" onClick={() => handleClick('Button 2')}>
        Button 2
      </button>
      <button className="button" onClick={() => handleClick('Button 3')}>
        Button 3
      </button>
    </div>
  );
};

export default Buttons;
