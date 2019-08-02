import React, { useState } from "react";
import Icons from "./icons";

function Description(props){
  
    return(
        <div className="img-description">
            <h1>{props.imgName}</h1>
            <p>{props.imgDescription}</p>
            {/* add like icon and other */}
            <Icons />
        </div>
      
    );
}

export default Description;