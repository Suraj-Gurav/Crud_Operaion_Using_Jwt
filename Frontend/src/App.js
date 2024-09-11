import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routing from './Component/Routing'

const App = () => {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
