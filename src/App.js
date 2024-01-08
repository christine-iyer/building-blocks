import { useState, useEffect } from "react";
import NewBlock from "./components/NewBlock";
import './App.css';

function App() {
  const [maxBid, setMaxBid] = useState({
    title: "",
  });
  const handleChange = (event) => {
    setMaxBid({ ...maxBid, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDafault();
  };
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <NewBlock
        setMaxBid={setMaxBid}
        maxBid={maxBid}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
