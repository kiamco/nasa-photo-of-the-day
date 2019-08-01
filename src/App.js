import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import Header from "../src/components/header"
import ClickMeBtn from "../src/components/ClickMe"
import "../src/scss/index.css"
function App() {
  const [apodData, setApodData] = useState();


  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=waG6Pxgs86IYfgqvWwCvEigiY4T8OIEjhveFqejn")
  .then(response => {
    console.log(response);
    setApodData(response.data);

  })
  .catch(err => console.log(`App.js/ err: ${err}`))
  },[])



  return (
    <div className="App">
      <Header />
      <ClickMeBtn apodData={apodData}/>
    </div>
  );
}

export default App;


// // copyright: "Alan Pham"
// date: "2019-07-31"
// explanation: "To some, this nebula looks like the head of a fish. However, this colorful cosmic portrait really features glowing gas and obscuring dust clouds in IC 1795, a star forming region in the northern constellation Cassiopeia. The nebula's colors were created by adopting the Hubble color palette for mapping narrow emission from oxygen, hydrogen, and sulfur atoms to blue, green and red colors, and further blending the data with images of the region recorded through broadband filters. Not far on the sky from the famous Double Star Cluster in Perseus, IC 1795 is itself located next to IC 1805, the Heart Nebula, as part of a complex of star forming regions that lie at the edge of a large molecular cloud. Located just over 6,000 light-years away, the larger star forming complex sprawls along the Perseus spiral arm of our Milky Way Galaxy. At that distance, this picture would span about 70 light-years across IC 1795.   Astrophysicists: Browse 2,000+ codes in the Astrophysics Source Code Library"
// hdurl: "https://apod.nasa.gov/apod/image/1907/FishheadNebula_Pham_2401.jpg"
// media_type: "image"
// service_version: "v1"
// title: "IC 1795: The Fishhead Nebula"
// url: "https://apod.nasa.gov/apod/image/1907/FishheadNebula_Pham_960.jpg"