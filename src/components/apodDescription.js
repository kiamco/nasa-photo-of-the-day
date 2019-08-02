import React, { useState } from "react";
import Icons from "./icons";

function Description(props){
    const [title, setTitle] = useState(props.imgName);
    const [description, setDescription] = useState(props.imgDescription);
    return(
        <div className="img-description">
            <h1>{title}</h1>
            <p>{description}</p>
            {/* add like icon and other */}
            <Icons />
        </div>
      
    );
}

export default Description;