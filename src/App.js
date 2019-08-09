import React, { useState, useEffect }from "react";
import ApodImage from "./components/apodCard"
import ApodDescription from "./components/apodDescription";
import Axios from "axios";
import "./App.css"
import ApodList from './components/apodList'


function App() {

  // const [apodImg, setApodImg] = useState();
  // const [title, setTitle] = useState();
  // const [description, setDescription] = useState();
  const [dateSpan, setDateSpan] = useState("&start_date=2017-07-05&end_date=2017-07-10");
  const [apodData, setApodData] = useState([]);
    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=FpyUbGqSAHs5TkQWHCAZ3SJ1Cj5wnu5N1d9VKgjw${dateSpan}`)
        .then(response => {
          console.log(response.data);
          // const {hdurl, title , explanation} = response.data 
          // setApodImg(hdurl);
          // setTitle(title);
          // setDescription(explanation)
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
