import React, { useState } from "react";
import TagButton from "./TagButton";
import ClientButton from "./ClientButton";
import "./Button.css";
import buttonData from "../data/buttonData";
import TypeButton from "./TypeButton";

const ButtonsContainer = ({
  onButtonClick,
  onReturnButtonClick,
  onComplexButtonClick,
  onTypeButtonClick,
  selectedType ,
  selectedClients,
  selectedComplex,
}) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleTypeButtonClick = (buttonData) => {
    const isSelected = selectedButtons.includes(buttonData.id);

    if (isSelected) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((id) => id !== buttonData.id)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, buttonData.id]);
    }
    onTypeButtonClick(buttonData.type);
  };

  const handleTagButtonClick = (buttonData) => {
    const isSelected = selectedButtons.includes(buttonData.id);

    if (isSelected) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((id) => id !== buttonData.id)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, buttonData.id]);
    }

    onComplexButtonClick(buttonData.tags);
  };

  const handleClientButtonClick = (client) => {
    const isSelected = selectedButtons.includes(client.id);

    if (isSelected) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((id) => id !== client.id)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, client.id]);
    }

    onButtonClick(client);
  };

  const handleReturnButtonClick = () => {
    setSelectedButtons([]);
   

    onReturnButtonClick();
  };

  return (
    <div>
      <div className="rectangular-container">
        {buttonData.client.map((button, index) =>
          !button.tags && (
            <ClientButton
              key={index}
              buttonData={button}
              selectedButtons={selectedClients}
              onClick={handleClientButtonClick}
            />
          )
        )}
      </div>

      <div className="button-container">
        {buttonData.complex.map((button, index) =>
          button.tags && (
            <TagButton
              className={`complexButton ${selectedButtons.includes(button.id) ? "selected" : ""
                }`}
              key={index}
              buttonData={button}
              selectedButtons={selectedComplex}
              onClick={handleTagButtonClick}
            />
          )
        )}
      </div>

      <div className="typebutton">
        {buttonData.type.map((button, index) => (
          <TypeButton
            key={index}
            buttonData={button}
            selectedButtons={selectedType}
            onClick={handleTypeButtonClick}

          />
        ))}
      </div>

      <button className="button-return" onClick={handleReturnButtonClick}>
        Return
      </button>
    </div>
  );
};

export default ButtonsContainer;
