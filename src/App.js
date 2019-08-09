import React, { useState, useEffect }from "react";

import Axios from "axios";
import "./App.css"
import ApodList from './components/apodList'


function App() {

  const [dateSpan, setDateSpan] = useState("&start_date=2017-06-20&end_date=2017-07-10");
  const [apodData, setApodData] = useState([]);

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=FpyUbGqSAHs5TkQWHCAZ3SJ1Cj5wnu5N1d9VKgjw${dateSpan}`)
        .then(response => {
          console.log("Success",response.data);

          setApodData(response.data);
        })
        .catch(err => console.log(`App.js/ err: ${err}`))
    }, [])


  return (
    <div className="App">
      <div class="container">
        <ApodList data={apodData} />
      </div>
    </div>
  );
}

export default App;
