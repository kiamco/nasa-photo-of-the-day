import React, {useState} from "react";
import Styled from "styled-components";
function ApodCard(props) {


    return(
        <div className='picture-container'>
            <img src={props.url} alt="apod-picture" />
        </div>   
     );
}

export default ApodCard;