import React from 'react';
import './App.css';
import Today from './components/today/today.js';
import Table from './components/table/table.js';
import Cells from './components/cells/cells.js';

function App() {
  return (
    <div className="App">
      <Today/>
      <Table/>
      <Cells/>
    </div>
  );
}

export default App;
