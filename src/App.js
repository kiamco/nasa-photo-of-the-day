import React, { useState, useEffect }from "react";
import ApodImage from "./components/apodCard"
import ApodDescription from "./components/apodDescription";
import Axios from "axios";


function App() {

  const [apodImg, setApodImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] =useState();
    
  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=FpyUbGqSAHs5TkQWHCAZ3SJ1Cj5wnu5N1d9VKgjw")
      .then(response => {
        console.log(response);
        setApodImg(response.data.hdurl);
        setTitle(response.data.title);
        setDescription(response.data.explanation)
      })
      .catch(err => console.log(`App.js/ err: ${err}`))
  }, [])



  return (
    <div className="App">
      <ApodImage url={apodImg} />
      <ApodDescription imgName={title} imgDescription={description} />
    </div>
  );
}

export default App;
