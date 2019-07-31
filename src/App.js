import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import Nav from "../src/components/nav";

function App() {
  const [asteroidData, setAsteroidData] = useState([]);

  // Axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
  // .then(response => {
  //   console.log("Success:" + response);
  //   setAsteroidData(response);
  // })
  // .catch(err => console.log(`App.js/ err: ${err}`))


  return (
    <div className="App">
    </div>
  );
}

export default App;
