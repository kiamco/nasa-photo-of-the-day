import React, { useState, useEffect } from "react";

function AsteroidCard(props){
    const [ name, setName ] = useState(props.data);
    console.log(name)
    return(
        <div className="card-container">
            <h2>{name}</h2>
            <p>Is it a threat</p>
        </div>
    );
}

export default AsteroidCard ;