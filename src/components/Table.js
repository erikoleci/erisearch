import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import SearchFilter from './SearchFilter';
import Data from '../data/Data';
import './Table.css';

const getRowHeight = (tags) => {
  const complexMultiplier = 200;
  const complexTag = tags.find((tag) => tag.includes('complex:'));
  return complexTag ? complexMultiplier * parseInt(complexTag.split(':')[1], 10) : 40;
};

function Table() {
  const [data, setData] = useState(Data);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleButtonClick = (client) => {
    setSelectedClient(client);
  };

  const handleReturnButtonClick = () => {
    setSelectedClient('');
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedClient || item.client.includes(selectedClient))
    );
    setFilteredData(filtered);
  }, [data, searchTerm, selectedClient]);

  return (
    <div className="App">
      <SearchFilter onSearch={handleSearch} />
      <Buttons onButtonClick={handleButtonClick} onReturnButtonClick={handleReturnButtonClick} />
      <div className="table-container">
        {filteredData.map((val, key) => (
          <div key={key} className="card" style={{ height: getRowHeight(val.tags) }}>
            <p className="name">Name: {val.name}</p>
            <p className="client">Client: {val.client.join(', ')}</p>
            <p className="props">Props: {val.props.join(', ')}</p>
            <p className="tags">Tags: {val.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
