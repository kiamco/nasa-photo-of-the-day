import React, {useState} from "react";
import Styled from "styled-components";
import Icons from './icons'
import { Route, NavLink } from "react-router-dom"

function ApodCard(props) {
    const { date, title, explanation, hdurl } = props

    const [show, setShow] = useState(false);
    const ReadMore = Styled.button`
        border:1px solid black;
        background:white;
        font-style: italic;
        font-size: 1rem;
        margin: 10px;
        width:50%;
        margin-left:25%;
        border-radius: .3rem;
        cursor:pointer;
        &:hover{
            background: #F0F0F0;
        }
    `

    return(
        <div className='content-info'>
            <div className='picture-container'>
             <img src={hdurl} alt="apod-picture" />
            </div>   
            <div className="img-description">
                <h1>{title}</h1>
                <ReadMore onClick={() => setShow(show === false ? true : false)}>description</ReadMore>
                {show && <p className='description'>{explanation}</p>}
                <Icons />
            </div>
        </div>
     );
}

export default ApodCard;