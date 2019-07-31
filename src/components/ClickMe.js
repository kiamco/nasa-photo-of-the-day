import React, { useState, useEffect } from "react";
import AsteroidCard from "./AsteroidCard";

function ClickMeBtn(props){
    // console.log(props)
    const [show,setShow] = useState(false);

    const display = () => setShow(true);
   
    
    return(
        <div>
            <button onClick={display}>Click Me</button>
            {show && props.asteroids.map(el => <AsteroidCard data={el} />)}
        </div>
    );
}

export default ClickMeBtn;