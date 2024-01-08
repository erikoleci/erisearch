import React, { useState, useEffect } from "react";
import ButtonsContainer from "./ButtonsContainer";
import SearchFilter from "./SearchFilter";
import Data from "../data/Data";
import "./Table.css";

function Table() {
  const [data, setData] = useState(Data);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedComplex, setSelectedComplex] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const onTypeButtonClick = (type) => {
    setSelectedType(type);
  };

  const onButtonClick = (clients) => {
    setSelectedClients(clients);
  };

  const handleReturnButtonClick = () => {
    setSelectedClients([]);
    setSelectedComplex("All");
    setSelectedType("All")
  };

  const getRowHeight = (tags) => {
    const baseHeight = 200;
    const complexTag = tags.find((tag) => tag.includes("complex:"));
    const complexityLevel = complexTag
      ? parseInt(complexTag.split(":")[1], 10)
      : 1;

    return baseHeight + (complexityLevel - 1) * 20;
  };

  const onComplexButtonClick = (complex) => {
    setSelectedComplex(complex);
  };

  useEffect(() => {
    console.log("Applying filters:", {
      searchTerm,
      selectedClients,
      selectedComplex,
      selectedType,
    });
  
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedClients.length === 0 ||
          selectedClients.includes(item.client)) &&
        (selectedComplex === "All" ||
          item.tags.some((tag) => tag === selectedComplex)) &&
        (selectedType === "All" || item.type === selectedType)
    );
  
    console.log("Filtered data:", filtered);
  
    setFilteredData(filtered);
  }, [data, searchTerm, selectedClients, selectedComplex, selectedType]);
  

  return (
    <div className="App">
     <div className="searchbar-container">
     <SearchFilter onSearch={handleSearch} />
     </div>
      
      <ButtonsContainer
        onButtonClick={onButtonClick}
        onReturnButtonClick={handleReturnButtonClick}
        onComplexButtonClick={onComplexButtonClick}
        onTypeButtonClick={onTypeButtonClick}
        selectedType={selectedType}
        selectedClients={selectedClients}
        selectedComplex={selectedComplex}
      />
      <div className="table-container">
        {filteredData.map((val, key) => (
          <div
            key={key}
            className={`card ${selectedClients.includes(val.client[0]) ? "selected" : ""}`}
            style={{ height: getRowHeight(val.tags) }}
          >
            <p className="name">Name: {val.name}</p>
            <p className="type">Type: {val.type}</p>
            <p className="client">Client: {val.client.join(", ")}</p>
            <p className="props">Props: {val.props.join(", ")}</p>
            <p className="tags">Tags: {val.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
