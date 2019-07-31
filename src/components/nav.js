import React from "react";


function Nav(props){
    return(
        <header>
            <div className="logo">
                <img src="#" alt="log" />
                <h1>Asteroids</h1>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">About Us</a>
            </nav>
        </header>
    );
}

export default Nav;