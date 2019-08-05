import React, { useState } from "react";
import Icons from "./icons";
import Styled from "styled-components";

function Description(props){
    
    const [show, setShow] = useState(false);
    const ReadMore = Styled.button`
        border:1px solid black;
        background:white;
        font-style: italic;
        font-size: 1rem;
        margin: 10px;
        width:50%;
        margin-left:25%;
        border-radius: .5rem;
        cursor:pointer;
    `


    
    return(
        <div className="img-description">
            <h1>{props.imgName}</h1>
            <ReadMore onClick={() => setShow(show === false ? true : false)}>Description</ReadMore>
            <p>{show && props.imgDescription}</p>
            {/* add like icon and other */}
            <Icons />
        </div>
      
    );
}

export default Description;