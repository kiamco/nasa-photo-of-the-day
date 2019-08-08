import React, { useState, useEffect }from "react";
import ApodImage from "./components/apodCard"
import ApodDescription from "./components/apodDescription";
import Axios from "axios";
import "./App.css"


function App() {

  const [apodImg, setApodImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] =useState();
    useEffect(() => {
      Axios.get("https://api.nasa.gov/planetary/apod?api_key=FpyUbGqSAHs5TkQWHCAZ3SJ1Cj5wnu5N1d9VKgjw")
        .then(response => {
          console.log(response);
          const {hdurl, title , explanation} = response.data 
          console.log(hdurl)
          setApodImg(hdurl);
          setTitle(title);
          setDescription(explanation)
        })
        .catch(err => console.log(`App.js/ err: ${err}`))
    }, [])


  return (
    <div className="App">
      <div class="container">
        <ApodImage url={apodImg} />
        <ApodDescription imgName={title} imgDescription={description} />
      </div>
    </div>
  );
}

export default App;
