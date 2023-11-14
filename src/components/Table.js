import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import SearchFilter from './SearchFilter';
import './Table.css';
import Data from "../data/Data"; 

function Table() {
  const [data, setData] = useState(Data); 
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleButtonClick = (action) => {
    console.log(`Button clicked: ${action}`);
  };

  return (
    <div className="App">
      <SearchFilter onSearch={handleSearch} />
      <Buttons onButtonClick={handleButtonClick} />
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
            <tr key={key}>
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
