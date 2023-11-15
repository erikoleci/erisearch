import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import SearchFilter from './SearchFilter';
import './Table.css';
import Data from "../data/Data"; 

const getRowHeight = (tags) => {
  const complexMultiplier = 50; 
  const complexTag = tags.find(tag => tag.includes('complex:'));
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
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedClient || item.client.includes(selectedClient))
    );
    setFilteredData(filtered);
  }, [data, searchTerm, selectedClient]);

  return (
    <div className="App">
      <SearchFilter onSearch={handleSearch} />
      <Buttons onButtonClick={handleButtonClick} onReturnButtonClick={handleReturnButtonClick} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Client</th>
            <th>Props</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((val, key) => (
            <tr key={key} style={{ height: getRowHeight(val.tags) }}>
              <td>{val.name}</td>
              <td>{val.client.join(', ')}</td>
              <td>{val.props.join(', ')}</td>
              <td>{val.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
