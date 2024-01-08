import React from "react";

const TagButton = ({ buttonData, selectedButtons, onClick }) => {
  const isButtonSelected = selectedButtons.includes(buttonData.tags);

  const handleClick = () => {
    onClick(buttonData);
  };

  return (
    <button
      className={`complex-button ${isButtonSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {buttonData.name}
    </button>
  );
};

export default TagButton;
