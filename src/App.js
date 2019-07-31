import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import Header from "../src/components/header"
import ClickMeBtn from "../src/components/ClickMe"
function App() {
  const [asteroidData, setAsteroidData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=waG6Pxgs86IYfgqvWwCvEigiY4T8OIEjhveFqejn")
  .then(response => {
    console.log(response.data.near_earth_objects);
    setAsteroidData(response.data.near_earth_objects.map(el => el.name));
  })
  .catch(err => console.log(`App.js/ err: ${err}`))
  },[])



  return (
    <div className="App">
      <Header />
      <ClickMeBtn asteroids={asteroidData} />
    </div>
  );
}

export default App;
