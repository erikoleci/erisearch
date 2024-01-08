import React from "react";

const ClientButton = ({ buttonData, selectedButtons, onClick, }) => {
  console.log(selectedButtons.includes(buttonData.client),"ketu eshte kushti")
  return(
    <button
    className={"round-button"}
     
    onClick={() => onClick(buttonData.client)}
  >
    <img className={`${
      selectedButtons.includes(buttonData.client) ? "selected" : ""
    }`} src={buttonData.icon} alt={buttonData.name}  />
  </button>

  )
  }
export default ClientButton;
