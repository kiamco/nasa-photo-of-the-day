import React from "react";
import Nav from "./nav";
import ClickMe from "./ClickMe";

function Header(props){
    return(
        <div className="header">
            <Nav />
            <h1>Discover what lies beyond.</h1>
            {/* <ClickMe apodData={props.apodData}/> */}
        </div>
    );

}


export default Header;