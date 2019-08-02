import React, { useState, useEffect } from "react";
import AsteroidCard from "./AsteroidCard";
import { Button } from "semantic-ui-react";

function ClickMeBtn(props){
    console.log(props)
    const [show,setShow] = useState(false);

    const display = () => setShow(true);
   
    
    return(
        <div class='large-button'>
            <Button onClick={display} inverted color='red' size='massive'> Click Me</Button>
            {show && <AsteroidCard img={props.apodData.hdurl} explanation={props.apodData.explanation}  title={props.apodData.title}/>}
        </div>
    );
}

export default ClickMeBtn;