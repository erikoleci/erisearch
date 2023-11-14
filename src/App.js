import React, { useState } from 'react';
import "./App.css"
import Table from "./components/Table"
function App() {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  const buttonLabels = ['search', 'search', 'search'];

  return (
    <div className="container">
      <Table/>
    </div>
  );
}

export default App;
