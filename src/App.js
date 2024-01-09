import { useState, useEffect } from "react";
import NewBlock from "./components/NewBlock";
import Display from "./components/Display";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <NewBlock />
      <Display />
    </div>
  );
}

export default App;
