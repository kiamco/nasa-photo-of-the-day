import React, { useState, useEffect } from "react";

function AsteroidCard(props){

    console.log(props)
    return(
        <div className="card-container">
            <h2>{props.title}</h2>
            <img src={props.img} alt='picture'></img>
            <p>{props.explanation}</p>
        </div>
    );
}

export default AsteroidCard;