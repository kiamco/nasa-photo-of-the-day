import React, {useState} from "react";

function ApodCard(props) {

    const [apodImage, setApodImage] = useState(props.url);

    return(
        <div>
            <img src={apodImage} alt="apod-picture" />
        </div>  
    );
}

export default ApodCard;