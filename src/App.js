import React, { useState, useEffect }from "react";
import Loading from './components/loading'
import Axios from "axios";
import "./App.css"
import ApodList from './components/apodList'
import Moment from 'moment';


function App() {
  const [endspan, setEndSpan] = useState(Moment().format('YYYY-MM-DD'))
  const [startSpan, setStartSpan] = useState(Moment().subtract(20, 'days').format('YYYY-MM-DD'));
  const [dateSpan, setDateSpan] = useState(`&start_date=${startSpan}&end_date=${endspan}`);
  const [apodData, setApodData] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=FpyUbGqSAHs5TkQWHCAZ3SJ1Cj5wnu5N1d9VKgjw${dateSpan}`)
        .then(response => {
          console.log("Success",response.data);
          setApodData(response.data);
          setLoading(false);
        })
        .catch(err => console.log(`App.js/ err: ${err}`))
    }, [])


  return (
    <div className="App">
      <div className="container">
        {loading ? <Loading /> : <ApodList data={apodData} />}
        {/* <ApodList data={apodData} /> */}
      </div>
    </div>
  );
}

export default App;
