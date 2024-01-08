import React from "react";

const TypeButton = ({ buttonData, selectedButtons, onClick }) => {
  const isButtonSelected = selectedButtons.includes(buttonData.type);
  console.log(selectedButtons.includes(buttonData.type),"ketu eshte kushtiiiiiiiiiiiiiiiiiiiii")
 
  const handleClick = () => {
    onClick(buttonData);
  };
  return (
    <button
      className={`typebutton ${isButtonSelected ? "selected" : ""}`}
      onClick={handleClick}>
        {buttonData.type}
    </button>
  )
  }

  export default TypeButton;


