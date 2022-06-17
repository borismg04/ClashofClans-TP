import React from 'react';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import TableClan from './components/TableClan';

function App() {

  return (
    <div className="App">

      <div>
        <TableClan/>
      </div>

    </div>
  );
}

export default App;
