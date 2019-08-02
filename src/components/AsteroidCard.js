import React, { useState, useEffect } from "react";
import styled from "styled-components";


function AsteroidCard(props){
// const cardContainer = styled.div`
//     margin-top: 100px;
//     display: flex;
//     flex-flow: column nowrap;
//     align-items: center;
//     justify-content: space-between;
//     max-width: 488px;
//     margin: 55px auto;
//     border: 2px solid black;
//     border-radius: 1rem;
//     background: black;
//     color: white;
// `
    return(
        <div className="card-container">
            <img src={props.img} alt='picture'></img>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
        </div>
    );
}

export default AsteroidCard;